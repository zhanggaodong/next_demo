import DetailPage from "@/components/DetailPage" 

async function getData(id) {
  const res = await fetch(`https://navapi.wuhewan.com/api/news/web/detail?id=${id}`)
  return res.json()
}

  
export default async  function Detail({ params: { id } }) { 
    const data =  await getData(id)  
    return (
        <DetailPage data={data.data}></DetailPage>
    )
}
  