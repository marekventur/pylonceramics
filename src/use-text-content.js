import { useEffect, useState } from "react";

export const useTextContent = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch('http://localhost:3333/pcgd')
        .then(r => r.json())
        .then(setData, setData)  
    }, []);
    return data;
};
