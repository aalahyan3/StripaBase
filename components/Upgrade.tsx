'use client'
import { Profile } from '@/app/main/page'
import React, { useEffect, useRef, useState } from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Separator } from './ui/separator'
import { createClient } from '@/utils/supabase/client'
import { Spinner } from './ui/spinner'
import { Button } from './ui/button'
import { CheckCircle2, CreditCard } from 'lucide-react'
import { Checkbox } from './ui/checkbox'
import { create_checkout_session } from '@/actions/create-checkout-session'

function Upgrade({profile}: {profile: Profile}) {
    const supabase = createClient();
    const [email, setEmail] = useState<string | undefined>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [agreed, setAgreed] = useState(false);
    const ref = useRef<HTMLInputElement>(null);
    useEffect(()=>
    {
        const fetch_data =  async () =>
        {
            const {error, data} = await supabase.auth.getUser();

            if (!data || error) return ;
            setEmail(data.user.email);
        }
        fetch_data();
    }, [])



    async function handlePurchase(){
      setLoading(true);
      create_checkout_session();
    }


  return (
    <div className=" flex w-full items-center justify-center p-4">
      <Card className="w-full  max-w-[1000px]">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <CreditCard className="w-5 h-5 text-primary" />
            </div>
            <CardTitle className="text-2xl">Upgrade Your Membership</CardTitle>
          </div>
          <CardDescription>
            You can use a test credit card: <code>4242 4242 4242 4242</code> 
          </CardDescription>
        </CardHeader>
        
        <Separator />
        
        <CardContent className="space-y-6 pt-6">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-muted-foreground">
                Full Name
              </label>
              <p className="text-lg font-semibold text-foreground">
                {profile.full_name}
              </p>
            </div>
            
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-muted-foreground">
                Email Address
              </label>
              <p className="text-lg font-semibold text-foreground">
                {email || 'Loading...'}
              </p>
            </div>
          </div>

          <Separator />

          <div className="bg-muted/50 rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground"> Subscription</span>
              <span className="text-2xl font-bold text-foreground">$0.99</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <span>Billed on time</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 border rounded-lg">
            <Checkbox 
              id="terms" 
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked === true)}
              className="mt-0.5"
            />
            <label
              htmlFor="terms"
              className="text-sm leading-relaxed cursor-pointer select-none"
            >
              I understand that this is just a showcase, and i won't use my real card (like if you will )
            </label>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button 
            disabled={!agreed} 
            onClick={() => {
              handlePurchase()

            }}
            className="w-full"
            size="lg"
          >
            {loading ?  <span>processing payment <Spinner className='inline ml-4' /></span> : <span>Continue with Stripe</span>}
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            Your payment information will be securely processed
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Upgrade