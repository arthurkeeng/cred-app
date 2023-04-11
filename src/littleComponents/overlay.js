

const Overlay  = (props) =>{
    return <div 
    onClick = {props.click}
    className='overlayDiv' 
    style={{
        position:'absolute',
        top:'0%', 
        left:'0%',
        zIndex:'-3',
        width:'100vw',
        height:'100vh',
        background:'rgba(230, 215, 215,0.8)',
        }}></div>
}


export default Overlay