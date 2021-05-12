import RenderSeats from './RenderSeats'
export default function Seats(){

    return(
         <div className='container'>
            <h2>Selecione o(s) assento(s)</h2>

            <ul className='seats'>
               <RenderSeats/>
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

}

/*<li className='seat'>
                    1
               </li>

               <li className='seat'>
                    2
               </li>*/