'use client'

import { useState } from 'react'
import { Gift, Wallet, CreditCard, Share2, ShieldCheck, PiggyBank, Globe, Zap } from 'lucide-react'
import Head from 'next/head'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LandingPage() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

  const openSignUp = () => setIsSignUpOpen(true)
  const closeSignUp = () => setIsSignUpOpen(false)

  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically handle the sign-up logic
    console.log('Sign up submitted')
    closeSignUp()
  }

  return (
    <div className="min-h-screen flex flex-col bg-white font-doodle">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" rel="stylesheet" />
      </Head>
      <style jsx global>{`
        .font-doodle {
          font-family: 'Architects Daughter', cursive;
        }
        .header-section {
          background: linear-gradient(135deg, #00b4d8 0%, #0077b6 100%);
          position: relative;
          overflow: hidden;
        }
        .header-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
          opacity: 0.5;
          z-index: 0;
        }
        .website-name {
          font-size: 4rem;
          font-weight: 900;
          color: white;
          text-shadow: 
            2px 2px 0 #0077b6,
            -2px 2px 0 #0077b6,
            -2px -2px 0 #0077b6,
            2px -2px 0 #0077b6;
          letter-spacing: 2px;
          position: relative;
          display: inline-block;
        }
        .website-name::before {
          content: 'GIFTEEZ';
          position: absolute;
          left: 0;
          top: 0;
          color: rgba(255, 255, 255, 0.5);
          filter: blur(4px);
          z-index: -1;
        }
        .nav-link {
          color: white;
          font-weight: bold;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #ffd60a;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s ease;
        }
        .nav-link:hover {
          color: #ffd60a;
        }
        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        .logo-container {
          position: relative;
          display: inline-block;
          margin-left: 1rem;
        }
        .logo-container .gift-icon {
          position: relative;
          z-index: 2;
        }
        .logo-container .zap-icon {
          position: absolute;
          top: -5px;
          right: -5px;
          z-index: 3;
          color: #ffd60a;
        }
      `}</style>

      <header className="header-section text-white p-6 sticky top-0 z-10">
        <div className="container mx-auto relative z-10">
          <h1 className="text-center mb-6 flex items-center justify-center">
            <span className="website-name">GIFTEEZ</span>
            <div className="logo-container">
              <Gift className="w-12 h-12 text-white gift-icon" />
              <Zap className="w-6 h-6 zap-icon" />
            </div>
          </h1>
          <nav className="flex justify-center space-x-8 text-lg">
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#built-in-wallet" className="nav-link">Built-in Wallet</a>
            <button onClick={openSignUp} className="nav-link">Sign Up</button>
            <a href="#login" className="nav-link">Log In</a>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Welcome section */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-5xl font-bold text-center text-cyan-500 mb-6">Welcome to GIFTEEZ</h2>
          <p className="text-center text-gray-700 text-xl mb-8">
            Create and fulfill wishlists using our built-in Polygon Network wallets - No external wallets needed!
          </p>
          <div className="text-center">
            <button onClick={openSignUp} className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-200 text-xl">
              Get Started
            </button>
          </div>
        </div>

        {/* How It Works section */}
        <div id="how-it-works" className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto mb-12 border-2 border-cyan-500 scroll-mt-20">
          <h2 className="text-4xl font-bold text-center text-cyan-500 mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cyan-50 p-6 rounded-lg shadow border border-cyan-200">
              <div className="flex justify-center mb-4">
                <Gift className="w-16 h-16 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-semibold text-center text-cyan-600 mb-2">Create Your Wishlist</h3>
              <p className="text-center text-gray-600 text-lg">Add items you desire to your personalized wishlist</p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg shadow border border-cyan-200">
              <div className="flex justify-center mb-4">
                <Wallet className="w-16 h-16 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-semibold text-center text-cyan-600 mb-2">Get Your Built-in Wallet</h3>
              <p className="text-center text-gray-600 text-lg">Receive a unique Polygon Network wallet upon registration</p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg shadow border border-cyan-200">
              <div className="flex justify-center mb-4">
                <CreditCard className="w-16 h-16 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-semibold text-center text-cyan-600 mb-2">Deposit USDT</h3>
              <p className="text-center text-gray-600 text-lg">Easily deposit Polygon USDT into your built-in wallet</p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg shadow border border-cyan-200">
              <div className="flex justify-center mb-4">
                <Share2 className="w-16 h-16 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-semibold text-center text-cyan-600 mb-2">Share and Fulfill</h3>
              <p className="text-center text-gray-600 text-lg">Share your wishlist and fulfill others' wishes</p>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div id="features" className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto mb-12 border-2 border-cyan-500 scroll-mt-20">
          <h2 className="text-4xl font-bold text-center text-cyan-500 mb-10">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cyan-50 p-6 rounded-lg shadow border border-cyan-200">
              <div className="flex justify-center mb-4">
                <ShieldCheck className="w-16 h-16 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-semibold text-center text-cyan-600 mb-2">Secure Built-in Wallets</h3>
              <p className="text-center text-gray-600 text-lg">Each user gets a secure Polygon Network wallet for transactions</p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg shadow border border-cyan-200">
              <div className="flex justify-center mb-4">
                <PiggyBank className="w-16 h-16 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-semibold text-center text-cyan-600 mb-2">Low Fees</h3>
              <p className="text-center text-gray-600 text-lg">Benefit from the low transaction costs on the Polygon Network</p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg shadow border border-cyan-200">
              <div className="flex justify-center mb-4">
                <Globe className="w-16 h-16 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-semibold text-center text-cyan-600 mb-2">Global Accessibility</h3>
              <p className="text-center text-gray-600 text-lg">Access your wishlist and fulfill wishes from anywhere in the world</p>
            </div>
          </div>
        </div>

        {/* Built-in Polygon Network Wallet section */}
        <div id="built-in-wallet" className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto mb-12 border-2 border-cyan-500 scroll-mt-20">
          <h2 className="text-4xl font-bold text-center text-cyan-500 mb-6">Built-in Polygon Network Wallet</h2>
          <p className="text-center text-gray-700 text-xl mb-8">
            GIFTEEZ provides each user with a unique Polygon Network wallet upon registration. This eliminates the need for external wallets like MetaMask, making your gifting experience seamless and user-friendly.
          </p>
          <ul className="text-gray-600 text-xl space-y-4 max-w-2xl mx-auto">
            <li className="flex items-center">
              <div className="w-3 h-3 bg-yellow-300 rounded-full mr-3"></div>
              Deposit Polygon USDT directly into your account
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 bg-yellow-300 rounded-full mr-3"></div>
              Use your balance to purchase gifts from wishlists
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 bg-yellow-300 rounded-full mr-3"></div>
              Receive gifts directly to your built-in wallet
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 bg-yellow-300 rounded-full mr-3"></div>
              Manage your crypto balance without leaving the platform
            </li>
          </ul>
        </div>
      </main>
      
      <footer className="bg-cyan-500 text-white py-4 mt-12">
        <div className="container mx-auto text-center text-lg">
          &copy; 2023 GIFTEEZ. All rights reserved.
        </div>
      </footer>

      <Dialog open={isSignUpOpen} onOpenChange={setIsSignUpOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sign Up for GIFTEEZ</DialogTitle>
            <DialogDescription>
              Create your account to start using GIFTEEZ and manage your wishlists.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSignUp}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  className="col-span-3"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Sign Up</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}