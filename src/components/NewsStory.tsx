import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getEachStory } from '../data/hackerNewsAPI';

const StoryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px 6px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.4);
    border-right: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    box-shadow: 0 5px 45px rgba(0,0,0,0.1);
    backdrop-filter: blur(5px);
    transition: all .4s ease;
    overflow: hidden;
    margin: 5px;
    text-align: start;

    &:hover {
        transition: all .4s ease;
        transform: translateY(-10px);
         background-color: rgba(255, 255, 255, 0.177);
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 150px;
        height: 100%;
        background: #ffffff;
        transform: skewX(65deg) translateX(-350px);
        transition: 0.4s;
        opacity: 30%;
    }

    &:hover::before {
        transform: skewX(65deg) translateX(2000px);
        opacity: 30%;
        transition: 0.4s;
    }
`;

const NoUrlStoryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px 6px;
    border-radius: 10px;
    border: 2.5px solid rgba(12, 12, 12, 0.4);
    border-right: 1px solid #51515133;
    border-bottom: 1px solid #55555533;
    box-shadow: 0 5px 45px rgba(0,0,0,0.1);
    backdrop-filter: blur(5px);
    transition: all .4s ease;
    overflow: hidden;
    margin: 5px;
    text-align: start;
    color: #cacacada;
    background-color: rgba(71, 71, 71, 0.265);
`;

const Title = styled.span`
    font-size: 1.1rem;
    font-weight: bold;
    justify-content: flex-start;
    align-content: flex-start;
`;

const Link = styled.a`
    color: #ffffffdf;
    text-decoration: none;
    justify-content: flex-start;
    align-content: flex-start;
`;

const Details = styled.span`
    font-size: 0.8rem;
`;

export const NewsStory = ({ listingId }: { [key: string]: any }) => {
    const [story, setStory] = useState<any>([]);
    let url = true;

    useEffect(() => {
        getEachStory(listingId).then(data => data && setStory(data));
    }, [listingId]);

    if (!story.url) {
        url = false;
    }
    const handleDate = (time: any) => {
        let newDate: any = new Date();
        const seconds = Math.floor((newDate - time * 1000) / 1000)

        let interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return `${interval} years`;
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return `${interval} months`;
        }
        interval = Math.floor(seconds / 86400);

        if (interval > 1) {
            return `${interval} days`;
        }

        interval = Math.floor(seconds / 3600);

        if (interval > 1) {
            return `${interval} hours`;
        }

        interval = Math.floor(seconds / 60);

        if (interval > 1) {
            return `${interval} minutes`;
        }

        return `${Math.floor(seconds)} seconds`;
    };

    return (
        <div>
            {url ?
                <Link href={story.url} target="_blank" rel='noreferrer' data-testid="link"> <StoryContainer data-testid="story">
                    <Title>{story.title}</Title>
                    <Details data-testid="story-by">By: {story.by}  |  {handleDate(story.time)} ago</Details> 
                    <Details>{story.descendants} Comments</Details> 
                </StoryContainer></Link>
                :
                <NoUrlStoryContainer data-testid="nourlstory">
                    <Title>{story.title}</Title>
                    <Details data-testid="story-by">By: {story.by}  |  {handleDate(story.time)} ago</Details> 
                    <Details>{story.descendants} Comments</Details>
                </NoUrlStoryContainer>}
        </div>
    )
}

export default NewsStory