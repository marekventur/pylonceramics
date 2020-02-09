import { useEffect, useState } from "react";

export const useInstagram = () => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
      fetch('http://localhost:3333/pcig')
        .then(r => r.json())
        .then(({ user }) => {
          const posts = user.edge_owner_to_timeline_media.edges.map(d => d.node);
          setPosts(posts);
        }, e => {
          setPosts(e);
        })  
    }, []);
    return posts;
};
