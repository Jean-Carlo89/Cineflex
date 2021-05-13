import  {useState} from 'react'
export default function EachSeat({availability,seatNumber,id,seats,setSeats,seatN,setSeatNumber}){
const [border,setBorder] = useState(false)
    
    function selectSeat(id,number){
        
        
        
        if(!availability){
            alert('Este assento está indisponível')
            return
        }

       
       
        
        if(border){
           console.log('entrou aqui')
            const newArray = seats.filter((item)=>(item!==id))
            const newArraySeats = seatN.filter((item)=>(item!==number))
            console.log(newArray)
            border ? setBorder(false) : setBorder(true)
            setSeats(newArray)
            setSeatNumber(newArraySeats)
            
            return
        }
       
       // console.log(seats)
        border ? setBorder(false) : setBorder(true)

        //console.log(id)
        setSeats([...seats,id])
        setSeatNumber([...seatN,number])
       }

      
        //console.log(seats)
       
    return(
        
       
            <li className={`seat ${availability ? 'disponible' : 'not-disponible'} ${border ? 'selected' : ''}`} onClick={()=>selectSeat(id,seatNumber)} key={id}>
                    {seatNumber}
            </li>
           
        
        
    )
}