export const initialState = {
  user: null,
  currentlyPlaying: {},
  isPlaying: false,
  playlists: [],
  topArtists: [],
  recentTracks: [],
  topTracks: [],
  savedTracks: [],
  likedTracks: [],
  //!!!Delete during Deployment!!!
  token: null,
};

const reducer = (state, action) => {
  //console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_USER_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        topArtists: action.topArtists,
      };
    case "SET_TOP_TRACKS":
      return {
        ...state,
        topTracks: action.topTracks,
      };
    case "SET_RECENT_TRACKS":
      return {
        ...state,
        recentTracks: action.recentTracks,
      };
    case "SET_LIKED_TRACKS":
      return {
        ...state,
        likedTracks: action.likedTracks,
      };
    default:
      return state;
  }
};

export default reducer;

// BQDOqw_b1VuaxsECBkfb27NNdO5eWynFgzF1snDiLJ9vefhWip2uCsrRiobV_jEs68PQusvd4NJSN9_C7WushbtUaq6IAhvHDWyY58JXin1oqSulFg23kV6X4pvT1BzmabmdT2gAoh29G61Km9sSVpGoCb-68EfFZ6zLnfSdWWrqOjc3bthfL4fHvBLx-zQjd9nqCezS7fh3QpBPs-lXfMBtrsVa-VnPLA
