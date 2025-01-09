"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import Input from '@/components/ui/input'
import SlideUp from '@/components/animations/slideUp'
import Link from 'next/link'
import { analyticsEvents, logEvent } from '@/lib/utils/analytics';

    const handleClick = () => {
        logEvent(analyticsEvents.SCHEDULE_APPOINTMENT_SUBSCRIBE, {
            button_name: "Let's Talk",
            page_location: window.location.href
        });
    };

const SubscribeTwo = () => {
    return (
        <section className='lg:py-15 py-9'>
            <SlideUp>
                <div className='max-w-[1350px] mx-auto px-[15px] relative overflow-x-hidden'>
                    <div className='rounded-[30px] bg-gray lg:px-12.5 px-7.5 lg:pt-14 pt-7.5 lg:pb-16 pb-7.5 flex lg:flex-row flex-col justify-between lg:items-center'>
                        <div className='pb-6 max-w-[750px] w-full relative'>
                            <Title size={"5xl"} className={"max-w-[707px]"}>Ready to Automate Your Business Processes?</Title>
                            <p>Let's discuss how AI agents can streamline your operations. Book a free 30-minute consultation to explore the possibilities.</p>
                            <div className='absolute -right-20 top-1/2 -translate-y-1/2 lg:block hidden'>
                                <Image src={"/images/shapes/business-consultant-cta-arrow.png"} width={188} height={39} className='dark:brightness-100 dark:invert' alt='arrow' />
                            </div>
                        </div>
                        <div className='relative flex items-center justify-between'>
                            <Link href="https://calendly.com/lunnoalabs/30min">
                                <Button onClick={handleClick}>Let's Talk</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </SlideUp>
        </section>
    )
}

export default SubscribeTwo