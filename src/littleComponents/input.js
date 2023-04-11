
const Input = ({placeholderText, imageSrce,style}) =>{
    return <>
     <input style = {style || {
         fontSize:'1rem',
         marginTop:'1rem',
         padding:'1px'

     }} 
     type = 'text' placeholder={placeholderText || 'Search...'}/>
    </>
}

export default Input