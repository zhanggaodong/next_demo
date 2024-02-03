import '@/app/globals.css'
import { Inter } from "next/font/google";
import Link from 'next/link'
import Image from 'next/image'
import avatar from '../../../public/avatar.jpg'
import weibo from '../../../public/weibo.png'
import wechat from '../../../public/wechat.png'
import gitee from '../../../public/gitee.png'
import github from '../../../public/github.png'

const inter = Inter({ subsets: ["latin"] });
  
export default async function RootLayout({ children }) { 
  return (
    <html>
      <body  className={inter.className}>
          <div className='flex w-1200'>
            <div className='py-24 sm:px-48 flex-1'>
             <div className='text-center sticky top-5  w-32 lg:my-24'>
                <div className='flex flex-col'>
                    <div className='rounded-full  w-24  mx-auto overflow-hidden'><Image src={avatar} width={300} height={300}></Image></div>
                    <div className='text-center mt-5 text-2xl font-bold'>Zgd</div>
                    <div className='flex w-32 justify-around mt-5'>
                      <Image src={github} width={20} height={20}></Image>
                      <Image src={weibo} width={20} height={20}></Image>
                      <Image src={wechat} width={20} height={20}></Image>
                      <Image src={gitee} width={20} height={20}></Image>
                    </div>
                    <div className='mt-8'>
                      <Link className='block mb-3 text-sm' href='/'>首页</Link>
                      <Link className='block mb-3 text-sm' href='/article'>文章</Link>
                      <Link className=' mb-3 text-sm' href='/log'>日志</Link> 
                    </div>
                </div>
             </div>
             </div>
              <div className='w-800 mx-auto mt-24'>
                {children}
              </div>
          </div>
          
      </body>
    </html>
  )
}
 
