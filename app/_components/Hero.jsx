"use client"
import React from 'react'
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';

function Hero() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const handleGetStarted = () => {
    if (isSignedIn) {
      router.push('/dashboard');
    } else {
      router.push('/sign-in');
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Manage Your Expanse
            <strong className="font-extrabold text-primary sm:block"> Control Your Money </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Start creating your budget and save tons of money
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src='./dashboard.png'
          alt='dashboard'
          width={1000}
          height={700}
          className='-mt-9 rounded-xl border-2'
        />
      </div>
    </section>
  );
}

export default Hero;
