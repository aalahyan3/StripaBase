"use server"
import { redirect } from 'next/navigation'
import { createClient } from "@/utils/supabase/server"
import { SignUpWithPasswordCredentials } from "@supabase/supabase-js";
import { revalidatePath } from 'next/cache';

export async function signupAction(formData: FormData){
    const supabase = await createClient();

    
    
    const data: SignUpWithPasswordCredentials = {
        email:formData.get('email') as string,
        password:formData.get('password') as string,
        options:{
            data:{
                full_name: formData.get('full_name')
            }
        }
    }
    
    console.log("data", data);
    

    const {error} = await supabase.auth.signUp(data);

    if (error)
        return {success:false, message: error instanceof Error ? error.message : 'Something Went Wrong'}
    revalidatePath('/', 'layout');
    redirect('/main');
}