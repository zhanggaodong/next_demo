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


export async function generateMetadata({ params }) {
  const { id } = params
 
  const data =  await getData(id)   
  const siteUrl = `/detail/${id}` 

  return {
    title:data.data.title,
    description:'description',
    openGraph: {
      title:data.data.title,
      description:'description', 
      publishedTime:'publishedTime', 
      url: siteUrl
    },
    alternates: {
      canonical: siteUrl
    }
  }
}
