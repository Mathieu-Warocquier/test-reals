import { useState } from 'react'


function Formulaire() {


  // function handleChange(e) {
  //   e.preventDefault()
  //   value = e.target[nom].value
  // }

  const [name, newName] = useState("jean")
  const [prenom, newPrenom] = useState("Waro")
  const [opt, newOpt] = useState("Demo 2")
  const [isChecked, setIsChecked] = useState(false);


  return <div>
      <label htmlFor="nom">Mon nom</label>
      <input type="text" id="nom" name="nom" value={name} onChange={e => newName(e.target.value)}/>
      {name}
      <select value='demo2' onChange={e => newOpt(e.target.value)}>
        <option value="demo1">Demo 1</option>
        <option value="demo2">Demo 2</option>
        <option value="demo3">Demo 3</option>
      </select>
      {opt}
      <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
      { isChecked ? <div>Je suis checké</div> : null }

      <input type="text" id="nom" name="nom" value={name} onChange={e => newName(e.target.value)}/>
      <input type="text" id="prenom" name="prenom" value={prenom} onChange={e => newPrenom(e.target.value)}/>
      {name} {prenom}


      {/* si je veux traquer les valeurs je peux utiliser value (plus pour traitement en direct) sinon je peux aussi utliser defaultValue (mieux pour une formulaire classique) */}

    </div>
}

export default Formulaire
