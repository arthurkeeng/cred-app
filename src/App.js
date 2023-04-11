import './cssComponents/App.css';
import Navbar from'./mainComponents/navbar'
import Main from'./mainComponents/main'
import CardComponent from './littleComponents/card';
// import Menu from './littleComponents/menu'
import Overlay from './littleComponents/overlay'
import {useState} from 'react'

const App = () => {
  const buttonClicked =() =>{
    // setButton()
  }

  const [date , setDate] = useState(new Date())
  const onchange =(date) =>{
    setDate(date)
  }
    const openOverlay = () =>{

    }

    const closeOverlay = () =>{
      
    }
  return <>
  <Navbar/>
  <Main setButton = {buttonClicked}/>
  <CardComponent description= {false}/>
  {/* <CardComponent description= {true}/> */}
  {/* <Menu/> */}
  
 


  {/* <Overlay/> */}
  </>

}

export default App;
