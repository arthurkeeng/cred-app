

const Button = (props) =>{
    return  <button style={props.style}
    onClick = {props.click} > 
            {props.text}   
            
             </button>

}

export default Button

export const Button2 = (props) =>{
    return <button style={{
        display:'inline-block',
        padding: '5px',
        paddingRight: '11px',
        marginRight: '1rem',
        fontSize: '9px',
        color: 'black',
        borderRadius: '4px',
    }}
    
    > 
             {props.text}   
    
             </button>
}