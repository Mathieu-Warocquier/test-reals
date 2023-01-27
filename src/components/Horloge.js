import { useState, useEffect } from 'react'

function Horloge() {
  const date = new Date()
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  });


  return <div>
    Nous sommes le {date.toLocaleDateString()} et il est: {time.toLocaleTimeString()}
  </div>
}
export default Horloge
