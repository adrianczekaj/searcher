import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('http://localhost:5000/persons').then((res) => {
      setData(res.data);
    });
  }, []);

  return data;
};

export default useFetch;

// WORK
// import { useEffect, useState } from 'react';
// import axios from 'axios';
//
// const useFetch = () => {
//   const [data, setData] = useState();
//
//   useEffect(() => {
//     axios.get('http://localhost:5000/persons').then((res) => {
//       setData(res.data);
//     });
//   }, []);
//
//   return { data };
// };
//
// export default useFetch;
