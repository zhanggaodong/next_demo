import '@/app/globals.css'
import { Inter } from "next/font/google";
import LayoutLeft from "@/components/LayoutLeft"
import { ScrollArea } from "@/components/ui/scroll-area"
const inter = Inter({ subsets: ["latin"] });


async function getData() {
  const res = await fetch('http://admin.wuhewan.com/api/article/getList?routes=index&page=1&pagesize=100')
  return res.json()
}



export default async function RootLayout({ children }) { 
  const data = await getData()  
  const result = data.data.list  
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
 
