import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { cardImage } from '@/assets'

export default function Home() {
   return (
      <main className="bg-slate-800/40 h-[100vh] flex flex-col justify-center items-center">
         <form action="" className="border p-5 rounded-lg flex flex-col gap-3 w-[500px]">
            <div className="formGroup flex rounded-md">
               <div className="inputIcon bg-slate-950 p-5">
                  <FaUser size={25} />
               </div>
               <input type="text" placeholder="Username" className="w-[100%] pl-5 text-black removeFocused" />
            </div>
            <div className="formGroup flex rounded-md">
               <div className="inputIcon bg-slate-950 p-5">
                  <FaLock size={25} />
               </div>
               <input type="password" placeholder="Password" className="w-[100%] pl-5 text-black" />
            </div>
            <div className="flex gap-2 w-[100%]">
               <div className="w-[25%] h-[25%] cursor-pointer">
                  <Image
                     src={cardImage}
                     alt="Card Image"
                  />
               </div>
               <div className="w-[25%] h-[25%] cursor-pointer">
                  <Image
                     src={cardImage}
                     alt="Card Image"
                  />
               </div>
               <div className="w-[25%] h-[25%] cursor-pointer">
                  <Image
                     src={cardImage}
                     alt="Card Image"
                  />
               </div>
               <div className="w-[25%] h-[25%] cursor-pointer">
                  <Image
                     src={cardImage}
                     alt="Card Image"
                  />
               </div>
            </div>
            <button className="p-4 rounded-md" style={{ backgroundColor: '#e74c87' }}>SIGN IN</button>
         </form>
         <p>Not a member ? <span>Sign up now</span></p>
      </main>
   );
}
