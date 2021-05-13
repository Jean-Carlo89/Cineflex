import {Link} from 'react-router-dom'
import {useState} from 'react'
export default function Showtimes({showtimes,id}){
    
    const [border,setBorder] = useState(false)
    function toggleBorder(){
        border ? setBorder(false) : setBorder(true)
        //console.log(id)
       }
    
       return(
        <Link to={`/seats/${id}`}>
            <button className={`${border ? 'border' : ''}`} onClick={toggleBorder} key={id}>{showtimes}</button> 
        </Link>
    )
}