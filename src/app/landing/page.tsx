'use client';

import { CardContainer,CardBody,CardItem } from '@/components/ui/3d-card';
import React from 'react'
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion'
import Image from 'next/image';
import { Truck, Trash2, Map, BarChart2, ArrowRight, Icon, FunctionSquareIcon } from 'lucide-react'
// import { Bell, Calendar, ChevronDown, LogOut, Mail, Menu, Settings } from 'lucide-react';
import BentoGrid from '@/components/ui/bento-grid'
import { Router } from 'next/router';
import { useRouter } from 'next/navigation'


const LogoContainer = () => {
    return (
      <div className="h-5 w-6 ml-2 relative flex items-center justify-center">
        {/* Logo image */}
        <Image
          src="/images/logo.png" // Replace with the actual path to your logo
          alt="Logo"// This will make the image fill the container
          height={25}
          width={25}// Ensures the image maintains its aspect ratio
        />
      </div>
    );
  };





const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-gray-800 p-6 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_#75fba6] hover:bg-gray-700">
      {icon}
      <h3 className="text-xl font-bold mt-4 mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
  
  const FeaturesSection = () => (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-7xl font-bold mb-8 text-left text-[#fade77]">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Truck className="w-8 h-8 text-[#75fba6]" />}
            title="Real-time Tracking"
            description="Monitor your garbage trucks in real-time with our advanced GPS technology."
          />
          <FeatureCard
            icon={<Trash2 className="w-8 h-8 text-[#75fba6]" />}
            title="Smart Bins"
            description="Optimize collection routes with our IoT-enabled smart bins."
          />
          <FeatureCard
            icon={<Map className="w-8 h-8 text-[#75fba6]" />}
            title="Route Optimization"
            description="Reduce fuel consumption and improve efficiency with AI-powered route planning."
          />
          <FeatureCard
            icon={<BarChart2 className="w-8 h-8 text-[#75fba6]" />}
            title="Analytics Dashboard"
            description="Gain insights into your waste management operations with our comprehensive analytics."
          />
        </div>
      </div>
    </section>
  );
  

export default function LandingPage() {
    const router = useRouter();
    function handleclick () {
        router.replace('/signin');
      }

      const Navbar = () => (
        <nav className="flex items-center justify-between p-4 bg-black border-b border-white/10">
        <div className="flex items-center space-x-4">
        <LogoContainer/>
          <h1 className="text-xl font-semibold">Track n&apos; <span className='text-green-400'>Trash</span></h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-[#75fba6] text-black px-6 py-3 rounded-full font-bold hover:bg-[#fade77] transition-colors duration-300" onClick={handleclick}>
              Get Started
            </button>
        </div>
      </nav>
    )



    const CTASection = () => (
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Left Section: Text and Button */}
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-[#fade77]">
              Ready to Optimize Your Waste Management?
            </h2>
            <p className="text-xl text-white mb-8">
              Join the revolution in smart waste tracking and analytics.
            </p>
            <button
              className="bg-[#75fba6] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#fade77] transition-colors duration-300 flex items-center mx-auto md:mx-0"
              onClick={handleclick}
            >
              Get Started Now
              <ArrowRight className="ml-2" />
            </button>
          </div>
  
          {/* Right Section: Image Container */}
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center md:justify-end">
            <div className="w-64 h-64 relative">
              {/* Adjust size of image container as needed */}
              <Image
                src="/images/trucknav.png" // Update with your actual image path
                alt="CTA Image"
                layout="fill"
                objectFit="cover" // This will ensure the image covers the entire container
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    );




      const HeroSection = () => (
        <section className="min-h-screen flex items-center justify-center bg-black text-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-7xl font-bold mb-4"><span className='text-[#75fba6]'>Bin</span> it right,<br/>
              </h1><h1 className='text-5xl font-bold mb-4'>
              Trash out of sight!</h1>
              {/* <p className="text-xl mb-6">Revolutionizing waste management with smart tracking and analytics.</p> */}
              <p className="text-xl mb-6">Privatize the pickup of your waste</p>
              <button className="bg-[#75fba6] text-black px-6 py-3 rounded-full font-bold hover:bg-[#fade77] transition-colors duration-300" onClick={handleclick}>
                Get Started
              </button>
            </div>
            <CardContainer className="inter-var h-full">
                <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto w-full rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full flex flex-col items-center justify-center">
                <Image 
                  src='/images/hero.png' 
                  alt="Hero Image" 
                  width="1000" // adjust width as needed
                  height="1000" // adjust height as needed
                  className="object-cover" // Add additional styles if needed
                  />
              </CardItem>
              </CardBody>
              </CardContainer>
          </div>
        </section>
      )

      
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BentoGrid/>
      <CTASection />
      <footer className="text-center py-4 text-gray-500 text-sm z-10 relative">
        <p>Made with ❤️ by git_rekt</p>
      </footer>
    </div>
  )
}