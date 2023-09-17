import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { PlayIcon } from "../../../Components/VideoPopup/PlayIcon";
import VideoPopup from "../../../Components/VideoPopup/VideoPopup";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../Components/LazyImage/Img";
import "./VideoSection.scss";

const VideoSection = () => {
  const location = useLocation();
  const path = location.pathname.replace("/show", "");

  const { loading, data } = useFetch(`${path}/videos`);

  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingVideo = () => {
    return (
      <div className='skItem'>
        <div className='thumb skeleton'></div>
        <div className='row skeleton'></div>
        <div className='row2 skeleton'></div>
      </div>
    );
  };
  return (
    <div className='videosSection'>
      <h2 className='sectionHeading'>Official Videos</h2>
      {!loading ? (
        <div className='videos'>
          {data?.results?.map((item) => (
            <div
              key={item?.id}
              className='videoItem'
              onClick={() => {
                setVideoId(item?.key);
                setShow(true);
              }}>
              <div className='videoThumbnail'>
                <Img
                  src={`https://img.youtube.com/vi/${item?.key}/mqdefault.jpg`}
                />
                <PlayIcon />
              </div>
              <h2 className='videoTitle'>{item?.name?.substring(0, 20)}</h2>
            </div>
          ))}
        </div>
      ) : (
        <div className='videoSkeleton'>
          {loadingVideo()}
          {loadingVideo()}
          {loadingVideo()}
          {loadingVideo()}
        </div>
      )}
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
      <div className='box-shadow'></div>
    </div>
  );
};

export default VideoSection;
