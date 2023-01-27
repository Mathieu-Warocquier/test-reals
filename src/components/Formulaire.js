import { useState } from 'react'


function Formulaire() {


  // function handleChange(e) {
  //   e.preventDefault()
  //   value = e.target[nom].value
  // }

  const [name, newName] = useState("jean")
  const [opt, newOpt] = useState("Demo 2")
  const [isChecked, setIsChecked] = useState(false);




  return <div>
      <label htmlFor="nom">Mon nom</label>
      <input type="text" id="nom" name="nom" defaultValue={name} onChange={e => newName(e.target.value)}/>
      {name}
      <select defaultValue='demo2' onChange={e => newOpt(e.target.value)}>
        <option value="demo1">Demo 1</option>
        <option value="demo2">Demo 2</option>
        <option value="demo3">Demo 3</option>
      </select>
      {opt}
      <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
      { isChecked ? <div>Je suis checké</div> : null }
    </div>
}

export default Formulaire
