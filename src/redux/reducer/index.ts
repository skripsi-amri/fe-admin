const initialState = {
  isLoading: false,
  profile: {},
};

const reducer = (
  state = initialState,
  action: { type: string; value: any }
) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: action.value,
      };
    case "PROFILE_USER":
      return {
        ...state,
        profile: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
