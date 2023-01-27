import { useState } from "react"

function TestA({name, name2, children}) {

  const [firstName, updateName] = useState(name)

  // const firstName = (name)

  // function changeName() {
  //   if (!firstName === (name)) {
  //     return firstName = (name2)
  //   }
  //     return firstName = (name)
  // }

  return <div>
          <h1>Bonjour {firstName}</h1>
          <button onClick={() => updateName(name2)}>changer Nom</button>
          <p>{children}</p>
        </div>
}

export default TestA




// const isSpring = currentMonth >= 2 && currentMonth <= 5

// if (!isSpring) {
//   return <div> Ce n'est pas le moment de rempoter</div>
// }
// return <div> C'est le moment de rempoter 🌱</div>
