import React from 'react'
import Link from 'next/link'
import FooterContact from './footerContact'
import SocialIcons from '@/components/ui/socialIcons'
import ImportanceLinks from './importanceLinks'

const FooterFour = () => {
    return (
        <footer className='bg-primary rounded-tr-[30px] rounded-tl-[30px] pt-[200px] relative'>
            <div className='w-full h-full bg-no-repeat bg-contain bg-top absolute top-0 left-0 opacity-20' style={{ backgroundImage: `url(/images/background/services-bg1-1.png)` }}>  </div>
            <div className='container'>
                <div className='max-w-[1350px] mx-auto px-[15px]'>
                    <FooterContact white_logo={true} bgColor={"bg-white"} color="text-white" />
                    <span className='inline-block bg-white h-[1px] w-full mb-12.5 mt-[45px]'></span>
                    <div className='grid xl:grid-cols-[auto_65%] lg:grid-cols-[auto_60%] grid-cols-1 gap-x-7 justify-between'>
                        <div>

                            <h3 className='text-1xl font-semibold text-muted-foreground lg:pb-7.5 pb-3 text-white'>About</h3>

                            <p className='pb-[38px] text-white'>NextMarketing seamlessly integrates with a variety of industry-leading tools, ensuring a cohesive and efficient digital ecosystem for your business.</p>
                            <SocialIcons color={"text-white"} />
                        </div>
                        <div>
                            <ImportanceLinks color={"text-white"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-muted mt-[54px] relative z-10'>
                <div className='max-w-[1350px] mx-auto px-[15px] flex xl:flex-row flex-col justify-between items-center py-7.5 text-white'>
                    <p>Designed and Developed By <p className='text-primary-foreground font-medium relative hover-underline after:h-[1px]'>Lunnoa GmbH</p></p>
                    <p>Copyright: © 2025. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterFour