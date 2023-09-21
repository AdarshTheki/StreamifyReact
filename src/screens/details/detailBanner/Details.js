import React from "react";
import { useLocation } from "react-router-dom";
import DetailContainer from "./DetailContainer";
import Loading from "./Loading";
import useFetch from "../../../hooks/useFetch";
import "./DetailBanner.css";
import "./playBtn.scss";

const Detail = () => {
  const location = useLocation();
  const path = location.pathname.replace("/show", "");

  const { data, loading } = useFetch(path);

  if (loading || data?.message) {
    return <Loading />;
  }

  return <DetailContainer key={data?.id} {...data} path={path} />;
};

export default Detail;
