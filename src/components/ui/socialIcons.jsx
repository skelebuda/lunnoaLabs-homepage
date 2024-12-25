import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Link from 'next/link'
import { cn } from '@/lib/utils';

const SocialIcons = ({color, prantBorder}) => {
    return (
        <ul className={`flex items-center gap-5 ${color}`}>
            <li className={cn(`hover:text-primary-foreground transition-all duration-300 ${prantBorder}`)}>
                <Link href={"https://x.com/lunnoalabs"} aria-label="twitter"><FaXTwitter /></Link>
            </li>
            <li className={cn(`hover:text-primary-foreground transition-all duration-300 ${prantBorder}`)}>
                <Link href={"https://www.linkedin.com/company/71721483"} aria-label="linkedin"><FaLinkedin /></Link>
            </li>
        </ul>
    )
}

export default SocialIcons