import  { useState, useEffect} from 'react'
// import queryString from 'query-string'
// import useQueryLocation from './useQueryLocation'

const useFetchQuery = (func, params = {}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [reload, setReload] = useState(false)
  // const {query} = useQueryLocation()
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      // const queryStr = queryString.stringify(Object.keys(params).length === 0 ? query  : params);
      const postData = await func(params)
      setData(postData);
      setLoading(false);
    }
    fetchData();
    // eslint-disable-next-line
  }, [reload]);
  return {data, loading, reload: () => setReload(!reload)};
}

export default useFetchQuery
