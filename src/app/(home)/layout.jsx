import '@/app/globals.css'
import { Inter } from "next/font/google";
import LayoutLeft from "@/components/LayoutLeft"
import { ScrollArea } from "@/components/ui/scroll-area"
const inter = Inter({ subsets: ["latin"] });


async function getData() {
  const res = await fetch('https://navapi.wuhewan.com/api/news/web/listAll')
  return res.json()
}
 

export default async function RootLayout({ children }) { 
  const data = await getData()  
  const result = data.data  
 
  return (
    <html>
      <body  className={inter.className}>
          
          <div className='flex w-full h-full'>

            <div  className='w-1/5 h-full '>
              <LayoutLeft result={result}></LayoutLeft>
            </div>

            <div className='flex-1  h-full'>
              <ScrollArea className="h-full  p-9">
                  {children}
              </ScrollArea> 
            </div>
            
          </div>

      </body>
    </html>
  )
}
 

export const metadata = {
  metadataBase: new URL('https://onur.dev'),
  robots: {
    index: true,
    follow: true
  },
  title: {
    template: `%s — ZGD的笔记本`,
    default: 'ZGD的笔记本'
  },
  description: '默认描述',
  openGraph: {
    title: {
      template: `%s — 标题2`,
      default: '标题2'
    },
    description: '默认描述',
    alt: '标题3',
    type: 'website',
    url: '/',
    siteName:  '标题3',
    locale: 'en_IE'
  },
  alternates: {
    canonical: '/'
  },
  twitter: {
    card: 'summary_large_image',
    site: 'twittername',
    creator: 'twittername'
  },
  other: {
    pinterest: 'nopin'
  }
}