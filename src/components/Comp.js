import { useState } from "react"

function Comp({name, name2, children}) {

  const [initName, changeName] = useState(name)

  return <div>
    <h1>{children} {initName}</h1>
    <button onClick={() => changeName(name2)}>Change</button>
  </div>
}
export default Comp
