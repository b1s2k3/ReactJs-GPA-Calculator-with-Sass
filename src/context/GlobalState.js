import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  courses: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteCourse = (id) => {
    dispatch({ type: "DELETE_COURSE", payload: id });
  };

  const addCourse = (course) => {
    dispatch({ type: "ADD_COURSE", payload: course });
  };
  return (
    <GlobalContext.Provider
      value={{ courses: state.courses, deleteCourse, addCourse }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
