import React ,{useState} from 'react'
import {Context} from './context'
import  Count from  './count'
export default function Index() {
  
  const [count,setCount]= useState(0)
  return (
    <div>indx
      <div>
         <Context.Provider  value={{count:count}}>
         <Count></Count>
        <Count></Count>
         </Context.Provider>
        
      </div>
    </div>
  )
}
