"use client"

import { useEffect } from 'react'
import style from "./style.model.css"

async function getData(id) {
    const res = await fetch(`http://admin.wuhewan.com/api/article/detail?id=${id}`)
    return res.json()
}

import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css'
 
  
export default async function DetailPage({ params: { id } }) {
   
    useEffect(() => { 
        hljs.configure({ 
          ignoreUnescapedHTML: true
        }) 
        const codes = document.querySelectorAll('.detailContent pre code')
        codes.forEach((el) => { 
          hljs.highlightElement(el)
        })
      }, [id]) 

      const data = await getData(id)
      const result = data.data
  

    return (
        <div className='page'>
          <h1 className="mb-10 text-2xl">{result.title}</h1>
          <div className={`detailContent text-base ${style.detailContent}`} dangerouslySetInnerHTML={{ __html: result.newstext }}></div> 
        </div>
    )
  }
  