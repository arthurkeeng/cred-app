

import RightCard from './cardRightComp'
import  '../cssComponents/card.css'
import image from '../image/9.jpg'
import Button from './button'
import Image from './image'
import Color from './color'
import {Button2} from './button'
import LeftCard from './cardLeftComp'

const CardComponent = (props) =>{
    const time = new Date()
    return <section className="cardComponentSection">
        <RightCard 
        description ={props.description}
        />

        <div className='cardComponentSectionSecond'>
        <h4>Activity</h4>
        <LeftCard name = 'Brian Cervieo' 
        time = 'just now' 
        place='@Brian Cervieo'/>
       

        </div>
        
    </section>
}

export default CardComponent