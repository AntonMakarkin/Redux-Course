import { CakeView } from './features/cake/cakeView'
import { IcecreamView } from './features/icecream/IceCreamView'
import { UserView } from './features/user/UserView'
import './App.css'

function App() {
  return (
    <div className="App">
      <CakeView/>
      <IcecreamView/>
      <UserView/>
    </div>
  )
}

export default App
