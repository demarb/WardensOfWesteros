import { Routes, Route } from "react-router-dom"
import Characters from "../pages/Characters"
import CharacterDetails from "../pages/CharacterDetails"

export function CharactersRoutes(){
    
    
    return (
        <>
            <Routes>
            {/* <Route element={ <BookLayout /> } > */}
                <Route index element={ <Characters /> }/>
                <Route path=":id" element={ <CharacterDetails /> }/>
            {/* </Route>  */}
            </Routes>
        </>
        )
}