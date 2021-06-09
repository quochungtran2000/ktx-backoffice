import { useLocation } from "react-router-dom";
import { useState, useEffect} from 'react'
import queryString from "query-string";

export default function useQueryLocation() {
  const location = useLocation();
  const [query, setQuery] = useState({});

  useEffect(() => {
    const obj = queryString.parse(location?.search); 
    setQuery(obj)
  }, [location])
  
  return { query, location };
}
