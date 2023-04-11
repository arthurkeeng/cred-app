import '../cssComponents/mainHeading.css'
import logo from '../image/me.jpg'
import Image from '../littleComponents/image'
import Input from '../littleComponents/input'
import Button from '../littleComponents/button'

import CalendarComp from '../littleComponents/calendar'
import Overlay from '../littleComponents/overlay'

const mainHeading = () =>{
    const openOverlay = () =>{
        const olay = document.querySelector('.overlayDiv')
        const calendar = document.querySelector('.calendarDiv')
        olay.style.zIndex = '2'
        calendar.style.zIndex = '3'
    }
    const closeOverlay = () =>{
        const olay = document.querySelector('.overlayDiv')
        const calendar = document.querySelector('.calendarDiv')
        olay.style.zIndex = '-2'
        calendar.style.zIndex = '-3'


    }
    return <section className='mainHeadingSection'>
        <div className='headingFirstDiv'>
            <h4>
                <span>

                    BEST APP EVER
                </span>

                <span
           >Misty River Software</span>
            </h4>
            <p>star</p>

        <Button style = {{
              padding: '6px',
              fontSize: '9px',
              color: 'orangered',
              border: '1px solid orangered',
              borderRadius: '4px',
        }}
        text='Team Visible' />            
        </div>
        <div className='headingSecondDiv'>
        <div 
             style={{
                display:'flex',
                width: '20%',
                position:' absolute',
                top: '-40%',
                right:' 49%',
                height: '24%',
                marginTop: '2rem',
                fontSize: '1rem',
    }}>
        <Image image={logo}/>
        <Image image={logo}/>
        <Image image={logo}/>

        </div>
        <Input style = {{
            position:'absolute',
            top:'-10%',
            right:'25%',
            width: '16%',
            height: '30%',
            marginTop: '2rem',
            fontSize: '1rem'
        }}       

        placeholderText='search' />
        
        <Button style = {{
              position:'absolute',
              top:'23%',
              right:'10%',
              padding: '6px',
              fontSize: '9px',
              color: 'orangered',
              border: '1px solid orangered',
              borderRadius: '4px',

        }}text='Calendar'
        click = {openOverlay}/>
 
        </div>
        <Overlay click={closeOverlay}/>
        <CalendarComp/>

        </section>
}

export default mainHeading

