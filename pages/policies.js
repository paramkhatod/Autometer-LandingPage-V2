"use client";

import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function PoliciesPage() {
  return (
    <div>
      <Head>
        <title>Policies - Automater</title>
        <link rel="icon" href="/logo1.png" />
      </Head>
      
      {/* Use a light header for sub-pages */}
      <header className='w-full pb-10 bg-rose-100 text-gray-800'> 
        <Navbar />
      </header>

      <main className="xl:w-container mx-auto my-24 md:my-40 px-8">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Our Policies</h1>
            
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Privacy Policy</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. 
                    Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                    Mauris massa. Vestibulum lacinia arcu eget nulla.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. 
                    Sed dignissim lacinia nunc.
                </p>
            </section>

            {/* Terms of Service Section Removed */}

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PoliciesPage;