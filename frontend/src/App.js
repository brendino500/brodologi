import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Home exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
