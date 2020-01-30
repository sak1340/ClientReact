import React, { useState } from 'react';
const App = () => {
  const [url,seturl] = useState('')
  const fetchUser = async() =>{
    console.log('Click me')
    const res = await fetch('https://api.github.com/users/sak1340')
    const data = await res.json()
    console.log('data',data.avatar_url)
    seturl(data.avatar_url)
  }
  return (
    <>
        <img src={url} alt = 'Avtar' width="50px" />
        <button onClick={fetchUser()}>Click me</button>
    </>
  )
}









// const App = () => {
//   const [task, setTask] = useState([{ id: 1, task: 'Do homework' },
//   { id: 2, task: 'Read book' }])

//   return (
//     <>
//       {
//         task.map((item,key) => (<li key ={key}>{item.id + item.task}</li>))
//       }
//     </>
//   )
// }


// const App = () => {
//   const [name, setName] = useState('Paul')
//   const [surname, setsurname] = useState('walker')
//   return(
//     <div>
//       name:
//       <input 
//       type = "text"
//       name = "name"
//       onChange = {(e) => setName(e.target.value)}
//       />
//       <br/>Surname:
//       <input 
//        type = "text"
//        name = "surname"
//        onChange = {(e) => setsurname(e.target.value)}
//        />
//        <br/> {name} {surname}
//     </div>
//   )
// }

// const App = () => {
//   const [count, setConut] = useState(0)
//   return (
//     <>
//       <h1>Counter {count}</h1>
//       <button onClick={() => setConut(count + 1)}> + </button>
//       <button onClick={() => setConut(count - 1)}> - </button>
//     </>)
// }
export default App;
