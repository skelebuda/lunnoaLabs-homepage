import Link from 'next/link'
import React from 'react'
import { headerExtraInfo } from '@/lib/fackData/headerExtraInfo'
import { FaRegEnvelope, FaPhoneFlip } from "react-icons/fa6";
import SocialIcons from '../../ui/socialIcons';
const MobileExtraInfo = () => {
    return (
        <div>
            {/*}
            <ul className='px-4 mt-3'>
                {
                    headerExtraInfo.map(({ icon, id, label, link }) => {
                        return (
                            <li key={id} className='py-2.5'>
                                <Link href={link} className='flex items-center gap-[15px] font-semibold text-secondary-foreground'>
                                    {icon}
                                    <span className='font-semibold'>{label}</span>
                                </Link>
                            </li>
                        )
                    })
                }

            </ul>
            */}
            <div className='text-secondary-foreground px-4 mt-10'>
                <ul className='mb-[26px]'>
                    <li className='flex items-center gap-3'>
                        <span className='mt-[3px]'><FaRegEnvelope /></span>
                        <Link href={"mailto:contact@nextmarketing.com"} className='text-base'>sasakelebuda@lunnoalabs.ch</Link>
                    </li>
                    <li className='flex items-center gap-3 mt-[9px]'>
                        <span><FaPhoneFlip /></span>
                        <Link href={"tel:41763383516"} className='text-base'>+41 76 338 35 16</Link>
                    </li>
                </ul>
                <SocialIcons />
            </div>
        </div>
    )
}

export default MobileExtraInfo