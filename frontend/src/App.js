import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { BasketProvider } from './context/basketContext'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import About from './components/about/About'
import BreadsIndex from './components/breads/BreadsIndex'
import BreadIndividual from './components/breads/BreadIndividual'
import Payment from './components/checkout/Payment'

function App() {
  return (
    <BrowserRouter>
      <BasketProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/omkring" component={About} />
          <Route path="/butikk/:id" component={BreadIndividual} />
          <Route path="/butikk" component={BreadsIndex} />
          {/* <Route path="/betaling" component={Payment} /> */}
        </Switch>
      </BasketProvider>
    </BrowserRouter>
  )
}

export default App
