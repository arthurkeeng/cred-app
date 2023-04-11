import { useState } from 'react'
import '../cssComponents/main.css'
import MainBody from'./mainBody'
import LeftSide from './left'

    const Main = () =>{
        const [close, setClose] = useState(false)
        
        const open = () => {
            setClose(!close)

        }
        return <main className='mainMain'>
            <div className='mainMainFirstDiv' >
                  {close ?
        <span onClick = {open} 
        style={{
            outline:'none',
            border:'none',
            fontSize:'8px',
            color:'orangered',
            marginRight:'8px',
            cursor:'pointer'
        }}> >> </span>: <LeftSide open ={open}/>}
            </div>
          
        <MainBody  />
        </main>
    }

    export default Main