import { useState } from "react"



function App() {
 
  const [isSymbolAllow,symbolAllow]=useState(false);

  const [isNumberAllow,setNumberAllow]=useState(false);

  const [passwordLength,setPasswordLength]=useState(8);

  const [isCapitalAllow,setCapitalAllow]=useState(false);

  const [isSmallLetterAllow,setSmallLetterAllow]=useState(false);

  const [password,setPassword]=useState();

  const generatePassword=()=>{
    let password="";
    let letters="abcdefghijklmnopqrstuvwxyz";
    let numbers="01632241032"
  }
  
  const numberAllowHandle=()=>{
    setNumberAllow(!isNumberAllow);
  }


  const symbolAllowHandle=()=>{
    symbolAllow(!isSymbolAllow);
  }


  const capitalAllowHandle=()=>{
    setCapitalAllow(!isCapitalAllow);
  }

  const smallLetterAllowHandle=()=>{
    setSmallLetterAllow(!isSmallLetterAllow);
  }
  

  return (
    <>
     <div className="w-full bg-sky-500 h-screen flex flex-col gap-3 justify-center items-center overflow-hidden">
          <h1 className="text-white text-2xl lg:text-5xl font-bold">Password Generator</h1>
          <div className="bg-orange-300 w-[80%] lg:w-[33%]">
          <div className=" flex w-full ">
            <input type="text" className="py-4 w-[80%] px-8 border-t  rounded-t-2xl focus:text-start outline-none focus:outline-none  border-b-8 cursor-pointer" value="123454" readOnly />
            <button className="py-4 px-8 w-[30%]  bg-green-500  hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500">Copy</button>
          </div>
          </div>
          <div className="flex justify-center gap-2 lg:flex-row flex-col">
          <label htmlFor="range" className="text-white">Length:</label>
            <input type="range" name="" id="range" value={passwordLength} onChange={(e)=>{
              setPasswordLength(e.target.value);
            }} max="20" />
            <label htmlFor="checkBox" className="text-white">IsNumberAccept?</label>
            <input type="checkbox" name="" className="bg-red-500" id="checkBox"   value={isNumberAllow} onChange={numberAllowHandle} checked={isNumberAllow} />
            <label htmlFor="symbol" className="text-white">SymbolAllow?</label>
            <input type="checkbox" name="" className="bg-red-500" id="symbol" value={isSymbolAllow} onChange={symbolAllowHandle} checked={isSymbolAllow} />
            <label htmlFor="capital" className="text-white">CapitalAllow?</label>
            <input type="checkbox" name="" className="bg-red-500" id="capital" value={isCapitalAllow} onChange={capitalAllowHandle} checked={isCapitalAllow} />
            <label htmlFor="small" className="text-white">smallLetterAllow?</label>
            <input type="checkbox" name="" className="bg-red-500" id="small" value={isSmallLetterAllow} onChange={smallLetterAllowHandle} checked={isSmallLetterAllow} />
            
          </div>
         
     </div>
    </>
  )
}

export default App
