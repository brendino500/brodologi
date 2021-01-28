import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { BasketProvider } from './context/BasketContext'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import About from './components/about/About'
import BreadsIndex from './components/breads/BreadsIndex'

function App() {
  return (
    <BrowserRouter>
      <BasketProvider>
        <Navbar />
        <Switch>
          <Home exact path="/" component={Home} />
          <About path="/omkring" component={About} />
          <BreadsIndex path="/butikk" component={BreadsIndex} />
        </Switch>
      </BasketProvider>
    </BrowserRouter>
  )
}

export default App
