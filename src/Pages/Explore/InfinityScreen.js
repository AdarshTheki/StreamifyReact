import React from 'react';
import Row from '../../Components/Rows/Row';

export default function InfinityScreen({ movies, sort,show }) {
    const [filterData, setFilterData] = React.useState([]);

    React.useEffect(() => {
        const sortOptions = {
            'popularity-az': (a, b) => a.popularity - b.popularity,
            'popularity-za': (a, b) => b.popularity - a.popularity,
            'vote_average-az': (a, b) => a.vote_average - b.vote_average,
            'vote_average-za': (a, b) => b.vote_average - a.vote_average,
            'title-az': (a, b) =>
                a.title
                    ? a.title.localeCompare(b.title)
                    : a.original_name.localeCompare(b.original_name),
            'title-za': (a, b) =>
                a.title
                    ? b.title.localeCompare(a.title)
                    : b.original_name.localeCompare(a.original_name),
        };
        const sorted = [...movies]?.sort(sortOptions[sort]);
        setFilterData(sorted);
    }, [sort, movies]);

    return (
        <div className='infinityScreen'>
            {filterData?.map((item) => (
                <Row key={item.id} {...item} show={show} />
            ))}
        </div>
    );
}
