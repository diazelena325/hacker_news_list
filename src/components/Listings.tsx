import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getListingIds } from '../data/hackerNewsAPI';
import useInfiniteScroll  from "../hooks/useInfiniteScroll";
import Loader from './Loader';
import NewsStory from './NewsStory';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: fit-content;
   
`;

const MainTitle = styled.h1`
    color: #fffffff5;
`;

function Listings() {
    const {count} = useInfiniteScroll();
    const [listingIds, setListingIds] = useState<number[]>([]);
    const [loading, setLoader] = useState<boolean>(true);

    useEffect(() => {
        getListingIds().then(data => { setListingIds(data); setLoader(false); });
        console.log("listingId: " + listingIds);
    }, []);
    
    return (
        <Container>
            <MainTitle>Hacker News List</MainTitle>
            {loading && (<Loader/>)}
            {listingIds.slice(0, count).map(id => (
               
                
            <NewsStory listingId={id} key={id} />
            ))}
        </Container>

    )
}

export default Listings