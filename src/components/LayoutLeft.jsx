"use client" 
import { useParams  } from 'next/navigation'
import { ScrollArea } from "@/components/ui/scroll-area"
import LeftItem from "@/components/LeftItem"
    
 const LayoutLeft = ({result}) => {
   
    const params = useParams()
    
    return(
        <ScrollArea className='h-screen p-6 border-r-2'>
            <LeftItem result={result} params={params.id}></LeftItem>
        </ScrollArea>
    )
}

export default LayoutLeft