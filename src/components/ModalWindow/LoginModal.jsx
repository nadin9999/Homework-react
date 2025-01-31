import { useState, useEffect } from "react";

const LoginModal = ({ onClose }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev < 200) {
          return prev + 1;
        } else {
          alert("Время вышло!");
          clearInterval(interval);
          onClose();
          return 200;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      alert("Выполнено размонтирование компоненты");
    };
  }, [onClose]);


  return (
      <div>
        <p>Окно открыто: {seconds} сек.</p>
      </div>
  );
};

export default LoginModal;
