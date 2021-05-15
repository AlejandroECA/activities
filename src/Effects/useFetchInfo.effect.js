
import { useState, useEffect} from 'react'
import { db } from '../firebase/firebase.utils'

const useFetchInfo = (InfoNumber) => {
    const [info, setInfo] = useState([]);
  
    const fetching = async () => {
      const infoSnapshot = await db.collection("Info").get();
      if (infoSnapshot) {
        try {
          const data = infoSnapshot.docs.map((doc) => doc.data()[InfoNumber]);
          setInfo(data);
        } catch {
          console.log("error");
        }
      }
      return info;
    };
  
    useEffect(() => {
      console.log(`Loading ${InfoNumber}`);
      fetching();
    }, []);
  
    console.log(info.length?`${InfoNumber} fetched`:`${InfoNumber} fetching start`)

    return info;
};

export default useFetchInfo