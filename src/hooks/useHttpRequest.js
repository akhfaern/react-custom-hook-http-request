import {useState, useEffect} from "react";
import axios from "axios";

function useHttpRequest(url){
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadData = () => {
    setLoading(true);
    axios.get(url).then((response) => {
      console.log(response.data);
      setData(response.data)
    }).catch((error) => {
      setError(error);
    }).finally(() => {
      setLoading(false);
    })
  }

  useEffect(() => {
    loadData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const refresh = () => {
    loadData();
  }
  
  return {data, error, loading, refresh}; 
}

export default useHttpRequest;
