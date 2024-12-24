import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const ImportanceLinks = ({ color }) => {
    const importanceLinks = [
        {
            id: 1,
            title: "Company",
            links: [
                {
                    id: 1,
                    path: "/about-us",
                    label: "About Us"
                },
                {
                    id: 2,
                    path: "/career",
                    label: "Careers"
                },
            ]

        },
        {
            id: 3,
            title: "Social",
            links: [
                {
                    id: 1,
                    path: "https://x.com/",
                    label: "Twitter"
                },
                {
                    id: 3,
                    path: "https://linkedin.com/",
                    label: "LinkedIn"
                }
            ]

        },
        {
            id: 5,
            title: "Other links",
            links: [
                {
                    id: 1,
                    path: "#",
                    label: "Terms"
                },
                {
                    id: 2,
                    path: "#",
                    label: "Privacy"
                },

            ]

        },
    ]
    return (
        <div className='grid md:grid-cols-4 grid-cols-2'>
            {
                importanceLinks.map(({ id, links, title }) => {
                    return (
                        <div key={id} className='mt-7.5 lg:mt-0'>
                            <h3 className={cn(`font-semibold text-1xl text-muted-foreground lg:pb-5 pb-3`, color)}>{title}</h3>
                            <ul>
                                {
                                    links.map(({ id, label, path }) => <li key={id} className='mt-2.5'><Link href={path} className={cn(`font-semibold hover:text-primary-foreground transition-all duration-500`, color)}>{label}</Link></li>)
                                }
                            </ul>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ImportanceLinks