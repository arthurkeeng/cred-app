
import image from '../image/9.jpg'
import Image from './image'
const ActivityComp = (props) =>{
    return <div style = {{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:'5px'

    }}>
        <Image style={{ 
            width:'1.5rem',
            height:'1.8rem',
            borderRadius: '50%',
            objectFit:'cover'
        }} image = {image} />
        <div>
            <h4>{props.name}</h4>
            <p style={{
                marginTop:'-1.3rem'
            }}>
            {props.title}</p>
            <p style={{
                marginTop:'-1.1rem'
            }}>{props.time}</p>
        </div>
        <p>Archived</p>
        </div>
}

export default ActivityComp