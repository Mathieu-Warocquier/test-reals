import logo from '../logo.svg';
// import '../App.css';
import { useState } from 'react'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
// import QuestionForm from './QuestionForm'
import Footer from './Footer'
import Test from './Test'
import TestA from './TestA'
import Horloge from './Horloge'
import Incremente from './Incremente'
import Formulaire from './Formulaire'
import Comp from './Comp'

function App() {

  return (
    // <Test />
    <div>
      <TestA name="Jean" name2="Gaia">Bonjour tout le monde</TestA>
      <Horloge />
      <Incremente start={10} />
      <Incremente start={100} step={10}/>
      <Formulaire />
      <Comp name="Gaia" name2="Maud"> Hey </Comp>
    </div>
  )


  // const [cart, updateCart] = useState([])

  // return (
  //     <div>
  //         <Banner>
  //             <img src={logo} alt='La maison jungle' className='lmj-logo' />
  //             <h1 className='lmj-title'>La maison jungle</h1>
  //         </Banner>
  //         <div className='lmj-layout-inner'>
  //             <Cart cart={cart} updateCart={updateCart} />
  //             <ShoppingList cart={cart} updateCart={updateCart} />
  //         </div>
  //         <Footer />
  //     </div>
  // )
}

export default App
