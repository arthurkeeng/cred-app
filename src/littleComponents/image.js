

const Image = (props) =>{
    return <img 
         style={props.style  || {
             display:'inline',
            width:'1.5rem',
            height: '1.5rem',
            // background: 'black',
            padding:'8px',
            borderRadius: '50%',
            objectFit:'cover'
        }}
        src = {props.image} />
    
        
}

export default Image