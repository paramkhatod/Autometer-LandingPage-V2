"use client";

import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar'; // Assuming component paths
import Footer from '../components/footer';

function BlogsPage() {
  return (
    <div>
      <Head>
        <title>Blogs - Automater</title>
        <link rel="icon" href="/logo1.png" />
      </Head>
      
      {/* Use a light header for sub-pages */}
      <header className='w-full pb-10 bg-rose-100 text-gray-800'> 
        <Navbar />
      </header>

      <main className="xl:w-container mx-auto my-24 md:my-40 px-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Blogs</h1>
        <p className="text-lg text-gray-700">Content for the blog page will go here.</p>
        {/* You can add a grid of blog posts here later */}
      </main>

      <Footer />
    </div>
  )
}

export default BlogsPage;