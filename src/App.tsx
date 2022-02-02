import './App.css';
import { useState } from 'react';
import MyChild from './MyChild';

function App() {
  const [name, setName] = useState('');

  return (
    <div className='appStyle'>
      <h1>Hello World!</h1>
      <input
        className='name-input'
        type='text'
        placeholder='Enter your name'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <h3>{name}</h3>
      <hr />
      <MyChild name={name} />
    </div>
  );
}

export default App;
