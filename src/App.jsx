import { useState,useEffect,useCallback,useRef } from "react"



function App() {
 
  const [isSymbolAllow,symbolAllow]=useState(false);

  const [isNumberAllow,setNumberAllow]=useState(false);

  const [passwordLength,setPasswordLength]=useState(8);

  const [isCapitalAllow,setCapitalAllow]=useState(false);

  
   const passwordRef=useRef(null);
  

  const generatePassword=useCallback(()=>{
    let createPassword="";
    let letters="abcdefghijklmnopqrstuvwxyz";
    let numbers="01632241032";
    let symbols="&*%^$#@!)(_+/{}[];:`";
    if(isCapitalAllow){
      letters+=letters.toUpperCase();
    }
    
    if(isNumberAllow){
      letters+=numbers;
    }
    if(isSymbolAllow){
      letters+=symbols;
    }

    for(let i=0;i<passwordLength;i++)
      {
        createPassword+=letters.charAt(Math.floor(Math.random()*letters.length));
      }


      setPassword(createPassword);
  },[passwordLength,isCapitalAllow,isSymbolAllow,isNumberAllow]) ;

  useEffect(()=>{
    generatePassword();
  },[passwordLength,isCapitalAllow,isSymbolAllow,isNumberAllow]);

  const [password,setPassword]=useState('');
  const numberAllowHandle=()=>{
    setNumberAllow((prev)=>!prev);
   
  }


  const symbolAllowHandle=()=>{
    symbolAllow((prev)=>!prev);
    
  }


  const capitalAllowHandle=()=>{
    setCapitalAllow((prev)=>!prev);
   
  }

  const passwordLengthHandle=(e)=>{
    setPasswordLength(e.target.value);
   
  }

  const copyPassword=()=>{
    navigator.clipboard.writeText(password);
    passwordRef.current?.select();
   
  }

  return (
    <>
     <div className="w-full bg-sky-500 h-screen flex flex-col gap-3 justify-center items-center overflow-hidden">
          <h1 className="text-white text-2xl lg:text-5xl font-bold">Password Generator</h1>
          <div className=" w-[80%] lg:w-[33%]">
          <div className=" flex w-full ">
            <input type="text" className="py-4 w-[80%] px-8 focus:text-start outline-none focus:outline-none  border-b-8 cursor-pointer" value={password} ref={passwordRef} readOnly />
            <button className="py-4 px-8 w-[30%]  bg-green-500  hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500" onClick={copyPassword}>Copy</button>
          </div>
          </div>
          <div className="flex justify-center gap-2 lg:flex-row flex-col">
          <label htmlFor="range" className="text-white">Length:{passwordLength}</label>
            <input type="range" name="" id="range" min={8} value={passwordLength} onChange={passwordLengthHandle} max="20" />
            <label htmlFor="checkBox" className="text-white">IsNumberAccept?</label>
            <input type="checkbox" name="" className="bg-red-500" id="checkBox"   value={isNumberAllow} onChange={numberAllowHandle} checked={isNumberAllow} />
            <label htmlFor="symbol" className="text-white">SymbolAllow?</label>
            <input type="checkbox" name="" className="bg-red-500" id="symbol" value={isSymbolAllow} onChange={symbolAllowHandle} checked={isSymbolAllow} />
            <label htmlFor="capital" className="text-white">CapitalAllow?</label>
            <input type="checkbox" name="" className="bg-red-500" id="capital" value={isCapitalAllow} onChange={capitalAllowHandle} checked={isCapitalAllow} />
           
            
          </div>
         
     </div>
    </>
  )
}

export default App
