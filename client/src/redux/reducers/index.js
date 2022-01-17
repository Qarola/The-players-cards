const initialState = {
  allPlayers: [],
  searchedPlayer: [],
  addPlayer: {},
  filterByStatus: [],
  updatedPlayer: [],
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
    case "UPDATE_DATA_PLAYER":
      return {
        ...state,
        updatedPlayer: action.payload,
      };

    default:
      return state;
  }
}
