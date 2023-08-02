"use client";

import axios from 'axios';
import Image from 'next/image'
import { useEffect, useState } from 'react';

type Props = {
  slip: {
    id: number;
  advice: string;
  }
  

}

export default function Home() {
  const [data, setData] = useState<Props | undefined>();
  
  const handleClick = () => { 


    const fetchData = async () => {
      try {
        const response = await axios.get<Props>('https://api.adviceslip.com/advice');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  


  }



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Props>('https://api.adviceslip.com/advice');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
 
  return (
    <>
      <div className='h-screen w-screen bg-myDarkBlue flex justify-center items-center'>
      <div className='flex   flex-col bg-myGrayishBlue  rounded-xl justify-center items-center mb-20 md:mb-0'>
 <div className=' rounded-xl p-3 md:justify-center md:items-center'>
        <div className='mx-4 md:mx-8  w-72  '>
  <div className='text-myNeonGreen text-center mb-5 mt-6 font-semibold  text-xxs tracking-moreWidest '>
        ADVICE #{data?.slip.id}
        </div>
          <div className='text-center text-myCyan mb-7 text-xl font-semibold'>
            "{data?.slip.advice}"

          </div>
          
        <div>
<img src="/images/pattern-divider-desktop.svg" alt="divider" />
          </div>
<div className=' translate-y-8  flex justify-center items-center cursor-pointer '>
<div onClick={handleClick} className=' bg-myNeonGreen rounded-full shadow-none hover:shadow-shadowOnAllSides   '>
<img className='p-3 w-10 h-10  '  src="/images/icon-dice.svg" alt="divider" />
        </div>
        
        </div>
            
          </div>
        </div>
            
      </div>
     
    </div>
    </>
    
  )
}
