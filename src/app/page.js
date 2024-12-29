import React from 'react'
import BlogOne from '@/components/sections/blogs/blogOne'
import Dashboard from '@/components/sections/dashboard'
import FaqOne from '@/components/sections/faqs/faqOne'
import HeroTwo from '@/components/sections/heroes/heroTwo'
import StoryTwo from '@/components/sections/ourStories/storyTwo'
import PriceTwo from '@/components/sections/pricing/priceTwo'
import ProvideOne from '@/components/sections/provides/provideOne'
import ServiceTwo from '@/components/sections/services/serviceTwo'
import Solutions from '@/components/sections/solutions'
import Strategy from '@/components/sections/strategy'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'
import TestimonialOne from '@/components/sections/testimonials/testimonialOne'

export const metadata = {
  title: "Lunnoa Labs AI Agent Development",
  description: "Lunnoa Labs offers AI Agent development services in Switzerland",
};

const HomeTwo = () => {
  return (
    <main >
      <HeroTwo />
      <ServiceTwo/>
      <StoryTwo />
      {/*<Dashboard />*/}
      <ProvideOne />
      {/*<Strategy/>
      <TestimonialOne/>
      <Solutions/>*/}
      {/*<PriceTwo />*/}
     {/* <FaqOne />*/}
      <BlogOne/>
      <SubscribeTwo/>
    </main>
  )
}

export default HomeTwo