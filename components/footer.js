import React from 'react'

export default function footer() {
  return (
   <footer className="absolute bottom-0  left-[50%] translate-x-[-50%] whitespace-nowrap p-5 text-sm text-gray-600">
    <p>Copyright &copy; {new Date().getFullYear()} Lakshya Singh Chouhan</p>
   </footer>
  )
}
