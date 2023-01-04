import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const Result = ({ gradeRule }) => {
  const { courses } = useContext(GlobalContext);
  const gpaCalc = (num1, num2) => {
    const str = gradeRule(num1);
    const valObj = {
      AA: 4,
      BA: 3.5,
      BB: 3,
      CB: 2.5,
      CC: 2,
      DC: 1.5,
      DD: 1,
      FD: 0.5,
      FF: 0,
    };
    const val1 = valObj[`${str}`];
    const val2 = num2;
    const result = (val1 * 10 * val2) / 10;
    return result;
  };

  let arr2 = [];
  let arr3 = [];
  courses.map((item) => {
    const arr = gpaCalc(item.score, item.credits);
    arr2.push(arr);
    arr3.push(item.credits);
  });

  const total = (arr) => {
    let sum = 0;
    arr.forEach((element) => {
      sum += element * 10;
    });
    return sum / 10;
  };
  let num1 = total(arr2);
  let num2 = total(arr3);

  let gpaVal = ((num1 * 10) / (num2 * 10)).toFixed(2);

  return (
    <div className="result">
      <h2>Your GPA: {gpaVal >= 0 ? gpaVal : "0"} </h2>
    </div>
  );
};

export default Result;
