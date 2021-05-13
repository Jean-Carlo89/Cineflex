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
    
   // console.log('Este é o idSeat')
    //console.log(idSeat)
    
    
    
    const [seats,setSeats] = useState([])
    const [movies,setMovies] = useState([])

    useEffect(()=>{
       // setSeats([])
        //setSeatNumber([])
        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSeat}/seats`)

        promisse.then((answer)=>{
          // console.log('Este é o answer.data')
            console.log(answer.data)
           // console.log('abaixo o consolelog do anser.data.seats')
          // console.log(answer.data.seats)
            setSeats(answer.data.seats)
            setMovies(answer.data)
            setDate(answer.data.day.date)
            setTime(answer.data.name)
            
        })

        promisse.catch((answerError)=>{
            console.log(answerError.response)
            alert('houve um erro ao pegar os assentos')
        })
    },[])

    //console.log('array dos seats')
   // console.log(seats)

   // console.log('array do filme')
   // console.log(movies)
       
    /*return(
        
        seats.map((seat)=>(
            

                <EachSeat availability={seat.isAvailable} seatNumber={seat.name} id={seat.id}/>

        ))
        
    )*/

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

                <button onClick={()=>(console.log(chosenSeats))}>teste estado do id do seat</button>
                <button onClick={()=>(console.log(seatNumber))}>teste estado do numero do assento</button>
                <div className='user-info'>
                    <h4>Nome do comprador:</h4>
                    <input placeholder='Digite o seu nome...' onChange={(e)=>(saveUserName(e))} value={user}/>
                        <button onClick={()=>(console.log(name))}>name value</button>
                    
                    <h4>CPF do comprador:</h4>
                    <input placeholder='Digite o seu cpf..' onChange={(e)=>(saveCPF(e))} value={cpf}/>
                    <button onClick={()=>(console.log(data))}>name value</button>
                </div>

                <button onClick={test}>ver objeto final</button>
                
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

console.log(finalObject)

console.log(date)
console.log(time)
    }
    
    function finish(){
        

        const finalObject = {ids:chosenSeats,
            name:name,
            cpf:data}

        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many',finalObject)
        
        promisse.then((postSuccess)=>{
            console.log('Deu certo')
            console.log(postSuccess.data)
        })

        promisse.catch((postError)=>{
            console.log('Deu ruim')
            console.log(postError.response.data)
        })

    }

}



/*


*/ 

/*<li className='seat'>
                    1
               </li>

               <li className='seat'>
                    2
               </li>*/


               /*
            <div className='movie-info'>
                <div className='movie mini'>
                    <img src={movie.posterURL}/> 
                </div> 
                <span>{movie.title}</span>
                <span>{movie.title}</span>


                <Link to='/'>
        <button>to menu</button>
        </Link>
            </div>*/