import { useState, useEffect } from "react";

const LoginModal = () => {
    const [seconds, setSeconds] = useState(200);
  
    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds((prev) => {
            if (prev > 0) {
              return prev - 1;
            } else {
              clearInterval(interval);
              return 0;
            }
          });
        }, 1000);
    
        return () => {
          clearInterval(interval);
          alert("Выполнено размонтирование компоненты");
          
        };
      }, []);


  return (
      <div>
        <p>Окно открыто: {seconds} сек.</p>
      </div>
  );
};

export default LoginModal;
