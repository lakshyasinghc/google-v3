import React from 'react'
import {useRouter} from 'next/router';
export default function SearchHeaderOption({title,Icon,selected}) {
  const router= useRouter(); 
    function selectTab(title){
        router.push(`/search?term=${router.query.term}&searchType=${title==="Images"?"image":""}`)
  }
  return (
  <div onClick={()=>selectTab(title)} className={`flex items-center space-x-1  border-b-4 border-transparent hover:text-green-500 cursor-pointer hover:border-green-500 pb-3 ${selected && "text-green-500 border-green-500"}`}>
    <Icon className="h-4 "/>
    <p>
        {title}
    </p>
  </div>

  )
}
 