'use client'
import SubscriptionSuccess from '@/components/Congrats';
import Congrats from '@/components/Congrats';
import Upgrade from '@/components/Upgrade';
import { Spinner } from '@/components/ui/spinner';
import { createClient } from '@/utils/supabase/client';
import { preloadFont } from 'next/dist/server/app-render/entry-base';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner';

export type Profile = {
  plan : "free" | "premium",
  full_name: "string"
}

function page() {
  const [profile, setProfile] = useState<Profile>();
  const [loading, setLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const router = useRouter()
  const supabase = createClient();
  const handled = useRef(false);
 

  useEffect(()=>
  {
    const check_plan = async ()=>
      {
        const {data, error} = await  supabase.auth.getUser();

        const {data: profile} = await supabase.from('profile').select('full_name, plan').eq('id', data.user?.id).single();

        if (!profile) return ;
        setProfile(profile);
        setLoading(false);
      }

      check_plan();
  }, [])

  useEffect(() => {
    if (!profile || handled.current) return;
    if (searchParams.has("success") && profile?.plan === "premium" ) {
      toast.success("Thank you! Your plan is now active.")

      
      
    } else if (searchParams.has("failure") && profile?.plan !== "premium") {
      
      toast.error("Payment Failed, please try again")
    }

    router.replace(window.location.pathname);
    handled.current = true;
  }, [searchParams, profile?.plan]);



  return (
    <div className='md:p-6 relative flex items-center justify-center  mt-6'>
       {loading ? <Spinner className='size-8 text-primary' /> : (profile?.plan === "free" ? <Upgrade profile={profile} /> : <Congrats />) }
    </div>
  )
}

export default page