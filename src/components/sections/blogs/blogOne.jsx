import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import React from 'react'
import CardOne from './cardOne'
import SlideUp from '@/components/animations/slideUp'

import { client } from '@/lib/sanity/SanityClient'


const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...12]{_id, title, slug, author, publishedAt, "imageUrl": image.asset->url}`;

const options = { next: { revalidate: 30 } };

const  BlogOne = async () => {
    const posts = await client.fetch(POSTS_QUERY, {}, options);
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='flex flex-col items-center'>
                        <Button variant="secondary">Our Blog</Button>
                        <Title size={"5xl"} className="pt-6 text-center max-w-[898px]">From Our Blog – Learn, Build, & Automate!</Title>
                    </div>
                </SlideUp>

                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-7.5 gap-7.5 justify-between'>
                    {
                        posts.slice(0, 3).map(({ id, author, publishedAt, title, imageUrl, slug }) => <CardOne key={id} id={id} title={title} thumb={imageUrl} author={author} date={publishedAt} slug={slug} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default BlogOne