import React from "react";
import { ArrowRight, Zap, Database, CreditCard, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-screen overflow-y-auto bg-background flex flex-col">
      <nav className="border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="mx-auto px-6">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-base sm:text-lg font-bold text-foreground">
                StripaBase
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Login
              </Link>
              <Link href="/signup" className="bg-primary text-primary-foreground px-4 py-1.5 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-xs font-medium">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span>Test Mode • No Real Charges</span>
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
                Stripe + Supabase
                <span className="block text-primary">Integration Demo</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Complete payment flow with authentication, subscriptions, and real-time database sync.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-card border border-border rounded-lg p-3 text-center">
                <Database className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-xs font-medium text-foreground">Supabase</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-3 text-center">
                <CreditCard className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-xs font-medium text-foreground">Payments</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-3 text-center">
                <Shield className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-xs font-medium text-foreground">Secure</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/main" className="flex-1 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center justify-center">
                Try the Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="flex-1 border border-border bg-background text-foreground font-semibold px-6 py-3 rounded-lg hover:bg-accent transition-colors text-center">
                View Source
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-accent/10 blur-3xl"></div>
            <div className="relative">
              <div className="aspect-[1.586/1] rounded-2xl overflow-hidden  border-border/20">
                <Image 
                  src="/card.svg"
                  alt="Test credit card showing 4242 4242 4242 4242"
                  width={1586}
                  height={1000}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              
              <div className="mt-4 bg-secondary/30 border border-border rounded-lg p-4">
                <p className="text-xs font-semibold text-foreground mb-2">Ready to Test?</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">1.Login</span>
                  <span className="text-muted-foreground">2.Make Purchase</span>
                  <span className="text-muted-foreground">3.Your'e done</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <span>© 2025 StripaBase Demo</span>
            <span>Stripe Test Mode</span>
          </div>
        </div>
      </footer>
    </div>
  );
}