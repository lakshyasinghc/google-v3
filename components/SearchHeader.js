import React from 'react'; 
import {useRouter} from 'next/router'; 
import Image from 'next/image'; 
import {useRef} from 'react'; 
import { XIcon,MicrophoneIcon,SearchIcon } from '@heroicons/react/outline';
import User from './User';
import SearchHeaderOptions from './SearchHeaderOptions';

export default function SearchHeader() {
    const router = useRouter(); 
    const searchInputRef= useRef(null); 
    function search(event){
        event.preventDefault(); 
        const term = searchInputRef.current.value; 
        if(!term.trim()){
            return ; 
        }
        router.push(`/search?term=${term.trim()}&searchType=`); 
    }
    console.log("value of router is equal to ",router);
  return (
  <header className="sticky top-0 bg-white">
    <div className='flex w-full p-6 items-center'>
    <Image 
        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"}
        width="120" height="40"
        objectFit='cover' 
        className='cursor-pointer '
        onClick={()=>{router.push("/")}}
        />
        <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
            <input type="text" className='w-full focus:outline-none' defaultValue={router.query.term} ref={searchInputRef}/>
            <XIcon className='h-7 text-gray-500 cursor-pointer sm:mr-3 '  onClick={()=>{searchInputRef.current.value=""}}/>
            <MicrophoneIcon className='h-6 hidden sm:inline-flex text-green-500 pl-4 border-l-2 border-gray-300 mr-3 ' />
            <SearchIcon className='h-6 hidden sm:inline-flex text-green-500 cursor-pointer' onClick={search}/>
           <button type='submit' hidden onClick={search}/>
          </form>
        <User className="ml-auto whitespace-nowrap"/>
    </div>
    <SearchHeaderOptions/>
    </header>
  )  
}
