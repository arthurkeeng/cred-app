
import image from '../image/9.jpg'
import Image from './image'

const LeftCard = (props) => {
    return  <div className='cardSecondFirst'>
    <Image style={{
        width:'1.4rem',
        height:'1.4rem',
        borderRadius: '50%',
        objectFit:'cover'
    }} image={image} />
    <div>
        <p>{props.name}</p>
         <input placeholder={props.place && `${props.place}`} style={{
             marginLeft:' 1rem',
             width: '122%',
             padding: '3px 5px',
             fontSize: '1rem',
         }}/>
         <p>{props.time && props.time}</p>
    </div>

</div>
}

export default LeftCard