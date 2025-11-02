"use client";

import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar'; // Path is ../
import Footer from '../components/footer'; // Path is ../

function TermsPage() {
  return (
    <div>
      <Head>
        <title>Terms & Conditions - Automater</title>
        <link rel="icon" href="/logo1.png" />
      </Head>
      
      {/* Use a light header for sub-pages */}
      <header className='w-full pb-10 bg-rose-100 text-gray-800'> 
        <Navbar />
      </header>

      <main className="xl:w-container mx-auto my-24 md:my-40 px-8">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>

            <section>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Terms of Service</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, 
                    ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. 
                    Mauris placerat eleifend leo.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. 
                    Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. 
                    Donec non enim in turpis pulvinar facilisis. Ut felis.
                </p>
            </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default TermsPage;