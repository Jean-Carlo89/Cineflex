import  {useState} from 'react'
export default function EachSeat({availability,seatNumber,id,seats,setSeats,seatN,setSeatNumber}){
const [border,setBorder] = useState(false)
    
    function selectSeat(id,number){
        
        
        
        if(!availability){
            alert('Este assento está indisponível')
            return
        }

       
       
        
        if(border){
           
            const newArray = seats.filter((item)=>(item!==id))
            const newArraySeats = seatN.filter((item)=>(item!==number))
           
            border ? setBorder(false) : setBorder(true)
            setSeats(newArray)
            setSeatNumber(newArraySeats)
            
            return
        }
       
       
        border ? setBorder(false) : setBorder(true)

        
        setSeats([...seats,id])
        setSeatNumber([...seatN,number])
       }

      
        
       
    return(
        
       
            <li className={`seat ${availability ? 'disponible' : 'not-disponible'} ${border ? 'selected' : ''}`} onClick={()=>selectSeat(id,seatNumber)} key={id}>
                    {seatNumber}
            </li>
           
        
        
    )
}