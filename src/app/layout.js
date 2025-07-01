import { DM_Sans, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import CountryProvider from "@/contextApi/countryProvider";
import ScrollCircle from "@/components/ui/scrollCircle"
const CustomCursor = dynamic(() => import('@/components/ui/customCursor'), { ssr: false })
import HeaderTwo from "@/components/sections/headers/headerTwo"
import FooterTwo from "@/components/sections/footers/footerTwo"

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: "--inter" 
});
const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: "--plus-jakarta-sans"
})
const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: "--dm-sans"
})

export const metadata = {
  title: "Lunnoa Labs AI Agent Development",
  description: "Lunnoa Labs offers AI Agent development services in Switzerland",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7RY5KP3TS4');
            `,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7RY5KP3TS4"
        />
      </head>
      <body className={`${inter.variable} ${plus_jakarta_sans.variable} ${dm_sans.variable}`} suppressHydrationWarning={true}>
        <CountryProvider>
          <HeaderTwo haveOvcanvsIcon={true} haveShadow={true}/>
          {children}
          <FooterTwo/>
          <ScrollCircle />
          <CustomCursor />
        </CountryProvider>
      </body>
    </html>
  );
}