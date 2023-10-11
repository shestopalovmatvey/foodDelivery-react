import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import PhoneCodePage from './pages/PhoneCodePage/PhoneCodePage'
import OrderPage from './pages/OrderPage/OrderPage'


function App() {
  return (
    <div className='wrapper'>
        <Routes>
          <Route path='/' element={<MainPage/>}>
          </Route>
          <Route path='/validationPhoneCode' element={<PhoneCodePage/>}></Route>
          <Route path='/orderPage' element={<OrderPage/>}></Route>
        </Routes>
    </div>
  )
}

export default App
