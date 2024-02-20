 
import style from "./style.model.css"

async function getData(id) {
    const res = await fetch(`http://admin.wuhewan.com/api/article/detail?id=${id}`)
    return res.json()
}
 
  
export default async function DetailPage({ id }) {
  
 
  
  const data = await getData(id) 
    const result = data.data
  

    return (
        <div className='page'>
          <h1 className="mb-10 text-2xl">{result.title}</h1>
          <div className={`detailContent text-base ${style.detailContent}`} dangerouslySetInnerHTML={{ __html: result.newstext }}></div> 
        </div>
    )
  }
  