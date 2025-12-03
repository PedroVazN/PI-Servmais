import { useEffect, useState } from "react";
import './DateTimeOverlay.css';

export default function DateTimeOverlay() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    function updateDateTime() {
      const now = new Date();

      const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };

      const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      setTime(now.toLocaleTimeString("pt-BR", timeOptions));
      setDate(now.toLocaleDateString("pt-BR", dateOptions));
    }

    updateDateTime(); // Atualiza imediatamente
    const interval = setInterval(updateDateTime, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval); // Evita vazamento de memória
  }, []);

  return (
    <div className="datetime-overlay">
      <div className="datetime-content">
        <div className="time">{time}</div>
        <div className="date">{date}</div>
      </div>
    </div>
  );
}
