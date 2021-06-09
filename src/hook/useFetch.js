import  { useState, useEffect} from 'react'

const useFetch = (func, params) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const postData = await func(params)
      setData(postData);
      setLoading(false);
    }
    return fetchData()
    // fetchData();
    // eslint-disable-next-line
  }, []);
  return {data, loading};
}

export default useFetch
