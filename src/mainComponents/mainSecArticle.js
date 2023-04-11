
import '../cssComponents/mainSecArticle.css'
import testImage from '../image/9.jpg'
import Card from '../littleComponents/cardComponent'
import {useState} from 'react'


const MainArticle = (props) =>{
    const [hide,setHide] = useState(false)

    return <> { !hide ? <article className='mainArticleArticle'>             
        <Card 
        setHide = {()=>setHide(!hide)} color = {props.color}
        text = {props.text}
         />                

            </article> : <div style={{
                    margin: '2rem',
                background:props.color,
                textAlign:'center',
                width:'1rem',
                height:'25rem',
                borderRadius:'4px',
                fontSize:'1.5rem',
                padding:'1.5rem'
            }}><span style={{
               cursor:'pointer'
           
        }}
        onClick={()=>setHide(!hide)}> + </span>

            <h4 style={{
                    marginTop: '6rem',
                    fontSize: '1rem',
                    transform:'rotate(-92deg)',
                    width:'3rem',
                    height:'3rem'
               
            }}> {props.text}</h4>
            
            
            </div>}
            </>


}
export default  MainArticle


