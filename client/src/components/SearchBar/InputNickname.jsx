import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPlayer, filterPlayerByStatus } from "../../redux/actions/index";

const InputNickname = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [status, setStatus] = useState([]);

  //>>>>>>>> handle input name <<<<<<<<<<
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPlayer(name));
    setName("");
  };

  //>>>>>>>> handle status <<<<<<<<<<
  const handleChangeStatus = (ev) => {
    setStatus(ev.target.value);
  };

  const handleClickStatus = (ev) => {
    ev.preventDefault();
    dispatch(filterPlayerByStatus(status));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Search by player nickname"
        value={name}
        onChange={handleInputChange}
        className="form-input text"
      />
      <select
        type="submit"
        id="status"
        placeholder="Search player by status"
        value={status}
        onChange={handleChangeStatus}
        onClick={handleClickStatus}
        className="form__dropdown"
      >
        <option value="Search by status">Search by status</option>
        <option value="active">active</option>
        <option value="inactive">inactive</option>
      </select>
    </form>
  );
};
export default InputNickname;
