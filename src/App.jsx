import { useState } from "react"



function App() {
 
  const [isSymbolAllow,symbolAllow]=useState(true);


  const symBolHandler = ()=>symbolAllow(!isSymbolAllow);

  return (
    <>
     <div className="w-full bg-sky-500 h-screen flex flex-col gap-3 justify-center items-center overflow-hidden">
          <h1 className="text-white text-2xl lg:text-5xl font-bold">Password Generator</h1>
          <div className="bg-orange-300 w-[60%] lg:w-[33%]">
          <div className=" flex w-full ">
            <input type="text" className="py-4 w-[80%] px-8 border-t  rounded-t-2xl focus:text-start outline-none focus:outline-none  border-b-8 cursor-pointer" value="123454" readOnly />
            <button className="py-4 px-8 w-[20%] bg-green-500  hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500">Copy</button>
          </div>
          </div>
          <div className="flex justify-center gap-2">
          <label htmlFor="range" className="text-white">Length:</label>
            <input type="range" name="" id="range" value="8" min="0" max="20" />
            <label htmlFor="checkBox" className="text-white">IsNumberAccept?</label>
            <input type="checkbox" name="" className="bg-red-500" id="checkBox" defaultValue={isSymbolAllow} onChange={symbolAllow} checked />
            <label htmlFor="symbol" className="text-white">SymbolAllow?</label>
            <input type="checkbox" name="" className="bg-red-500" id="symbol" value="1"  />
            <label htmlFor="capital" className="text-white">CapitalAllow?</label>
            <input type="checkbox" name="" className="bg-red-500" id="capital" value="1"  />
            <label htmlFor="small" className="text-white">smallLetterAllow?</label>
            <input type="checkbox" name="" className="bg-red-500" id="small" value="1" />
            
          </div>
         
     </div>
    </>
  )
}

export default App
