"use server"

import { createClient } from "@/utils/supabase/server";
import { SignInWithPasswordlessCredentials, SignUpWithPasswordCredentials } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData){
    const supabase = await createClient();

    const data: SignUpWithPasswordCredentials = {
        email:formData.get('email') as string,
        password:formData.get('password') as string
    }

    

    const {error} = await supabase.auth.signInWithPassword(data);

    if (error)
        return {success:false, message: error instanceof Error ? error.message : 'Something Went Wrong'}
    revalidatePath('/', 'layout');
    redirect('/main');
}