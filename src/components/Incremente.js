import { useState } from 'react'

function Incremente({start, step}) {

  const [calcul, calculAdd] = useState(start)

  return <button onClick={() => calculAdd(calcul + step || calcul + 1)}>Incremente : {calcul}</button>
}

export default Incremente
