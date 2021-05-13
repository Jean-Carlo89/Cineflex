import {BrowserRouter,Switch,Route} from 'react-router-dom'
import{Link} from 'react-router-dom'
import Header from './components/Header'
import Menu from './components/Menu'
import Sessions from './components/Sessions'
import Seats from './components/Seats'
import {useState} from 'react'

export default function App(){
    const [movieTitle,setMovieTitle] = useState('')
    const[chosenSeats,setChosenSeats]=useState([])
    const[userName,setUserName]=useState('')
    const[userCPF,setUserCPF]=useState('')
    const[date,setDate] = useState('')
    const[time,setTime] = useState('')
    return(
    <>
        

       
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' exact >
                    <Menu />
                </Route>

                <Route path='/sessions/:idSession'>
                    <Sessions movieTitle={movieTitle} setMovieTitle={setMovieTitle}/>
                </Route>

                <Route path='/seats/:idSeat'>
                    <Seats chosenSeats={chosenSeats} 
                    setChosenSeats={setChosenSeats} 
                    name={userName}
                    setName={setUserName}
                    data={userCPF}
                    setData={setUserCPF}
                    date={date}
                    setDate={setDate}
                    time={time}
                    setTime={setTime}
                    
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    </>
    )
}




       /* <Header />
        <Menu/>
        <Sessions/>*/
   