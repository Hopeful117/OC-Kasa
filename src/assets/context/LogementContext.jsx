import { createContext, useContext, useEffect, useState } from "react";

const LogementContext = createContext();

export function LogementProvider({children}){
    const [logements, setLogements]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch("/logements.json")
        .then(response=>response.json())
        .then(data=>{
            setLogements(data);
            setLoading(false);
        })
        .catch(error=>{
            setError(error.message);
            setLoading(false);
        })
    },[])
    return (<LogementContext.Provider value={{ logements, loading, error }}>
        {children}
      </LogementContext.Provider>
      )
}


export function UseLogements() {
    return useContext(LogementContext);
  }