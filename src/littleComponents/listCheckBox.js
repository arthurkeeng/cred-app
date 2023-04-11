


import Image from '../littleComponents/image'
import logo from '../image/9.jpg'

const ListCheckBox = (props) =>{
    
    const checkedNo = () =>{
        const checkList = document.querySelector('.listcheckBox')
        console.log(checkList)
    }
    return  <div  className = 'listcheckBox' style={{
        width:'12rem',
        justifyContent:'space-betweem',
        display:'flex',
        alignItems:'center',
        marginBottom:'1rem'

    }}>
        
            <input style ={{width:'7%'}} type='checkbox'
            onClick={checkedNo}
            />
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

export default ListCheckBox