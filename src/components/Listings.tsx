/*Listings: Display loader until list of Ids of top stories are mapped to each News Story*/
import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getListingIds } from '../data/hackerNewsAPI';
import useInfiniteScroll  from "../hooks/useInfiniteScroll";
import Loader from './Loader';
import NewsStory from './NewsStory';

const Container = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    height: fit-content;
   
`;


function Listings() {
    const {count} = useInfiniteScroll();
    const [listingIds, setListingIds] = useState<number[]>([]);
    const [loading, setLoader] = useState<boolean>(true);

    useEffect(() => {
        getListingIds().then(data => { setListingIds(data); setLoader(false); });
      
    }, []);
    
    return (
        <Container>
            {loading && (<Loader/>)}
            {listingIds.slice(0, count).map(id => (                
            <NewsStory listingId={id} key={id} />
            ))}
        </Container>

    )
}

export default Listings