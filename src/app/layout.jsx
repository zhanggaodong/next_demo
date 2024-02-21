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
  metadataBase: new URL('https://note.wuhewan.com'),
  robots: {
    index: true,
    follow: true
  },
  title: {
    template: `%s — ZGD的笔记本`,
    default: 'ZGD的笔记本'
  },
  description: '技术分享博客，记录笔记，问题总结',
  openGraph: {
    title: {
      template: `%s — ZGD的笔记本`,
      default: 'ZGD的笔记本'
    },
    description: '技术分享博客，记录笔记，问题总结',
    alt: 'ZGD的笔记本',
    type: 'website',
    url: '/',
    siteName:  'ZGD的笔记本',
    locale: 'en_IE'
  },
  alternates: {
    canonical: '/'
  }
}