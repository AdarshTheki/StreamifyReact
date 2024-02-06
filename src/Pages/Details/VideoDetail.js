import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { PlayIcon } from '../../Components/VideoPopup/PlayIcon';
import VideoPopup from '../../Components/VideoPopup/VideoPopup';
import RowLoading from '../../Components/Loading/RowLoading';
import LazyImage from '../../Components/LazyImage/LazyImage';
import './VideoSection.scss';

const VideoSection = () => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);

    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    if (loading) return <RowLoading width={250} height={180} />;

    return (
        <div className='videosSection'>
            <h2>Video Trailers</h2>
            <div className='videos'>
                {data?.results?.map((item) => (
                    <div key={item?.id} className='videoItem'>
                        <div
                            className='videoThumbnail'
                            onClick={() => {
                                setVideoId(item?.key);
                                setShow(true);
                            }}>
                            <LazyImage src={`https://img.youtube.com/vi/${item?.key}/mqdefault.jpg`} />
                            <PlayIcon />
                        </div>
                        <h2 className='videoTitle'>{item?.name?.substring(0, 20)}</h2>
                    </div>
                ))}
            </div>

            <VideoPopup show={show} setShow={setShow} videoId={videoId} setVideoId={setVideoId} />
        </div>
    );
};

export default VideoSection;
