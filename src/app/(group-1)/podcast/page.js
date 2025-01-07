import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import Podcast component
const Podcast = dynamic(() => import('@/components/sections/podcast/podcast_section'), {
  ssr: false
});

export const metadata = {
  title: "Lunnoa Labs Podcast",
  description: "Lunnoa Labs offers AI Agent development services in Switzerland",
};

export default function HomeTwo() {
  return (
    <main>
      <Podcast />
    </main>
  );
}