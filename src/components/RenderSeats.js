import axios from 'axios'
import  {useState,useEffect} from 'react'
import EachSeat from './EachSeat'
export default function RenderSeats(){
const [seats,setSeats] = useState([])

    useEffect(()=>{
        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/1/seats')

        promisse.then((answer)=>{

           // console.log(answer.data)
            //console.log('abaixo o consolelog do anser.data.seats')
           // console.log(answer.data.seats)
            setSeats(answer.data.seats)
            console.log('array dos seats')
            console.log(seats)
            
        })

        promisse.catch((answerError)=>{
            console.log(answerError)
            alert('houve um erro ao pegar os assentos')
        })
    },[])

    
       
    return(
        
        seats.map((seat)=>(
            

                <EachSeat availability={seat.isAvailable} seatNumber={seat.name} id={seat.id}/>

        ))
        
    )
}

