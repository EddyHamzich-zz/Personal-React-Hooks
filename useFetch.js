import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                setLoading(false);
            }
            catch (error) {
                setError(error);
                console.log("useFetch error: ", error);
                setLoading(true);
            }
        })()
    }, [url]);
  
    return { loading, data, error };
};

/* Usage in component:

export default function App() {
    
    const { loading, data, error } = useFetch(`https://jsonplaceholder.typicode.com/todos/1`);
    
    return (
        <div>
            { loading ? (<div>...loading</div>) : (<div>{data.title}</div>) }
        </div>
    );
};

*/
