import React from 'react'
import Title from '../../../../components/ui/title'
import Image from 'next/image'
import Link from 'next/link'
import QuoteIcon from '../../../../../public/icons/quoteIcon'
import Author from '../../../../components/sections/blogs/author'
import {PortableText} from '@portabletext/react'
import imageUrlBuilder from "@sanity/image-url"
import { client } from '@/lib/sanity/SanityClient'


// Generate dynamic metadata based on the post
export async function generateMetadata({ params }) {
  const post = await client.fetch(POST_QUERY, params)
  
  return {
    title: post.title || "Lunnoa Labs Blog", // Fallback to default if no title
    description: `Read ${post.title} on Lunnoa Labs Blog`,
  }
}

// Query to get a single post
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  image,
  body,
  author,
  publishedAt,
  slug
}`

// Query to get all post slugs
const SLUGS_QUERY = `*[_type == "post"]{
  "slug": slug.current
}`

const { projectId, dataset } = client.config()
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null

const options = { next: { revalidate: 30 } }

// Configure PortableText components
const components = {
  types: {
    image: ({value}) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="relative w-full h-96 my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Blog post image'}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )
    },
    code: ({value = {}}) => {
      const {code, language} = value
      return (
        <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      )
    },
  },
  marks: {
    link: ({value, children}) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <Link href={value?.href} target={target} className="text-blue-600 hover:underline">
          {children}
        </Link>
      )
    },
    strong: ({children}) => <strong className="font-bold">{children}</strong>,
    em: ({children}) => <em className="italic">{children}</em>,
  },
  block: {
    h1: ({children}) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({children}) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({children}) => <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>,
    normal: ({children}) => <p className="mb-4 leading-relaxed">{children}</p>,
    blockquote: ({children}) => (
      <blockquote className="border-l-4 border-gray-200 pl-4 my-4 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({children}) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
    number: ({children}) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
  },
}

// Add this function to generate static params
export async function generateStaticParams() {
  const posts = await client.fetch(SLUGS_QUERY)
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export const dynamic = 'force-dynamic';
export const revalidate = 30;

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
                            <div className='max-w-[1080px] mx-auto lg:pt-12.5 pt-6 lg:px-12.5'>
                                {Array.isArray(post.body) && (
                                    <PortableText 
                                        value={post.body} 
                                        components={components}
                                    />
                                )}
                            </div>
                            
                            <hr className='lg:my-12.5 my-8 text-[#B0C2E2]' />
                            
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