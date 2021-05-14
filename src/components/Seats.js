import {useParams} from 'react-router-dom'

import EachSeat from './EachSeat'
import axios from 'axios'
import  {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
export default function Seats(props){
    
    const {chosenSeats,setChosenSeats,name,setName,data,setData,date,setDate,time,setTime,seatNumber,setSeatNumber}=props
    const {idSeat}=useParams()
    const [user,setUser] = useState('')
    const [cpf,setCPF] = useState('')
    
   
    
    
    
    const [seats,setSeats] = useState([])
    const [movies,setMovies] = useState([])

    useEffect(()=>{
      
        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSeat}/seats`)

        promisse.then((answer)=>{
          
            setSeats(answer.data.seats)
            setMovies(answer.data)
            setDate(answer.data.day.date)
            setTime(answer.data.name)
            
        })

        promisse.catch((answerError)=>{
           
            alert('houve um erro ao pegar os assentos')
        })
    },[])

    

    if(movies.length===0){
    
     return(
                <div className='container'>
                    <h2>Selecione o(s) assento(s)</h2>

                    <ul className='seats'>
                    
                    {seats.map((seat)=>(
                    

                        <EachSeat availability={seat.isAvailable} 
                        seatNumber={seat.name} 
                        id={seat.id}
                        seats={chosenSeats}
                        setSeats={setChosenSeats}
                        
                        />

                    ))}

                    </ul>

                    <ul class='seats disponibility'>
                        <li className='seat selected'>
                        <p>Selecionado</p>

                        </li>
                    
                        <li className='seat disponible'>
                        <p>Disponível</p>

                        </li>
                        
                        <li className='seat not-disponible'>
                        <p>Indisponível</p>
                        </li>
                        
                    </ul>

                
                    

                </div>
        )
    }else{
        return(
            <div className='container'>
                <h2>Selecione o(s) assento(s)</h2>

                <ul className='seats'>
                
                {seats.map((seat)=>(
                

                <EachSeat availability={seat.isAvailable} 
                seatNumber={seat.name} 
                id={seat.id}
                seats={chosenSeats}
                setSeats={setChosenSeats}
                seatN={seatNumber}
                setSeatNumber={setSeatNumber}
                />

                ))}

                </ul>

                <ul class='seats disponibility'>
                    <div className='anchor'>
                        <li className='seat selected'>
                        
                        </li>
                        <p>Selecionado</p>
                    </div>
                    
                    <div className='anchor'>
                        <li className='seat disponible'>
                       

                    </li>
                    <p>Disponível</p>
                    </div>
                    
                    <div className='anchor'>
                        <li className='seat not-disponible'>
                        
                        </li>
                        <p>Indisponível</p>
                    </div>
                </ul>

               
                <div className='user-info'>
                    <h4>Nome do comprador:</h4>
                    <input placeholder='Digite o seu nome...' onChange={(e)=>(saveUserName(e))} value={user}/>
                       
                    
                    <h4>CPF do comprador:</h4>
                    <input placeholder='Digite o seu cpf..' onChange={(e)=>(saveCPF(e))} value={cpf}/>
                    
                </div>

               
                
                <Link to={'/success'}>
                    <button className='sendRequest' onClick={finish}>Reservar assento(s)</button>
                </Link>
                
                
                <div className='movie-info'>
                    <div className='movie mini'>
                        <img src={movies.movie.posterURL}/> 
                    </div> 
                        <div className='text'>
                            <div>{movies.movie.title}</div>
                            <div>{`${movies.day.weekday}-${movies.day.date}`}</div>
                        </div>
                </div>
                
                
                

            </div>
    )
    }

    function saveUserName(e){
        setName(e.target.value)
        setUser(e.target.value)
    }

    function saveCPF(e){
        setData(e.target.value)
        setCPF(e.target.value)
    }

    
    function test(){
       
        setUser('')
        setCPF('')
        const finalObject = {ids:chosenSeats,
            name:name,
            cpf:data}


    }
    
    function finish(){
        

        const finalObject = {ids:chosenSeats,
            name:name,
            cpf:data}

        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many',finalObject)
        
        promisse.then((postSuccess)=>{
           
            console.log(postSuccess.data)
        })

        promisse.catch((postError)=>{
           
            console.log(postError.response.data)
        })

    }

}



