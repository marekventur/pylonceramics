import { useEffect, useState } from "react";

export const useTextContent = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch('https://server.marekventur.com/pcgd')
        .then(r => r.json())
        .then(setData, setData)  
    }, []);
    return data;
};
