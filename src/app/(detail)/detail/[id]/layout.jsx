import '@/app/globals.css'
import Header from '@/components/Header'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default async function RootLayout({ children }) { 
  return (
    <html>
      <body className={inter.className}>
          <Header></Header>
          <div className='w-800 mx-auto mt-5'>
            {children}
          </div>
      </body>
    </html>
  )
}
 
