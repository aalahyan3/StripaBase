import { LogoutButton } from "@/components/logout-btn";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { createClient } from "@/utils/supabase/server";
import { ArrowUp, Crown, TestTube2Icon, User2 } from "lucide-react";

export  default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const supabase = await createClient();

    const {data} = await supabase.auth.getUser();
  

    
    const { data: profile } = await supabase
    .from("profile")
    .select("full_name, plan").eq("id", data.user?.id).single()

    


    return (
        <div className="h-screen   md:p-4">
            <div className=" py-2 px-1 rounded md:p-6 text-foreground/90 flex justify-end">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={"outline"}><User2 /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="p-2">
                    <DropdownMenuLabel><span className=" font-semibold">{data.user?.email}</span></DropdownMenuLabel>
                    <DropdownMenuSeparator className="my-2" />

                    <DropdownMenuItem  asChild > 
                        {profile?.plan === "free" ? <Button disabled variant={"outline"} className="w-full ">Free plan <TestTube2Icon /> </Button>: <Button disabled variant={"crown"} className="w-full">Premium <Crown  className="text-primary"/> </Button>}
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                            <LogoutButton />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>
            {children}
        </div>
    );
  }