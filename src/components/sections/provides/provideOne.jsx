import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Highlight from '@/components/ui/highlight'
import Title from '@/components/ui/title'
import SlideRight from '@/components/animations/slideRight'
import RightArrow from '../../../../public/icons/rightArrow'
import LogoSlide from './logoSlide'
import SlideUp from '@/components/animations/slideUp'

const ProvideTwo = ({ order_1, order_0 }) => {
    return (
        <section className='lg:py-15 py-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <div className='grid xl:grid-cols-[48%_52%] lg:grid-cols-2 grid-cols-1 justify-between xl:gap-10 gap-5'>
                    <div className={order_1}>
                        <SlideUp>
                            <div>
                                <Button variant="secondary">Integrations</Button>
                                <Title size={"5xl"} className="pt-6 lg:max-w-[620px]">AI Agents That <Highlight>Work Seamlessly</Highlight> With Your Tools</Title>
                                <p className='font-semibold lg:pt-7.5 pt-5'>Your AI agents can connect with your existing business tools - from Microsoft 365 to Slack, and custom enterprise systems. No disruption, just enhancement.</p>
                            </div>
                            <div className='lg:pt-[74px] pt-10'>
                                <div className='flex flex-wrap md:flex-nowrap xl:gap-20 gap-10'>
                                    <div>
                                        <Image src={"/images/shapes/connectivity-icon.png"} width={62} height={40} alt='connectivity' />
                                        <p className='font-semibold text-1xl pt-4 lg:max-w-[255px]'>Ready-made integrations with popular business tools</p>
                                    </div>
                                    <div>
                                        <Image src={"/images/shapes/email-marketing-icon.png"} width={62} height={40} alt='connectivity' />
                                        <p className='font-semibold text-1xl pt-4 lg:max-w-[255px]'>Custom API connections for enterprise systems</p>
                                    </div>
                                </div>
                                {/*
                                <Button asChild variant="outline" size="lg" className="max-h-[64px] group lg:mt-20 mt-14">
                                    <Link href={"/about-us"}>Explore Integrations <span className='-rotate-45 group-hover:rotate-0 transition-all duration-75'><RightArrow /></span></Link>
                                </Button>
                                */}
                            </div>
                        </SlideUp>
                    </div>
                    <div className={order_0}>
                        <SlideUp>
                            <div className='bg-[rgba(226,231,255,0.22)] rounded-[30px] relative after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[linear-gradient(90deg,_#F4F6FF_0%,_rgba(244,246,255,0.00)_20.2%,_rgba(244,_246,_255,_0.00)_72.88%,_#F4F6FF_100%)] after:z-10 after:rounded-[30px]'>
                                <div className='bg-contain bg-bottom bg-no-repeat h-full max-h-[400px] w-full absolute bottom-7 left-0' style={{ backgroundImage: `url(/images/shapes/provide-bg3-1.png)` }}></div>
                                <div className='lg:px-14 px-5 lg:pt-[58px] pt-8 relative z-[15]'>
                                    <Title size={"4xl"}>Powerful Integrations for Smarter Automation</Title>
                                    <p className='pt-5'>Connect your AI agents with tools like Slack, Microsoft 365, SharePoint, and enterprise systems. Built with LangChain and CrewAI for maximum flexibility and reliability.</p>
                                </div>
                                <div className='lg:mt-[89px] mt-12 pb-6'>
                                    <LogoSlide />
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProvideTwo