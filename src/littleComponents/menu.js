

const Menu = () =>{
    return <div style={{
        background:'white',
        width:'15%',
        height:'50%',
        margin:'4rem',
        padding:' 4px 4rem',
        borderRadius:'5px'
    }}>
        <MenuItems title='Power Saving'/>
        <MenuItems title='Power Saving'/>
        <MenuItems title='Power Saving'/>
        <MenuItems title='Power Saving'/>
        <MenuItems title='Power Saving'/>
        <MenuItems title='Power Saving'/>
        

            </div>
}

export default Menu

const MenuItems = (props) =>{
    return  <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around'
    }}>
        <img src={props.image}/>
        <h4>{props.title}</h4>
    </div>
}