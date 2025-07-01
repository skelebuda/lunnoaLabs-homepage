import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <div className='w-auto h-auto'>
            <Link href={"/"} className='relative'>
                <Image src={"/images/logo.png"} width={200} height={100} unoptimized="true" alt='logo-original' className='w-full h-full' />
            </Link>
        </div>
    )
}

export default Logo