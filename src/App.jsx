import {useState} from 'react';
import './App.css'

function App() {
    let [name, newName] = useState("Sofía");

    const data = () => {
        newName(name="Data")
    };
    const reyes = () => {
        newName(name="Reyes")
    };
    const soraya = () => {
        newName(name="Soraya")
    };


    return (
        <div>
        <h2>Teacher Name: {name}</h2>
        <ul>
            <li><button onClick={data}>Data</button></li>
            <li><button onClick={reyes}>Reyes</button></li>
            <li><button onClick={soraya}>Soraya</button></li>
        </ul>
        </div>
    );
}

export default App
