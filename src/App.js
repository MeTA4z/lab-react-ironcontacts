import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';



console.log(contacts)

function App() {
  const [stateCelebs, setStateCelebs] = useState (contacts.splice(0, 5))
  const [otherCelebs, setOtherCelebs] = useState(contacts)
  const showFive = () => {
    return stateCelebs.map(eachContact => {
      return <li>{eachContact.name} <img src= {eachContact.pictureUrl}/></li>
    })
  }

const addRandom = () => {
  console.log('hello')
  let randomNum = Math.floor(Math.random() * otherCelebs.length)
  let randomCelebs = otherCelebs.splice(randomNum,
  sth(otherCelebs.splice(randomNum, 1)[0]
 
  newCelebs.push({ ...randomCeleb })

  setStateCelebs(newCelebs)
}


  return (
    <div>Hello
    {showFive()}
    <button onClick={addRandom}>Add Random Actor</button>
    </div>
  )
}

export default App;







// class App extends React.Component {
//   render() {
//     return (
//       <div className="App" >
//       This is fun
//       </div>
//     );
//   }
// }