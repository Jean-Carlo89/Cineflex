import {Link} from 'react-router-dom'
export default function Sessions(){
    return(
        <div className='container-sessions container'>
            <h2>Selecione o horário</h2>

            <div className='sessions'>
                <div className='session'>
                    <h3>Dia e data</h3>

                    <div className='horarios'>
                        <button>15:00</button> <button>19:00</button>
                    </div>
                </div>

                
                
            

                
            </div>

            <div className='movie-info'>
                <div className='movie mini'>
                    <img src='images/pudim.png'/> 
                </div> 
                <span>Filme do pudim</span>

                <Link to='/'>
        <button>to menu</button>
        </Link>
            </div>

            
    </div>
    )
}