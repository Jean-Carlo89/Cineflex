import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Showtimes from './ShowtimesButtons'


export default function Sessions({movieTitle,setMovieTitle}){
    const {idSession} = useParams()
    
    
    const [movie,setMovie] = useState({})
    
    const[days,setDays] = useState([])

    useEffect(()=>{
        const promisse=axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idSession}/showtimes`)

        promisse.then((answer)=>{
            
            setMovie(answer.data)
            setDays(answer.data.days)
            
            setMovieTitle(answer.data.title)
            
        })
        
        promisse.catch((answerError)=>{
            console.log(answerError)
            alert('houve um erro na requisicão deste filme')
        })
    
    },[])

    

    
    
    return(
        <div className='container-sessions container'>
            <h2>Selecione o horário</h2>

            <div className='sessions'>
               {days.map((days)=>(
                    <div className='session'>
                    <h3>{`${days.weekday}-${days.date}`}</h3>

                    <div className='horarios'>
                        {days.showtimes.map((showtimes)=>(
                            
                            <Showtimes showtimes={showtimes.name} id={showtimes.id}/>
                        ))
                            
                        }
                    </div>
                    </div>

               ))}
               

                
                
            

                
            </div>

            <div className='movie-info'>
                <div className='movie mini'>
                    <img src={movie.posterURL}/> 
                </div> 
                <div className='text'>{movie.title}</div>

            </div>

            
    </div>
    )

    
}
/*<button className={`${border ? 'border' : ''}`} onClick={toggleBorder}>{showtimes.name}</button> */
  /*return(
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
    )*/