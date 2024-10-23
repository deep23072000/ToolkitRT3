import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { getData } from "./apiSlice";

const Mycomponent =()=>{
    let dispatch = useDispatch();
    let [pr,setPr] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/product').
        then((res)=>setPr(res.data))
    },[])

    return(
        <>
        {
            
        }
          <button onClick={()=>{dispatch(getData(pr))}}>click me</button>
        </>
    )
}

export default Mycomponent

