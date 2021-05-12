
import { Link } from 'react-router-dom'
import RenderMovies from './Movies'

export default function Menu(){
    return(
    <>
        <Link to={'/seats'}>
            <button>to seats</button>
        </Link>
    
    <div className='container'>
        <h2>Selecione o filme</h2>
       

        
            <RenderMovies />
        
    </div>
</>
    )
}


/* return (
     <div className='container'>
        <h2>Selecione o filme</h2>
            <Link to='/sessions'>
            <button>to sessions</button>
            </Link>

        <div className='movies'>
            <div className='movie'>
                <img src='images/pudim.png'/>
            </div>

            <div className='movie'>
                <img src='images/frango_yin_yang.png'/>
            </div>

            <div className='movie'>
                <img src='images/pudim.png'/>
            </div>

            <div className='movie'>
                <img src='images/pudim.png'/>
            </div>
        </div>
    </div>
        )*/