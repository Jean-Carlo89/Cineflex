import{useState,useEffect} from 'react'
import axios from 'axios'
import EachMovie from './EachMovie'



export default function RenderMovies(){
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies')

        promisse.then((answer)=>{
            
            setMovies(answer.data)
            
        })
        
        promisse.catch((answerError)=>{
            console.log('Este foi o erro :' +answerError)
            alert('houve um erro na captação dos filmes')
        })
    },[])

    

      

        return(
            
            <ul className='movies'>
            {movies.map((movie)=>(
                    
                    <EachMovie poster={movie.posterURL} id={movie.id}/>
                    
                ))}
            </ul>
    
        )
    
}