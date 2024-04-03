import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './pages/Home'
import { Carrinho } from './pages/Carrinho'
import { Contato } from './pages/Contato'
import ListaContato from './pages/ListaContato'
import DetalhesContato from './pages/DetalhesContato'

export const Rotas = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route
          path='/carrinho'
          element={<Carrinho />}
        />
        <Route
          path='/cadastrarcontato'
          element={<Contato />}
        />
        <Route
          path='/contato'
          element={<ListaContato />}
        />
        <Route
          path='/detalhescontato/:id'
          element={<DetalhesContato />}
        />
      </Routes>
    </BrowserRouter>
  )
}
