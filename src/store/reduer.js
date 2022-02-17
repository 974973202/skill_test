const initState = {
  userList: [],
  organizationList: [],
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    // "user" 临时存储
    case "user":
      return {
        ...state,
        userList: [...action.value],
      };
    // "organization" 临时存储
    case "organization":
      return {
        ...state,
        organizationList: [...action.value],
      };
    case "getUser":
      return {
        ...state,
        userList: [...action.value],
      };
    case "getOrg":
      return {
        ...state,
        organizationList: [...action.value],
      };
    default:
      return state;
  }
};