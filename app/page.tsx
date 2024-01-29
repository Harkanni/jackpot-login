'use client'

import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { cardImage } from '@/assets'
import { useState } from "react";

export default function Home() {
   const [selectedCard, setSelectedCard]: any = useState([])
   const [password, setPassword] = useState()

   const handleClick = (id: number) => {
      !selectedCard.includes(id) ? setSelectedCard([...selectedCard, id])
         : setSelectedCard(selectedCard.filter((cardId :number) => cardId !== id)) ;
      console.log(selectedCard, id)
      selectedCard.includes(id) ? console.log(true) : console.log(false)
   }



   return (
      <main className="bg-slate-800/40 h-[100vh] flex flex-col justify-center items-center">
         <form action="" className="border p-5 rounded-lg flex flex-col gap-3 w-[600px]">
            <div className="formGroup flex rounded-md">
               <div className="inputIcon bg-slate-950 p-5">
                  <FaUser size={25} />
               </div>
               <input autoComplete={'false'} type="text" placeholder="Username" className="w-[100%] pl-5 text-black removeFocused" />
            </div>
            <div className="formGroup flex rounded-md">
               <div className="inputIcon bg-slate-950 p-5">
                  <FaLock size={25} />
               </div>
               <input autoComplete="false" type="password" placeholder="Password" className="w-[100%] pl-5 text-black" />
            </div>
            <div className="flex items-end gap-2 w-[100%] h-[50vh]">
               <div className={`w-[25%] h-[80%] cursor-pointer ${selectedCard.includes(1) ? 'selected' : ''}`} onClick={() => handleClick(1)}>
                  <Image
                     src={cardImage}
                     alt="Card Image"
                     className='rounded-md h-[100%] w-[100%]'
                  />
               </div>
               <div className={`w-[25%] h-[80%] cursor-pointer ${selectedCard.includes(2) ? 'selected' : ''}`} onClick={() => handleClick(2)}>
                  <Image
                     src={cardImage}
                     alt="Card Image"
                     className='rounded-md h-[100%] w-[100%]'
                  />
               </div>
               <div className={`w-[25%] h-[80%] cursor-pointer ${selectedCard.includes(3) ? 'selected' : ''}`} onClick={() => handleClick(3)}>
                  <Image
                     src={cardImage}
                     alt="Card Image"
                     className='rounded-md h-[100%] w-[100%]'
                  />
               </div>
               <div className={`w-[25%] h-[80%] cursor-pointer ${selectedCard.includes(4) ? 'selected' : ''}`} onClick={() => handleClick(4)}>
                  <Image
                     src={cardImage}
                     alt="Card Image"
                     className='rounded-md h-[100%] w-[100%]'
                  />
               </div>
            </div>
            <button className="p-4 rounded-md" style={{ backgroundColor: '#e74c87' }}>SIGN IN</button>
         </form>
         <p>Not a member ? <span>Sign up now</span></p>
      </main>
   );
}
