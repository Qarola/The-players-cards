const initialState = {
  allPlayers: [],
  searchedPlayer: [],
  addPlayer: {},
  filterByStatus: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_PLAYERS":
      return {
        ...state,
        allPlayers: action.payload,
      };
    case "SEARCH_PLAYER":
      return {
        ...state,
        searchedPlayer: action.payload,
      };
    case "FILTER_PLAYER_BY_STATUS":
       return {
        ...state,
        filterByStatus: action.payload,
      };
      case "ADD_PLAYER":
      return {
        ...state,
        addPlayer: action.payload,
      };
    default:
      return state;
  }
}
