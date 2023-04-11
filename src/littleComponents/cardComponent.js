
import testImage from '../image/9.jpg'
import {useState} from 'react'

const Card = (props) => {
    const [property , setProperty] = useState('')
    const click = (value) =>{
        setProperty(value)  
        console.log(property)  
    }
    return <>
         <div className='cardComp'>
            <h3 style ={{
                borderLeft: `6px solid ${props.color}`,
                borderRadius: '3px',
                display: 'flex',
                padding: '2px 8px',
                justifyContent: 'space-between'
            }}><span>
                {props.text}
                </span>
                <span onClick={props.setHide}
                style={{
                    cursor:'pointer'
                
             }}
                >+</span>
                </h3>
        </div>
        <div style ={{
            borderRadius:'3px',
            border:'1px solid lightgrey',
            borderLeft: `6px solid ${props.color}`,
            padding:'9px',

        }}>
        <p style ={{
                padding:'8px',
                borderRadius: '3px',
                display: 'flex',
                padding: '2px 8px',
                justifyContent: 'space-between'
            }}><span>
                To Do 
                </span>
                <span>+</span>
                </p>
                <img 
            style={{
                width:'100%',
                height:'13rem',
                objectFit:'cover'
            }}
            src ={testImage}/>
        </div>
        <div style={{
            marginTop:'1rem',
            width:'100%',
            height:'30%',
        }}> 
            {/* <img 
            style={{
                width:'100%',
                height:'13rem',
                objectFit:'cover'
            }}
            src ={testImage}/> */}
        </div>
        <div style={{
            border:'1px solid lightgrey',
            borderRadius:'3px',
            borderLeft: `6px solid ${props.color}`,
            fontSize:'9px',
            paddingLeft:'9px',
            marginBottom:'1rem'
        }}>
            <p>Viral marketing Campaign</p>

        </div>
        <div style={{
            display:'flex',
            justifyContent:'space-between'
        }}>
            <CardButton id = 'card' 
            click = {click}
            text= 'Card'/>
        <CardButton id= 'list' 
            click = {click}
 
        text= 'List'/>
        </div> 
    

    
    
       </> 
}

export const CardButton = (props) =>{
    const click = e =>{
        console.log(e.target.className)
        props.click(e.target.className)    
    }
    return <button 
    className = {props.id}
    style ={{
        fontSize:'1rem',
        display:'flex',
        justifyContent:'space-between'
    }} 
    onClick = {e => click(e)}
    ><span>+</span>
                    <span>{props.text}</span>
    </button>
}

export default Card