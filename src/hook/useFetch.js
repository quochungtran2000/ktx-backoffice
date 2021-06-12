import  { useState, useEffect} from 'react'

const useFetch = (func, params) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const postData = await func(params)
    setData(postData);
    setLoading(false);
  }
  const reload = () => fetchData()
  useEffect(() => {
    setLoading(true);
    fetchData();
    return fetchData()
    // fetchData();
    // eslint-disable-next-line
  }, []);
  return {data, loading, reload};
}

export default useFetch
