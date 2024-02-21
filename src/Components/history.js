import React, { useEffect, useState } from "react";
import { useremail } from "./nav";
import Nav from './nav';

const EmailHistory = () => {
  const [history, setHistory] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch(
          `https://summary-master-6dea2-default-rtdb.firebaseio.com/USERDATA.json?orderBy="useremail"&equalTo="${useremail}"`
        );
        const data = await res.json();
        const historyArray = Object.values(data);
        setHistory(historyArray);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, [useremail]);

  const handleTimeClick = (time) => {
    setSelectedTime((prevTime) => (prevTime === time ? null : time));
  };

  return (
    <div>
        <Nav/>
      <h2>Email History</h2>
      <div className="history-container">
        {history.map((item, index) => (
          <div key={index} className="history-item">
            <p onClick={() => handleTimeClick(item.time)}>Time: {item.time}</p>
            {selectedTime === item.time && (
              <>
                <p>Summarized Text: {item.text}</p>
                <p>Text: {item.content}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailHistory;
