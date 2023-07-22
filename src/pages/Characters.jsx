import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

export default function Characters(){

    //States
    const [charactersData, setCharactersData] = useState([])

    //Effects
    useEffect(()=>{
        const apiCall = async()=>{
            const res = await fetch("https://thronesapi.com/api/v2/Characters")
            const res_json = await res.json()
            setCharactersData(res_json)
            console.log(charactersData)
        }

        apiCall();
        
    }, [])
    
    const navigate = useNavigate()

    
    //Function
        function clickCharacter(id){
            console.log(`ID CLICKED WAS ${id}`)
            
            navigate(`/characters/${id}`)
        }

        

    //Renders
    const charactersRender = charactersData.map((character)=>{
        return (
            <div key={character.id} className="characters-grid-item" onClick={()=>clickCharacter(character.id)}>
                {/* <img onClick={clickCharacter} src={character.imageUrl}></img> */}
                <img  src={character.imageUrl}></img>
                {/* <button>More</button> */}
            </div>
        )
    })

    

    return (
        <>
            <Nav/>
            <section className="characters-section">
                {charactersRender}
            </section>
            
        </>
        
    )
}