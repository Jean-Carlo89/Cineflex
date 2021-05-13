import{Link} from 'react-router-dom'
export default function Success(props){
    const {movie,time,date,user,userCPF,seats,setSeatsid,setSeatsNumber,seatId}=props
    
    return(
        <div className='container'>
            <p class='finish-message'>Pedido Feito com sucesso!</p>

            <div className='success-info'>
                <div className='info-movie'>
                        <h3>Filme e sessão</h3>
                        <p>{movie}</p>
                        <p>{date} {time}</p>

                </div>

                <ul className='info-seats'>
                    <h3>Ingressos</h3>
                    {seats.map((seat)=>{
                        return(
                        <li>Assento {seat}</li>
                        )
                    })
                        }
                </ul>

                <div className='info-movie last'>
                        <h3>Comprador</h3>
                        <p>Nome: {user}</p>
                        <p>CPF:{userCPF}</p>

                </div>

                <Link to={'/'}>
                    <button onClick={epmtySeatStates}class='return'>Voltar pra Home</button>
                </Link>
            </div>
        </div>
    )

//
    function epmtySeatStates(){
        const empty =[]
        setSeatsNumber(empty)
        setSeatsid(empty)
    
    console.log('array dos assentos')
    console.log(seats)
    
    
    console.log('array dos ids')
    console.log(seatId)
}
}
