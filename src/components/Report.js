import { GlobalContext } from "../context/GlobalState";
import { useContext, useState } from "react";
import Result from "./Result";

const Report = () => {
  const { courses, deleteCourse } = useContext(GlobalContext);
  const gradeRule = (num) => {
    if (num >= 90) {
      return "AA";
    } else if (89 >= num && num >= 85) {
      return "BA";
    } else if (84 >= num && num >= 80) {
      return "BB";
    } else if (79 >= num && num >= 75) {
      return "CB";
    } else if (74 >= num && num >= 70) {
      return "CC";
    } else if (69 >= num && num >= 65) {
      return "DC";
    } else if (64 >= num && num >= 60) {
      return "DD";
    } else if (59 >= num && num >= 50) {
      return "FD";
    } else {
      return "FF";
    }
  };
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    setShow(true);
  };
  return (
    <div className="table-container">
      <h3>General Report</h3>
      <table>
        <tr>
          <th>Course</th>
          <th>Grade</th>
        </tr>

        {courses.map((item) => (
          <tr key={item.id} className={gradeRule(item.score)}>
            <td>{item.course}</td>
            <td>{gradeRule(item.score)}</td>
            <button onClick={() => deleteCourse(item.id)}>X</button>
          </tr>
        ))}
      </table>
      <button className="btn-result" onClick={handleClick}>
        Calculate GPA
      </button>
      {show && <Result gradeRule={gradeRule} />}
    </div>
  );
};

export default Report;
