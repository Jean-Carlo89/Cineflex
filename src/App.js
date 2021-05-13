import {BrowserRouter,Switch,Route} from 'react-router-dom'
import{Link} from 'react-router-dom'
import Header from './components/Header'
import Menu from './components/Menu'
import Sessions from './components/Sessions'
import Seats from './components/Seats'
import {useState} from 'react'

export default function App(){
    const [movieTitle,setMovieTitle] = useState('')
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
                    <Seats />
                </Route>
            </Switch>
        </BrowserRouter>
    </>
    )
}




       /* <Header />
        <Menu/>
        <Sessions/>*/
   