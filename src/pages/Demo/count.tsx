import React, { useContext } from 'react'
import {Context} from './context'
function Count() {
    const obj=useContext(Context)
    console.log(obj)
  return (
    <div>Count</div>
  )
}

export default Count