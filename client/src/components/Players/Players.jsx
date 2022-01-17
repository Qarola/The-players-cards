import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../Pagination/Pagination";
import { getAllPlayers, searchPlayer } from "../../redux/actions/index.js";
import PlayerCard from "../PlayerCard/PlayerCard";
import SearchBar from "../SearchBar/SearchBar";
import loading from "../../img/loading-line.gif";
import "./Players.css";

const Players = (props) => {
  const dispatch = useDispatch();
  const allPlayers = useSelector((state) => state.allPlayers);
  const searchedPlayer = useSelector((state) => state.searchedPlayer);
  const filterByStatus = useSelector((state) => state.filterByStatus);

  const [players, setPlayers] = useState([]);
  const [page, setPage] = useState(1); //it starts in the page 1...

  useEffect(() => {
    dispatch(getAllPlayers());
  }, [dispatch]);

  useEffect(() => {
    if (searchedPlayer.length > 0) {
      setPlayers(searchedPlayer);
    } else {
      setPlayers(allPlayers);
    }
  }, [allPlayers, searchedPlayer]);

  useEffect(() => {
    if (filterByStatus.length > 0) {
      setPlayers(filterByStatus);
    }
  }, [filterByStatus]);

  useEffect(() => {
    return searchPlayer("");
  }, []);

  useEffect(() => {
    if (props.location.search !== "") {
      setPage(
        parseInt(
          props.location.search.slice(props.location.search.indexOf("=") + 1)
        )
      );
    }
  }, [props.location.search]);

  return (
    <div className="grid-card">
      <SearchBar />
      <div>
        <div>
          <li className="player">
            {players.length > 0 ? (
              players
                ?.slice((page - 1) * 10, page * 10) 
                .map((e) => (
                  <PlayerCard
                    className="player"
                    key={e.id}
                    id={e.id}
                    avatar={e.avatar}
                    name={e.name}
                    status={e.status}
                    ranking={e.ranking}
                  />
                ))
            ) : (
              <div className="loading-image">
                <img src={loading} alt="loading-line.gif" />
              </div>
            )}
          </li>
        </div>
      </div>
      <Pagination allPlayers={players} page={page} />
    </div>
  );
};
export default Players;
