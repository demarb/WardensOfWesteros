import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

export default function NotFound(){

    //useNavigateHook
    const navigate = useNavigate()
    
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/") 
        }, 5000)
    }, [])
    
    return (
        <>
            <Nav/>
            <section className="notFound">
                <h1>PAGE NOT FOUND</h1>
            </section>
        </>
    
    
    )

}