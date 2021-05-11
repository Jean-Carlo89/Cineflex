import {BrowserRouter,Switch,Route} from 'react-router-dom'
import{Link} from 'react-router-dom'
import Header from './components/Header'
import Menu from './components/Menu'
import Sessions from './components/Sessions'

export default function App(){
    return(
    <>
        

       
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' exact >
                    <Menu />
                </Route>

                <Route>
                    <Sessions path='/sessions' exact/>
                </Route>
            </Switch>
        </BrowserRouter>
    </>
    )
}




       /* <Header />
        <Menu/>
        <Sessions/>*/
   