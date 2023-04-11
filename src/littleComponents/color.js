const Color = (props) =>{
    return <>
        { props.color ? <div style ={{
            width:'1rem',
            height:'1rem',
            background:`${props.color}`,
            marginRight:'1rem',
            marginLeft:'1rem',
            borderRadius:'50%'

        }}>
        </div> : <span style ={{
            display:'inline-block',
            width:'1rem',
            height:'1rem',
            color:'black',
            textAlign:'center',
            background:'lightgrey',
            marginRight:'1rem',
            marginLeft:'1rem',
            borderRadius:'50%',
            padding:'2px',
            marginTop:'2px'

        }}> + 
        </span>}
    </>
}

export default Color