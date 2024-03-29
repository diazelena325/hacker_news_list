import { useState, useEffect } from 'react';
import { MAX_STORIES, STORY_INCREMENT } from '../constants/constants';

function useInfiniteScroll() {
    const [scrolling, setScrolling] = useState(false);
    const [count, setCount] = useState(STORY_INCREMENT);

    const handleScroll = () => {
        let sum = window.innerHeight + document.documentElement.scrollTop;

        if ((Math.trunc(sum) !== document.documentElement.offsetHeight) || scrolling) 
        {
            return false;
        }
        setScrolling(true);
    };

    useEffect(() => {
     
        if (!scrolling) return;

        if (count + STORY_INCREMENT >= MAX_STORIES) {
            setCount(MAX_STORIES);
        } else {
            setCount(count + STORY_INCREMENT);
        }
        setScrolling(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrolling]);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return { count };

}

export default useInfiniteScroll