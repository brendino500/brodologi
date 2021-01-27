import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import About from './components/about/About'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Home exact path="/" component={Home} />
        <About path="/omkring" component={About} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
