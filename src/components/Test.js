import { render } from "@testing-library/react"

let n = 0


function Test() {
  const items = ["tache1", "tache2", "tache3"]
  const emojis = ["💻","😶‍🌫️","🍷","🚀","🫠"]
  const lis = items.map((item, index) => <li key= {index}>{item}</li>)
  const lisemojis = emojis.map((emoji, index) => <li key={index}>{emoji}</li>)
  const title = <div>
                  <h1>Bonjour les gens <span>{n}</span></h1>
                  <ul>{lis}</ul>
                  <p>Comment ça va?</p>
                  <ul>{lisemojis}</ul>
                </div>

  return (
    <div>{title}</div>
  )
}

// window.setInterval(() => {
//   n++
//   Test()
// },1000)



export default Test
