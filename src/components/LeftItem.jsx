 
import Link from 'next/link' 
import  "./style.model.css"
const LeftItem = async ({params,result}) => { 
   
   
    return(
        <div>
          {
            result.map(item=>( 
              <div   className={params == item._id ?  'active mb-8':'mb-8'}  key={item._id}>
                <Link className='block mb-1 text-sm transition-colors hover:text-blue-300' href={`/detail/${item._id}`}>{item.title}</Link>
              </div> 
            ))
          }
        </div>
    )
}

export default LeftItem