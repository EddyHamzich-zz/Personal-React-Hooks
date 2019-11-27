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
            setError(error)
            setLoading(true);
        }
      })()
      //eslint-disable-next-line
    }, []);
  
    return { loading, data, error };
};

/* Usage in component:

export default function App() {
    
    const { loading, data, error } = useFetch(`https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random() * 200)}`);
    
    return (
        <div>
            { loading ? (<div>...loading{error && console.log(error)}</div>) : (<div>{data.title}</div>) }
        </div>
    );
};

// "error &&" checks if error actually exists (truthy/falsy trick)

*/
