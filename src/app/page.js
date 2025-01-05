import dynamic from 'next/dynamic';
import React from 'react';
import BlogOne from '@/components/sections/blogs/blogOne';
import HeroTwo from '@/components/sections/heroes/heroTwo';
import StoryTwo from '@/components/sections/ourStories/storyTwo';
import ProvideOne from '@/components/sections/provides/provideOne';
import ServiceTwo from '@/components/sections/services/serviceTwo';
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo';

// Dynamically import Podcast component
const Podcast = dynamic(() => import('@/components/sections/podcast/podcast_section'), {
  ssr: false
});

export default function HomeTwo() {
  return (
    <main>
      <HeroTwo />
      <ServiceTwo/>
      <Podcast />
      <StoryTwo />
      <ProvideOne />
      <Podcast />
      <BlogOne/>
      <SubscribeTwo/>
    </main>
  );
}