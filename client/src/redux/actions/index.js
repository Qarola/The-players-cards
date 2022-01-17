import axios from "axios";

export function getAllPlayers() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/players")

      .then((res) => {
        console.log(res);
        dispatch({
          type: "GET_ALL_PLAYERS",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function searchPlayer(name) {
  if (name !== "") {
    return function (dispatch) {
      axios
        .get(`http://localhost:3001/players?name=${name}`)
        .then((res) =>
          dispatch({
            type: "SEARCH_PLAYER",
            payload: res.data,
          })
        )
        .catch((err) => {
          console.error(err);
        });
    };
  } else {
    return {
      type: "SEARCH_PLAYER",
      payload: [],
    };
  }
}


export function addPlayer({ name, status, ranking, avatar }) {
  return function (dispatch) {
    const Player = {  name, status, ranking, avatar };
    axios.post("http://localhost:3001/add", Player)
      .then((res) =>
        dispatch({
          type: "ADD_PLAYER",
          payload: res.data,
        })
      )
      .catch((err) => {
        console.error(err);
      });
  };
}


export function filterPlayerByStatus(status) {
  if (status === 'active' || 'inactive') {
    //console.log(status)
    return function (dispatch) {
      axios.get(`http://localhost:3001/byStatus?status=${status}`)
        .then((res) => {
         // console.log(res.data)
          dispatch({
            type: "FILTER_PLAYER_BY_STATUS",
            payload: res.data,
          })
        }
        )
        .catch((err) => {
          console.error(err);
        });
    };
   } else {
    return {
      type: "FILTER_PLAYER_BY_STATUS",
      payload: [],
    };
  } 
}
