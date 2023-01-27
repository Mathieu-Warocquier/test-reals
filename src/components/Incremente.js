import { useState, useEffect } from 'react'

function Incremente({start}) {

  const [calcul, calculAdd] = useState(start)

  return <button onClick={() => calculAdd(calcul + 1)}>Incremente : {calcul}</button>
}

export default Incremente
