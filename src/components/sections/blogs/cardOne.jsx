'use client'  // Add this at the top

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Title from '@/components/ui/title'
import ZoomIn from '@/components/animations/zoomIn'

const CardOne = ({ id, title, date, thumb, author, slug }) => {
    const postSlug = typeof slug === 'object' ? slug.current : slug
    return (
        <div className='group'>
            <ZoomIn id={id}>
                <div className='relative overflow-hidden rounded-2.5xl'>
                    <div className='relative'>
                        <Image 
                            src={thumb} 
                            width={520} 
                            height={280} 
                            sizes='(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw' 
                            style={{ width: "100%" }} 
                            alt='thumb' 
                            className='group-hover:scale-110 transition-all duration-700 max-h-[285px] object-cover' 
                        />
                    </div>
                </div>
                <div className='pt-[15px]'>
                    <div className='flex items-center gap-7.5 pb-[15px]'>
                        <Link 
                            href={""} 
                            className='text-base font-semibold hover:text-primary-foreground transition-all duration-500'
                        >
                            {author.author_name}
                        </Link>
                        <p className='text-base font-semibold relative after:absolute after:-left-[15px] after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-[6px] after:h-[6px] after:rounded-full'>
                            {date}
                        </p>
                    </div>
                    <Title size={"2xl"}>
                        <Link 
                            href={`/blog-single/${postSlug}`} 
                            className='multiline-hover hover:text-primary-foreground transition-all duration-500'
                        >
                            {title}
                        </Link>
                    </Title>
                </div>
            </ZoomIn>
        </div>
    )
}

export default CardOne