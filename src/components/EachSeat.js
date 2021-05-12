import  {useState} from 'react'
export default function EachSeat({availability,seatNumber,id}){
const [border,setBorder] = useState(false)
    function selectSeat(){
        
        if(!availability){
            alert('Este assento está indisponível')
            return
        }
        
        border ? setBorder(false) : setBorder(true)
        
       }

      

       
    return(
        
       
            <li className={`seat ${availability ? 'disponible' : 'not-disponible'} ${border ? 'selected' : ''}`} onClick={selectSeat} key={id}>
                    {seatNumber}
            </li>
           
        
        
    )
}