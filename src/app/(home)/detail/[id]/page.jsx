"use client"

import { useEffect } from 'react' 
import DetailPage from "@/components/DetailPage"

 

import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css'
 
  
export default  function Detail({ params: { id } }) {
  
 
  useEffect(()=>{
    hljs.configure({ 
      ignoreUnescapedHTML: true
    }) 
    const codes = document.querySelectorAll('.detailContent pre code')
    codes.forEach((el) => { 
      hljs.highlightElement(el)
    })
  }) 

    return (
        <DetailPage id={id}></DetailPage>
    )
  }
  