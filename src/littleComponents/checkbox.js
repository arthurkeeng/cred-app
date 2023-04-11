
import Image from '../littleComponents/image'
import logo from '../image/9.jpg'

const  Checkbox = (props) =>{
    return  <div style={{
        width:'12rem',
        justifyContent:'space-betweem',
        display:'flex',
        alignItems:'center',
        marginBottom:'1rem'

    }}>
        
            <input style ={{width:'7%',background:'grey',
                height:'6px'
        }} type='checkbox' />
            {props.isImage && <Image style={{width :'10%',
                             borderRadius: '50%',
                          objectFit:'cover',
                          marginRight:'1rem'}}image={logo}/> }
            {props.color &&  <span style ={{
                width:'1rem',
                height:'1rem',
                background:`${props.color}`,
                marginRight:'1rem',
                marginLeft:'1rem',
                borderRadius:'50%'

            }}>
                
            </span> }
        <span >{props.title}</span>
        
        
        
    </div>
}

export default Checkbox