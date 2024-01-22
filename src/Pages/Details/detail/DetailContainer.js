import React from "react";
import { useLocation } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import DetailContent from './DetailContent';
import useFetch from "../../../Hooks/useFetch";

const DetailContainer = () => {
    const location = useLocation();
    const path = location.pathname.replace('/show', '');

    const { data, loading } = useFetch(path);

    if (loading) {
        return (
            <div style={{ paddingTop: '4rem' }}>
                <div className='max-width'>
                    <Skeleton highlightColor='#333' baseColor='#222' width={800} height={30} />
                    <Skeleton highlightColor='#333' baseColor='#222' width={500} height={20} />
                    <Skeleton highlightColor='#333' baseColor='#222' width={800} height={10} />
                    <Skeleton highlightColor='#333' baseColor='#222' width={300} height={10} />
                    <Skeleton highlightColor='#333' baseColor='#222' width={800} height={10} />
                    <Skeleton highlightColor='#333' baseColor='#222' width={300} height={10} />
                    <Skeleton highlightColor='#333' baseColor='#222' width={400} height={20} />
                    <Skeleton highlightColor='#333' baseColor='#222' width={800} height={40} />
                    <Skeleton highlightColor='#333' baseColor='#222' width={800} height={40} />
                    <Skeleton highlightColor='#333' baseColor='#222' width={500} height={40} />
                    <Skeleton highlightColor='#333' baseColor='#222' width={500} height={30} />
                    <Skeleton highlightColor='#333' baseColor='#222' width={800} height={20} />
                </div>
            </div>
        );
    }

    return <DetailContent {...data} path={path} />;
};

export default DetailContainer;
