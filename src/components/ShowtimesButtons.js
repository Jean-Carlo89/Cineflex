import {useState} from 'react'
export default function Showtimes({showtimes}){
    const [border,setBorder] = useState(false)
    function toggleBorder(){
        border ? setBorder(false) : setBorder(true)
        
       }
    
       return(
        <button className={`${border ? 'border' : ''}`} onClick={toggleBorder}>{showtimes}</button> 
    )
}