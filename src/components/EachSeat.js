import  {useState} from 'react'
export default function EachSeat({availability,seatNumber,id,seats,setSeats}){
const [border,setBorder] = useState(false)
    
    function selectSeat(id){
        
        
        
        if(!availability){
            alert('Este assento está indisponível')
            return
        }

       
       
        
        if(border){
           console.log('entrou aqui')
            const newArray = seats.filter((item)=>(item!==id))
            console.log(newArray)
            border ? setBorder(false) : setBorder(true)
            setSeats(newArray)
            return
        }
       
       // console.log(seats)
        border ? setBorder(false) : setBorder(true)

        //console.log(id)
        setSeats([...seats,id])
       }

      
        //console.log(seats)
       
    return(
        
       
            <li className={`seat ${availability ? 'disponible' : 'not-disponible'} ${border ? 'selected' : ''}`} onClick={()=>selectSeat(id)} key={id}>
                    {seatNumber}
            </li>
           
        
        
    )
}