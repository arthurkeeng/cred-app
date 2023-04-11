

import {Button2} from './button'
import Image from './image'
import Color from './color'
import image from '../image/9.jpg'
import Button from './button'
import Checkbox from './checkbox'
const RightCard = ( props) => {
    const time = new Date()
    return <div className='cardComponentSectionFirst'>
    <div className='cardsFirstDiv'>
    <h4>
        Localization for the world <span>(to do)
    
    </span></h4>
    <Button text=' Watch ' style = {{
      padding: '5px 7px',
      height:'8%',
      fontSize: '9px',
      color: 'orangered',
      border: '1px solid orangered',
      borderRadius: '4px',
}}/>
</div>
{

  props.description   ? <><h4>Description</h4>
<input placeholder='Type your text here'/>
   </> : 
   <><h4>CheckList</h4>
   <div style={{
       width:'100%',
       height:'1%',
       background:'grey',
       marginBottom:'1rem'
   }}>
       <h4 style={{
           width:'25%',
           height:'100%',
           background:'green'
       }}></h4>
   </div>
   <Checkbox  title= 'Elias'/> 
   <Checkbox  title= 'Sellsokll'/> 
   <Checkbox  title= 'Eldsfwels'/> 

        
   </>
}
<div className='cardsSecondDiv'>
    <div >
        <h5>Members</h5>
        <p>
            <Image style={{
                display:'inline-block',
                marginRight:'3px',
                width:'1.2rem',
                height:'1.2rem',
                borderRadius: '50%',
                objectFit:'cover'
            }} image ={image} />
            <Image style={{
                display:'inline-block',
                marginRight:'3px',
                width:'1.2rem',
                height:'1.2rem',
                borderRadius: '50%',
                objectFit:'cover'
            }} image ={image} />
            <Image style={{
                display:'inline-block',
                marginRight:'3px',
               width:'1.2rem',
               height:'1.2rem',
               borderRadius: '50%',
               objectFit:'cover'
            }} image ={image} />
            <Color/>
        </p>
        </div>

        <div>
         <h5>Label</h5>
      
          <Color color='red'/>
          <Color />


        </div>
        <div>
            <h5>Due Date</h5>
            <p>{time.getDate()}-{time.getFullYear()}</p>
            <p>{time.getHours()}:{time.getMinutes()}</p>
        </div>
       

</div>
<div>
        <h5>Attachment</h5>
        <input type='file' placeholder='Add document' />

</div>
     <div>
            <h5>Action</h5>
            <div>
                <Button2 text='Move'/>
            <Button2 text='Copy'/>
            <Button2 text='Archive'/>
            <Button2 text='Share'/>

            </div>
            


        </div>
</div>
}

export default RightCard