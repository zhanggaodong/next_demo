import DetailPage from "@/components/DetailPage" 

async function getData(id) {
  const res = await fetch(`https://navapi.wuhewan.com/api/news/web/detail?id=${id}`)
  return res.json()
}

let title = ''  

export default async  function Detail({ params: { id } }) { 
    const data =  await getData(id)  
    title = data.data.title
    return (
        <DetailPage data={data.data}></DetailPage>
    )
}


export async function generateMetadata({ params }) {
  const { id } = params
 

  const siteUrl = `/detail/${id}` 

  return {
    title,
    description:'description',
    openGraph: {
      title,
      description:'description', 
      publishedTime:'publishedTime', 
      url: siteUrl
    },
    alternates: {
      canonical: siteUrl
    }
  }
}
