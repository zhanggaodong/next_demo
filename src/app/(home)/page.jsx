 
import Link from 'next/link'
 
async function getData() {
  const res = await fetch('http://admin.wuhewan.com/api/article/getList?routes=index&page=1&pagesize=100')
   return res.json()
}
 

export default async function Home() {
  const data = await getData()  
  const result = data.data.list  
  return (
    <div>
      {
        result.map(item=>(
          <div className="mb-8"  key={item._id}>
            <Link className='block mb-1 text-sm transition-colors hover:text-blue-300' href={`/detail/${item._id}`}>{item.title}</Link>
            <div className="text-gray-400 text-xs">{item.dateDiff}</div>
          </div> 
        ))
      }
    </div>
  )
}
