"use client"
import { useContext} from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { CiGlobe } from 'react-icons/ci'

import Email from '../../../../public/icons/email'
import Call from '../../../../public/icons/call'
import SocialIcons from '@/components//ui/socialIcons'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from '@/lib/utils';
import { countriesList } from '@/lib/fackData/countriesList';
import { CountryContext } from '@/contextApi/countryProvider';


const TopHeader = ({ color, bgColor }) => {
    const  {selectCountry, setSelectCountry}  = useContext(CountryContext) 

    return (
        <div className='container hidden lg:block'>
            <div className='pt-[22px] pb-[23px] '>
                <div className='flex justify-between items-center'>
                    {/*  left side Start */}
                    <div className='flex items-center gap-7.5'>
                        <p className={cn(`flex items-center gap-4 ${color}`)}>
                            <Email />
                            <Link href={"mailto:contact@nextpro.com"} className='multiline-hover'>sasakelebuda@lunnoalabs.ch</Link>
                        </p>
                        <p className='h-7.5 w-[1px] bg-accent'></p>
                        <p className={cn(`flex items-center gap-4 ${color}`)}>
                            <Call />
                            <Link href={"tel:+41763383516"}><span className='font-semibold'>Call us:</span> <span className='multiline-hover'>+41 76 338 35 16 </span> </Link>
                        </p>
                    </div>
                    {/*  left side end */}


                    <div className='flex items-center gap-7.5'>
                        <div className='flex items-center gap-7.5'>
                            <div className='hidden xl:block'>
                                <SocialIcons color={color} />
                            </div>
                        </div>
                        <p className='h-7.5 w-[1px] bg-accent'></p>
                        {/* language select option 
                        <div className='w-[75px]'>
                            <Select value={selectCountry} onValueChange={value => setSelectCountry(value)}>
                                <SelectTrigger className={cn(`p-0 h-auto font-semibold text-lg border-none bg-transparent ${color}`)}>
                                    <div className='flex items-center gap-1'>
                                        {selectCountry ? "" : <CiGlobe className='text-2xl' />}
                                        <SelectValue placeholder="EN" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent className={cn(`min-w-max border-none bg-background ${bgColor}`)} >
                                    {
                                        countriesList.map(({code, flag}) => {
                                            return (
                                                <SelectItem key={code} value={code} className="text-lg focus:bg-inherit focus:text-inherit pl-2 cursor-pointer">
                                                    <Image src={flag} width={16} height={17} alt='uk flag' className='inline -inset -mt-1 mr-2' />
                                                    <span>{code}</span>
                                                </SelectItem>
                                            )
                                        })
                                    }
                                </SelectContent>
                            </Select>
                        </div>*/}
                        {/* language select option */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader