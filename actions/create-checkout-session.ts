"use server"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Stripe from "stripe"

export async function create_checkout_session(){

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const   supabase = await createClient();

    const {data} = await supabase.auth.getUser();

    if (!data?.user) return ;
    const session = await stripe.checkout.sessions.create({
        line_items:[{
            "price": "price_1SMvh4BHDyFpEi59jMf5Wz4N",
            quantity: 1
        }],
        mode: 'payment',
        success_url: process.env.DOMAIN + "/main?success",
        cancel_url: process.env.DOMAIN + "/main?failure",
        metadata:
        {
            user_id: data.user.id
        }
    })

    if (session?.url)
        redirect(session?.url);
}