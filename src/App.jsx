// ----------- EJERCICIO RESUELTO

// import {useState} from 'react';
// import './App.css'

// function App() {
//     let [name, setName] = useState("Sofía");

//     const data = () => {
//         setName(name="Data")
//     };
//     const reyes = () => {
//         setName(name="Reyes")
//     };
//     const soraya = () => {
//         setName(name="Soraya")
//     };

  // más optimizado y escalable (más correcto):
  //  const handleChangeName = (teacherName) => {
    //                setName(teacherName)}

//     return (
//         <div>
//         <h2>Teacher Name: {name}</h2>
//         <ul>
//             <li><button onClick={data}>Data</button></li> // <li onClick={()=>setName("Data")}>Data</li> // esta función anónima es obligatoria porque si ponemos directamente la función React tira primero las funciones y daría error. 
//             <li><button onClick={reyes}>Reyes</button></li>                                           // ¿por qué funciona poniendo las funciones data, reyes y soraya? porque da error solo con funciones con parámetros
//             <li><button onClick={soraya}>Soraya</button></li>
//         </ul>
//         </div>
//     );
// }

// export default App

// ------------- BONUS

import {useState} from 'react';
import './App.css'

const App = () => {
    const [name, setName] = useState("Sofía");
    const [newName, setNewName] = useState("");
  
    const changeName = (e) => {
      if (newName) {
        setName(newName); // para actualizar el nombre del profesor
        setNewName(""); // para dejar vacío el nuevo nombre
      }
    };
  
    return (
      <div>
        <h2>Teacher Name: {name}</h2>
        <form onSubmit={(e) => { 
          e.preventDefault(); // sin esta línea se recarga la página y name se vuelve "Sofía"
          changeName(); // llama a la función al presionar el botón submit
        }}>
          <input 
            type="text" 
            value={newName} 
            onChange={(e) => setNewName(e.target.value)} // cada cambio que hace el usuario en el campo de entrada se actualiza newName con el nuevo Valor (se ve en el console.log)
            placeholder="add a name" 
            />
          <button type="submit">Add</button>
        </form>
            {console.log(newName)}
      </div>
    );
  };

export default App
