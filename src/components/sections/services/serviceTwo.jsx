// ServiceTwo.jsx
import Link from 'next/link'
import React from 'react'
import SlideUp from '@/components/animations/slideUp'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { servicesDataTwo } from '@/lib/fackData/servicesDataTwo'

const ServiceTwo = () => { 
    return (
        <section className='lg:pt-[120px] pt-16 lg:pb-15 pb-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='flex flex-col items-center'>
                        <Button variant="secondary">Our Core Services</Button>
                        <Title size={"5xl"} className="max-w-[869px] pt-6 text-center">Advanced AI Solutions for Modern Enterprises</Title>
                    </div>
                </SlideUp>
                <div className='lg:pt-7.5 pt-2'>
                    <SlideUp>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-2 gap-x-10 gap-y-8
                        [&>*:nth-child(2)>.icon]:bg-[#32A5521A] [&>*:nth-child(2)>.icon]:text-green 
                        [&>*:nth-child(3)>.icon]:bg-[#A22EFE1A] [&>*:nth-child(3)>.icon]:text-purple
                        [&>*:nth-child(4)>.icon]:bg-[#5A55791A] [&>*:nth-child(4)>.icon]:text-[#5A5579]'>
                            {servicesDataTwo.map(({ id, description, icon_1, service_name, features }) => (
                                <div key={id} className='lg:pt-15 pt-8 text-center lg:text-start flex flex-col items-center lg:items-start group'>
                                    <div className='md:w-[85px] md:h-[85px] w-16 h-16 md:p-6 p-4 rounded-full flex justify-center items-center lg:mb-7.5 mb-4 bg-[rgba(46,77,254,0.10)] icon'>
                                        <span className='transition-all duration-500 group-hover:scale-90'>{icon_1}</span>
                                    </div>
                                    <Link href={"/service-details"} className='text-xl font-extrabold text-muted-foreground leading-[140%] multiline-hover'>{service_name}</Link>
                                    <p className='lg:pt-6 pt-3'>{description}</p>
                                </div>
                            ))}
                        </div>
                    </SlideUp>
                </div>
            </div>
        </section>
    )
}

export default ServiceTwo