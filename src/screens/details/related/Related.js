import React from "react";
import { useLocation } from "react-router-dom";
import Rows from "../../../Components/Rows/Rows";

const Related = () => {
  const location = useLocation();
  const path = location.pathname.replace("/show", "");
  const find = location.pathname.match("movie");
  return (
    <div>
      <h2>Similar Show</h2>
      <Rows fetchUrl={`${path}/similar`} show={!find ? "tv" : "movie"} />
      <h2>Recommendations</h2>
      <Rows
        fetchUrl={`${path}/recommendations`}
        show={!find ? "tv" : "movie"}
      />
    </div>
  );
};
export default Related;
