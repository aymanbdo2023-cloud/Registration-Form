import { useState, useEffect } from 'react'

interface GreetingProps {
  name: string;
  initialCount?: number;
}

export function Greeting({ name, initialCount = 0 }: GreetingProps) {
  const [count, setCount] = useState(initialCount);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(`Hello ${name}, you've clicked ${count} times!`)
  }, [count, name]);

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setCount(count+1)}>Click</button>
    </div>
  )
}


export default Greeting;