import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Crown, Sparkles, CheckCircle2, Zap, Shield, Star } from 'lucide-react';

function Congrats() {
  return (
    <div className="  w-full flex items-center justify-center p-4">
      <Card className="w-full max-w-[1000px] border-primary/20 shadow-lg">
        <CardHeader className="text-center space-y-4 pb-8">

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <div className="relative bg-primary/10 p-6 rounded-full border-2 border-primary/30">
                <Crown className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1">
              <Sparkles className="w-3 h-3 mr-1" />
              Premium Member
            </Badge>
            <CardTitle className="text-4xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Congratulations!
            </CardTitle>
            <CardDescription className="text-base">
              You're now a premium member. Enjoy all the exclusive benefits and features.
            </CardDescription>
          </div>
        </CardHeader>

        <Separator className="mb-6" />

        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              Your Premium Benefits
            </h3>
            <div className="grid gap-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Unlimited Access</p>
                  <p className="text-sm text-muted-foreground">
                    Full access to all premium features and content
                  </p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Priority Support</p>
                  <p className="text-sm text-muted-foreground">
                    Get help faster with dedicated premium support
                  </p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Exclusive Features</p>
                  <p className="text-sm text-muted-foreground">
                    Early access to new features and premium tools
                  </p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <div className="flex items-center justify-between ">
              <span className="text-sm text-muted-foreground">Membership Status</span>
              <Badge className="bg-primary/90 hover:bg-primary">Active</Badge>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3 pt-6">
          <Button className="w-full" size="lg" disabled>
            <Sparkles className="w-4 h-4 mr-2" />
            Explore Premium Features
          </Button>
          <Button variant="outline" className="w-full" disabled size="lg">
            Go to Dashboard
          </Button>
          <span className='text-primary font-serif'>this is the end of the process, thank you!</span>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Congrats;