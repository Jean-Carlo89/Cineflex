import {useState} from 'react'
import { Link } from 'react-router-dom'


export default function EachMovie({poster,id}){
    const [border,setBorder] = useState(false)
    function toggleBorder(){
        border ? setBorder(false) : setBorder(true)
        console.log(id)
       }

      
    
    return(
    
        <li className={`movie ${border ? 'border' : ''}`} onClick={toggleBorder} key={id}>
            <Link to={`/sessions/${id}`}><img src={poster}/></Link>
        </li>

)
}