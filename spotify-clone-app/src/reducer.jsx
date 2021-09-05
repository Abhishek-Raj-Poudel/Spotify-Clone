export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null
  //For Debugging process only Remove After Finished Developing.....
  //"BQBKyK5-b8tIS4Ox9OC4RavjAs5ohq9IepZpYNVZF0jbmgnTJqsu27-xD0VF1hL3UEx9hE3WuNPggzF5tMCA3N8EiPksl-X9ooXITPV9QRBrn7-vf7Wrw0pcLhpu3VHN1QVWKNbr5h7XtOYuEewfTBjCpfm0KDDKs7bFjNsySjQ5ExP6eYJK"
  // token:
  //   "BQBKyK5-b8tIS4Ox9OC4RavjAs5ohq9IepZpYNVZF0jbmgnTJqsu27-xD0VF1hL3UEx9hE3WuNPggzF5tMCA3N8EiPksl-X9ooXITPV9QRBrn7-vf7Wrw0pcLhpu3VHN1QVWKNbr5h7XtOYuEewfTBjCpfm0KDDKs7bFjNsySjQ5ExP6eYJK"
};

const reducer = (state, action) => {
  console.log(action);

  //Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly
      };
    default:
      return state;
  }
};
export default reducer;
