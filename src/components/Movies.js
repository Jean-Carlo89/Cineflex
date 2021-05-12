import{useState,useEffect} from 'react'
import axios from 'axios'



export default function RenderMovies(){
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies')

        promisse.then((answer)=>{
            console.log(answer.data)
            setMovies(answer.data)
            
        })
        
        promisse.catch((answerError)=>{
            console.log(answerError)
            alert('houve um erro na captação dos filmes')
        })
    },[])

    const [border,setBorder] = useState(false)

       function toggleBorder(){
        border ? setBorder(false) : setBorder(true)
       }
    
        return(
            movies.map((movie)=>{
                return(
                <li className={`movie ${border ? 'border' : ''}`} onClick={toggleBorder}key={movie.id}>
                    <img src={movie.posterURL}/>
                </li>
                )
            })
         
    
        )
    
}