import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom'

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate=useNavigate()

  const handleSubmit = (event) => {
    if(username=="Rahul" && password==12345){
        navigate(`/product`)
    }else{
        setError(true)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email Address:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      {error && <p>{error}</p>}
      <button type="submit" onClick={handleSubmit}>Login</button>
    </form>
  );
    
}
