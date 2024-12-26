import { DM_Sans, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/contextApi/themeProvider";
import CountryProvider from "@/contextApi/countryProvider";
import ScrollCircle from "@/components/ui/scrollCircle"
const CustomCursor = dynamic(() => import('@/components/ui/customCursor'), { ssr: false })
const Setting = dynamic(() => import('@/components/ui/setting'), { ssr: false })
import HeaderTwo from "@/components/sections/headers/headerTwo"
import FooterTwo from "@/components/sections/footers/footerTwo"
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { Script } from "next/script";

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
  title: "Lunnoa Labs",
  description: "Your Enterprise, Powered by AI Agents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plus_jakarta_sans.variable} ${dm_sans.variable}`} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CountryProvider>
          <HeaderTwo haveOvcanvsIcon={true} haveShadow={true}/>
            {children}
            <FooterTwo/>
            
            {/*<Setting />*/}
            <ScrollCircle />
            <CustomCursor />
          </CountryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
