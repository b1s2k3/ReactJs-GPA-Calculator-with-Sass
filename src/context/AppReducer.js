export default (state, action) => {
    switch(action.type){
        case "DELETE_COURSE":
            return{
                ...state,
                courses: state.courses.filter(course=>course.id !== action.payload)
            };
        case "ADD_COURSE":
            return{
                ...state,
                courses: [action.payload, ...state.courses]
            }

        default:
            return state;
    }
}