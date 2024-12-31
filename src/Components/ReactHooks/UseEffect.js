import  { useEffect,useState } from 'react';

function Time() {
  const [seconds, setseconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setseconds(prev => prev + 1);
    }, 1000);

    return () =>  clearInterval(interval);
    }, []);

    return <div>seconds: {seconds}</div>;
}
export default Time;