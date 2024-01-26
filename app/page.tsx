import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";

export default function Home() {
   return (
      <main className="bg-slate-800/40 h-[100vh] flex flex-col justify-center items-center">
         <form action="" className="border p-5 rounded-lg flex flex-col gap-3 w-[500px]">
            <div className="formGroup flex">
               <div className="inputIcon bg-slate-950 p-5">
                  <FaUser size={25} />
               </div>
               <input type="text" placeholder="Username" className="w-[100%] pl-5" />
            </div>
            <div className="formGroup flex">
               <div className="inputIcon bg-slate-950 p-5">
                  <FaLock size={25} />
               </div>
               <input type="text" placeholder="Password" className="w-[100%] pl-5" />
            </div>
            <button className="">SIGN IN</button>
         </form>
         <p>Not a member ? <span>Sign up now</span></p>
      </main>
   );
}
