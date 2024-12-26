import SlideRight from '@/components/animations/slideRight'
import SlideUp from '@/components/animations/slideUp'
import { Button } from '@/components/ui/button'
import PlayIcon from '@/components/ui/playIcon'
import Title from '@/components/ui/title'
import Link from 'next/link'
import React from 'react'
import AnalyticsButton from '@/components/ui/AnalyticsButton'; 

const StoryContentOne = () => {
        const handleClick = () => {
            logEvent(analyticsEvents.BUTTON_CLICK, {
                button_name: "Lets Talk Story",
                page_location: window.location.href
            });
        };
    return (
        <div>
            <SlideUp>
                <Title size={"5xl"} className={"xl:leading-[140%] lg:max-w-[645px]"}>
                    Building Tomorrow's Workforce with AI Agents
                </Title>

                <div className='lg:max-w-[645px]'>
                    <p className='font-semibold text-muted-foreground mt-6'>
                        After developing AI solutions for Swiss financial institutions, I'm now focused on making this technology accessible to businesses of all sizes. AI agents are the future of work - they're efficient, scalable, and ready to transform how your business operates.
                    </p>
                </div>

                <div className='flex items-center sm:gap-[32px] gap-6 md:pt-[55px] pt-7 pb-[22px]'>
                    <div>
                    <AnalyticsButton />
                    </div>
                    {/*
                    <div className='flex items-center gap-2'>
                        <PlayIcon playOne={false} />
                        <p className='font-semibold sm:block hidden'>See How It Works</p>
                    </div>
                    */}
                </div>
            </SlideUp>
        </div>
    )
}

export default StoryContentOne