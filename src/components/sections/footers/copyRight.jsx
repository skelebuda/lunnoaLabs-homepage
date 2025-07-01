import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const CopyRight = ({ className }) => {
    return (

        <div className='bg-accent'>
            <div className={cn(`flex xl:flex-row flex-col justify-between items-center text-center lg:text-start py-7.5 ${className}`)}>
                <p>Designed and Developed By <p className='text-primary-foreground font-medium relative hover-underline after:h-[1px]'>Lunnoa GmbH</p></p>
                <p>Copyright: © 2025. All Rights Reserved</p>
            </div>
        </div>

    )
}

export default CopyRight