"use client"
import { useEffect } from "react"
import style from "./style.model.css"
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css'
 
 
  
export default function DetailPage({ data }) {
 
  useEffect(()=>{
    hljs.configure({ 
      ignoreUnescapedHTML: true
    }) 
    const codes = document.querySelectorAll('.detailContent pre code')
    codes.forEach((el) => { 
      hljs.highlightElement(el)
    })
  },[]) 

    return (
        <div className='page'>
          <h1 className="mb-10 text-2xl">{data.title}</h1>
          <div className={`detailContent text-base ${style.detailContent}`} dangerouslySetInnerHTML={{ __html: data.content }}></div> 
        </div>
    )
  }
  