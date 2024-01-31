'use client'

import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { cardImage } from '@/assets'
import { useState } from "react";

import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
   const [selectedCard, setSelectedCard]: any = useState([])
   const [password, setPassword] = useState([1, 2, 3, 4])
   const [passwordIsCorrect, setPasswordIsCorrect] = useState<boolean>(true)
   const [cardViscible, setCardViscible] = useState(false)
   const [displayError, setDisplayError] = useState('')
   const [passwordPlaceholder, setPasswordPlaceholder] = useState('Password')
   const [disabled, setDisabled] = useState(false)
   const [loading, setLoading] = useState(false)


   const handleClick = (id: number) => {
      const updatedSelectedCards = selectedCard.includes(id)
         ? selectedCard.filter((cardId: number) => cardId !== id)
         : [...selectedCard, id];

      setSelectedCard(updatedSelectedCards);
      console.log(updatedSelectedCards, id);

      if (updatedSelectedCards.length >= 4) {
         if (validatePassword(updatedSelectedCards)) {
            console.log('Password validated successfully!');
         } else {
            console.log('Password validation failed!');
         }
      }
   };

   const validatePassword = (selectedCards: number[]) => {
      for (let i = 0; i < selectedCards.length; i++) {
         if (selectedCards[i] !== password[i]) {
            setPasswordIsCorrect(false)
            setSelectedCard([])
            displayErrorMessage('Wrong username or combination try again')
            return false;
         }
      }
      simulateNetworkRequest()
      setPasswordIsCorrect(true)
      setSelectedCard([])
      setPasswordPlaceholder('Password Validated')
      setDisabled(true)
      setCardViscible(false)
      return true;
   };

   const displayErrorMessage = (message: string) => {
      setDisplayError(message)
   }

   const simulateNetworkRequest = () => {
      // Simulate a fake network request
      setLoading(true);

      setTimeout(() => {
         // Set loading state to false after 5 seconds
         setLoading(false);
      }, 5000); // 5000 milliseconds = 5 seconds
   };




   return (
      <main className="bg-slate-800/40 min-h-[100vh] flex flex-col justify-center items-center">
         <form autoComplete="new-password" action="" className="border p-5 rounded-lg flex flex-col gap-3 w-[600px]">
            <div className="formGroup flex rounded-md">
               <div className="inputIcon bg-slate-950 p-5">
                  <FaUser size={25} />
               </div>
               <input disabled={disabled} autoComplete="new-password" type="text" placeholder="Username" className="w-[100%] pl-5 text-black removeFocused" />
            </div>


            <div className="formGroup flex rounded-md">
               <div className="inputIcon bg-slate-950 p-5">
                  <FaLock size={25} />
               </div>
               <div className={`${disabled && 'bg-gray-400/95'} w-[100%] h-16 pl-5 text-black bg-slate-50 cursor-text flex items-center`} onClick={() => setCardViscible(true)}>
                  <p className={`${disabled ? "text-black" : "text-gray-400"}`}>{passwordPlaceholder}</p>
               </div>
            </div>

            <button className="p-4 rounded-md" style={{ backgroundColor: '#e74c87' }}>SIGN IN</button>

         </form>

         <div className={`portal ${cardViscible ? 'flex' : 'hidden'}`}>
            <div className="closePortal" onClick={() => setCardViscible(false)}></div>
            <div className={`${cardViscible ? 'flex z-50' : 'hidden opacity-0'} items-end gap-2 w-[600px] h-[50vh] transition-all cardContainer`}>
               <div className={`${passwordIsCorrect ? 'correct' : 'error'} w-[25%] h-[80%] cursor-pointer ${selectedCard.includes(1) ? 'selected' : ''}`} onClick={() => handleClick(1)}>
                  <Image
                     src={cardImage}
                     alt="Card Image"
                     className={`rounded-md h-[100%] w-[100%]`}
                  />
               </div>
               <div className={`${passwordIsCorrect ? 'correct' : 'error'} w-[25%] h-[80%] cursor-pointer ${selectedCard.includes(2) ? 'selected' : ''}`} onClick={() => handleClick(2)}>
                  <Image
                     src={cardImage}
                     alt="Card Image"
                     className='rounded-md h-[100%] w-[100%]'
                  />
               </div>
               <div className={`${passwordIsCorrect ? 'correct' : 'error'} w-[25%] h-[80%] cursor-pointer ${selectedCard.includes(3) ? 'selected' : ''}`} onClick={() => handleClick(3)}>
                  <Image
                     src={cardImage}
                     alt="Card Image"
                     className='rounded-md h-[100%] w-[100%]'
                  />
               </div>
               <div className={`${passwordIsCorrect ? 'correct' : 'error'} w-[25%] h-[80%] cursor-pointer ${selectedCard.includes(4) ? 'selected' : ''}`} onClick={() => handleClick(4)}>
                  <Image
                     src={cardImage}
                     alt="Card Image"
                     className='rounded-md h-[100%] w-[100%]'
                  />
               </div>
            </div>
            <p className={`${displayError.length ? 'bloc z-50' : 'hidden'} text-center my-5`}>{displayError}</p>
         </div>
         <p>Not a member ? <span>Sign up now</span></p>


         { loading && <LoadingScreen type={'spinningBubbles'} color={'white'} /> }
      </main>
   );
}
