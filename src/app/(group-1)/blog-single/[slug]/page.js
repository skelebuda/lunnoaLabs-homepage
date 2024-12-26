import React from 'react'
import Title from '../../../../components/ui/title'
import Image from 'next/image'
import Link from 'next/link'
import QuoteIcon from '../../../../../public/icons/quoteIcon'
import Author from '../../../../components/sections/blogs/author'
import { PortableText } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import { client } from '@/lib/sanity/SanityClient'

// Query modified to match your schema
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  image,
  body,
  author,
  publishedAt,
  slug
}`

const { projectId, dataset } = client.config()
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null

const options = { next: { revalidate: 30 } }

const BlogArticle = async ({ params }) => {
    const post = await client.fetch(POST_QUERY, params, options)
    const postImageUrl = post.image ? urlFor(post.image)?.width(1320).height(568).url() : null

    return (
        <section className='lg:py-15 py-9'>
            <div className="max-w-[1350px] mx-auto px-[15px]">
                <div className="grid grid-cols-1 gap-12.5">
                    <div>
                        <div>
                            <Title size={"5xl"} className={"lg:text-5xl md:text-4.5xl text-3xl "}>
                                {post.title}
                            </Title>
                            <div className='flex md:flex-row flex-col md:items-center justify-between'>
                                <div className='flex sm:flex-row flex-col sm:items-center sm:gap-7 gap-3 mt-2.5'>
                                    <div className='flex items-center gap-4'>
                                        <span className='text-base font-semibold'>
                                            {post.author}
                                        </span>
                                    </div>
                                    <p className='text-base font-semibold relative after:absolute after:-left-[15px] after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-[6px] after:h-[6px] after:rounded-full ml-4 sm:ml-0'>
                                        {new Date(post.publishedAt).toLocaleDateString('de-CH')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='lg:pt-12.5 pt-6'>
                            {postImageUrl && (
                                <Image 
                                    src={postImageUrl} 
                                    width={1320} 
                                    height={568} 
                                    alt={post.title || 'Blog post image'} 
                                    className='rounded-[30px]' 
                                />
                            )}
                        </div>
                        <div>
                            <div className='max-w-[1080px] mx-auto lg:pt-12.5 pt-6 lg:px-12.5 prose prose-lg'>
                                {Array.isArray(post.body) && <PortableText value={post.body} />}
                            </div>
                            
                            <hr className='lg:my-12.5 my-8 text-[#B0C2E2]' />
                            
                            {/* Simple Author section since author is just a string */}
                            <div className='max-w-[1080px] mx-auto lg:px-12.5'>
                                <div className='flex items-center gap-4'>
                                    <div>
                                        <h3 className='text-xl font-bold'>{post.author}</h3>
                                        <p className='text-gray-600'>Author</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogArticle