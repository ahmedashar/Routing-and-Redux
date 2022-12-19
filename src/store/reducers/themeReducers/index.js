export default function reducer(state = {}, action) {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.data };
      break;
    default:
      return state;
  }
}
