import {Link} from 'react-router-dom'

export default function Menu(){

    return (
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
        )
}