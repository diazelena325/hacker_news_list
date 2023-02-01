import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getListingIds } from '../data/hackerNewsAPI';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: fit-content;
   
`;

const MainTitle = styled.h1`
    
`;

function Listings() {

    const [listingIds, setListingIds] = useState([]);

    useEffect(() => {
        getListingIds().then(data => { setListingIds(data); });

    }, []);

    return (
        <Container>
            <MainTitle>Hacker News List</MainTitle>
            <div>{listingIds}</div>
        </Container>

    )
}

export default Listings