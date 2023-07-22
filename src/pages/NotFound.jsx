import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function NotFound(){

    //useNavigateHook
    const navigate = useNavigate()
    
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/") 
        },3000)
    }, [])
    
    return <h1>Page Not Found</h1>

}