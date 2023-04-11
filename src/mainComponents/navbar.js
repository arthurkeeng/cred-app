import '../cssComponents/navbar.css'
import Input from'../littleComponents/input'
import Image from '../littleComponents/image'
import image from '../image/me.jpg'
    const Navbar = () =>{
        return <nav className = 'navbarNav'>
            <div className='leftNav'>
                <a href='#'>Omeenee</a >
                <a href='#'>Dashboard</a>
                <a href='#'>Your Work</a>
                <a href='#'>Starred</a >

            </div>
            <div className='rightNav'>
                <Input placeholderText = 'Search' style = {{
                    fontSize:'1rem'
                
                }}/>
                <p>noti</p>
                <p>settings</p>
                <p><Image image={image} 
                style={{
                    display: 'inline',
                    width: '2.5',
                    height: '2.5rem',
                    borderRadius: '50%',
                    objectFit: 'cover'

                }}/></p>
            </div>

        </nav>
    }

    export default Navbar