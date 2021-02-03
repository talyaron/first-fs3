//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';



function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/get-users')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setUsers(data);
      });
  }, [])

  return (
    <div>
      {users.map((user, index) => {
        return <p className='names' key={index}>{user.name}</p>
      })}

    </div>
  );
};


export default App;
