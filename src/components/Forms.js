import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Report from "./Report";

const Forms = () => {
  const [course, setCourse] = useState("");
  const [credits, setCredits] = useState(0);
  const [score, setScore] = useState(0);

  const { addCourse } = useContext(GlobalContext);

  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    if (score <= 100 && score >= 0) {
      e.preventDefault();
      setShow(true);

      const newCourse = {
        id: Math.floor(Math.random() * 100000000),
        course,
        credits,
        score,
      };

      addCourse(newCourse);
      setCourse("");
      setCredits("");
      setScore("");
    } else {
      alert("Score should between 0-100");
    }
  };

  return (
    <div className="forms-container">
      <form>
        <label>Course: </label>
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <label>Credits: </label>
        <input
          type="number"
          value={credits}
          onChange={(e) => setCredits(e.target.value)}
        />
        <label>Score: </label>
        <input
          type="number"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
      {show && <Report />}
    </div>
  );
};

export default Forms;
