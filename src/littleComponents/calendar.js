
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'


const CalendarComp = () =>{
    return  <div
    className='calendarDiv' 
    style={{
        position:'absolute',
        top:'35%',
        left:'35%',
        zIndex:'-4',
        width:'40%'
    }}>
        <Calendar/>
    </div>
}

export default CalendarComp