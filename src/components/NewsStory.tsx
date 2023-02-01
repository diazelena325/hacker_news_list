import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getEachStory } from '../data/hackerNewsAPI';


const StoryContainer = styled.div`
width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
   padding: 0.5rem 0.6rem;
   border-radius: 10px;
   border: 1px solid #00000066;
 
`;

const Title = styled.span`
color: black;
font-size: 1rem;
font-weight: bold;
   justify-content: flex-start;
    align-content: flex-start;
   `;

const Link = styled.a`
    color: #000000df;
    text-decoration: none;    
    justify-content: flex-start;
    align-content: flex-start;
`;

export const NewsStory = ({ listingId }: { [key: string]: any }) => {
        const [story, setStory] = useState<any>([]);

    useEffect(() => {
        getEachStory(listingId).then(data => data && setStory(data));
       
    }, [listingId]);

        return (
            <StoryContainer>
                <Title>{story.title}</Title>       
               <Link>{story.url}</Link>
                </StoryContainer>
        )
    }

    export default NewsStory