import { Link, NavLink } from "react-router-dom"


export default function Nav(){

    return (
        <>
        
            <nav>
                <h1>Wardens of Westeros</h1>

                <ul>
                    <li><NavLink to="/">Home </NavLink></li>
                    <li><NavLink to="/characters">Characters </NavLink></li>
                </ul>

            </nav>
        
        </>
    )
}