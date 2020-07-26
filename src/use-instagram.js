import { useEffect, useState } from "react";

export const useInstagram = () => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
      fetch('https://server.marekventur.com/pcig')
        .then(r => r.json())
        .then(setPosts, setPosts)  
    }, []);
    return posts;
};
