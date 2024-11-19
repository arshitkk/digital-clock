import "./Clock.css";
import { useState, useEffect } from "react";

function Clock() {
  let seconds = new Date().getSeconds().toString().padStart(2, "0");
  let minutes = new Date().getMinutes().toString().padStart(2, "0");
  let hours = new Date().getHours() % 12;
  let hoursNewFormat = hours.toString().padStart(2, "0");

  const [sec, setSec] = useState(seconds);
  const [min, setMin] = useState(minutes);
  const [hr, setHr] = useState(hoursNewFormat);

  function changeSec() {
    setTimeout(() => {
      setSec(seconds);
    }, 1000);
  }
  function changeMin() {
    setTimeout(() => {
      setMin(minutes);
    }, 1000);
  }
  function changeHr() {
    setTimeout(() => {
      setHr(hoursNewFormat);
    }, 1000);
  }

  useEffect(() => {
    changeSec();
    changeHr();
    changeMin();
  }, [sec, min, hr]);

  return (
    <div className="container">
      <p>The Digital Clock</p>
      <div className="clock">
        <div className=" boxes hr">{hr}</div>
        <span className="colon">:</span>
        <div className=" boxes min">{min}</div>
        <span className="colon">:</span>
        <div onChange={changeSec} className=" boxes sec">
          {sec}
        </div>
        <div className="boxes am-pm">{hr < 12 ? "AM" : "PM"}</div>
      </div>
    </div>
  );
}

export default Clock;
