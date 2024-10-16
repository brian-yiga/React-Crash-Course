import React from 'react'

const App = () => {
  const name = 'BRIAN';
  const w = 10;
  const y = 20;
  const names = ['brian', 'yiga', 'muwonge']
  const loggedIn = true
  const styles = {
    color: 'green',
    fontSize: '60px'
  }

  return (
<div>
  <div className='text-10xl'>App</div>
  <p style={ styles }>My name is {name}</p>
  <p>The sum of {w} and {y} is { w + y }</p>
  <ul>
    {names.map((name) => (
      <li>{name}</li>
    ))}
  </ul>
  { loggedIn && <h1>hello member</h1>}
</div>

  )
}

export default App