import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@/utils/supabase/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);


export const runtime = "nodejs";
export const revalidate = 0; 
export const dynamic = "force-dynamic";

export async function POST(req: Request){
    const body = await req.text();
    const sig = (await headers()).get('stripe-signature');
    

    try{
        const e = stripe.webhooks.constructEvent(body, sig!, process.env.STRIPE_SECRET_HOOK!);

        if (e.type === "checkout.session.completed"){
            
            const session = e.data.object as Stripe.Checkout.Session;

            const user_id = session.metadata?.user_id;

            if (user_id)
            {
                const supabase = await createClient();
                await supabase.from('profile').update({plan: 'premium'}).eq("id", user_id)
            }

            return NextResponse.json({recieved: true});
        }
    }catch(err)
    {
        return new NextResponse(`Webhook Error}`, { status: 400 });
    }
}

