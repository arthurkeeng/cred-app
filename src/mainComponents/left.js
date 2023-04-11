import '../cssComponents/left.css'
import Input from '../littleComponents/input'
import Checkbox from '../littleComponents/checkbox'
import FilterHeading from '../littleComponents/filterHeading'
import ActivityComp from '../littleComponents/activityComp'


import Image from '../littleComponents/image'
import logo from '../image/9.jpg'
import { useState } from 'react'

const LeftSide = ({open}) =>{
    const [filter ,setFilter] = useState(true)
    const [activity ,setActivity] = useState(false)
    
    const openFilter = () => {
        setFilter(true)
        setActivity(false)
    }
    const openActivity = () => {
        setFilter(false)
        setActivity(true)
    }

    return  <>
            <div className='leftSideFirst' style={{
                width:'17rem'
            }}>
            <h3 
            style={{
                marginRight:'1rem',
                cursor:'pointer'
            }}
            onClick={openActivity}>Activity</h3>
            <h3 
            onClick = {openFilter}
            style={{
                cursor:'pointer'
            }}
            >Filter </h3>
            <span style={{
                color:'orangered',
                marginLeft:'9px',
                fontSize:'9px',
                cursor:'pointer'
                

            }}
            onClick={open}
            >
                >>
                </span>
            </div>
           {filter &&  <Filter/>} 
           {activity && <Activity/>} 
    </>
}

export default LeftSide

export const Filter = () => {
    return <div className='filter'>
        <Input />
        <p className='filterPfirst' >
            search cards, members and more...</p>
      <FilterHeading heading ={'Member'}/>
      <Checkbox isImage ={true} title={'Brian Cerviano'}/>
      <Checkbox isImage ={true} title={'Brian Cerviano'}/>
      <Checkbox isImage ={true} title={'Brian Cerviano'}/>
      <Checkbox isImage ={true} title={'Brian Cerviano'}/>
       <p className='filterPLast'>more...</p>
       <hr/>
        <FilterHeading heading ={'Due Dates'}/>
       <Checkbox title={'No Dates'}/>
       <Checkbox title={'No Dates'}/>
       <Checkbox title={'No Dates'}/>

       <hr/>
       <FilterHeading heading ={'Labels'}/>

      <Checkbox color= 'green' title = 'No color' />
      <Checkbox color= 'blue' title = 'No color' />
      <Checkbox color= 'yellow' title = 'No color' />

      <p className='filterPLast'>Select other labels...</p>

        
        
        

    </div>
}

export const Activity = () =>{
    const time = new Date().getHours()
    return <>
        <ActivityComp title = 'Software Eng.' name ='Brian corveria' time= {`${time} hrs ago`}/>
        <ActivityComp title = 'Software Eng.' name ='Brian corveria'/>
        <ActivityComp title = 'Software Eng.' name ='Brian corveria'/>
        <ActivityComp title = 'Software Eng.' name ='Brian corveria'/>

    </>
}