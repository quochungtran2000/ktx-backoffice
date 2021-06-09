import { useEffect, useState } from 'react';
import queryString from 'query-string'

export default function useFetchData(func, params = '', type) {
  const [query] = useState(!!type ? queryString.stringify(params) : params);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await func(query);
      setData(data);
      setLoading(false);
    }
    fetchData();
    return fetchData;
    // eslint-disable-next-line
  }, [])
  return [data, loading]
}
