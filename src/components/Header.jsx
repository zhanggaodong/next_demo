"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Header = () => {
    const pathname = usePathname()

    return(
        <header className="border-b justify-start p-4 sm:px-8 px-4 flex gap-4  sticky top-0 bg-white/50 backdrop-blur-lg">
            <div className="flex"> 
            <Link
              className={`px-4 flex items-center text-center text-sm rounded-full h-7 transition-colors text-slate-500 hover:text-blue-600 ${pathname === '/' ? 'text-black font-bold bg-gray-100' : ''}`} 
              href="/"
            >
              首页
            </Link>
            <Link
              className={`px-4 flex items-center rounded-full h-7  text-center text-sm transition-colors text-slate-500 hover:text-blue-600 ${pathname === '/article' ? 'text-black font-bold bg-gray-100' : ''}`} 
              href="/article"
            >
              文章
            </Link>
            <Link
             className={`px-4 flex items-center rounded-full h-7  text-center text-sm transition-colors text-slate-500 hover:text-blue-600 ${pathname === '/log' ? 'text-black font-bold bg-gray-100' : ''}`} 
              href="/log"
            >
              日志
            </Link>  
          </div>
        </header>
    )
}

export default Header