import React, { useState } from "react";
import Card from "./Card";
import "./Form.css";

const Form = () => {
const [inputValue, setInputValue] = useState({
    nombre: "",
    raza: "",
});

//UseState
const [show, setShow] = useState(false);
const [err, setErr] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    if (
    inputValue.nombre.length >= 3 &&
    inputValue.raza.length >= 6 &&
    inputValue.nombre.indexOf(" ") !== 0
    ) {
    setShow(true);
    setErr(false);
    } else {
    setErr(true);
    setShow(false);
    }
};

return (
    <div className="main-container">
    <form className="form-container" onSubmit={handleSubmit}>
        <label>Ingresa el nombre de tu personaje:</label>
        <input
        className="data-input"
        type="text"
        onChange={(e) =>
            setInputValue({ ...inputValue, nombre: e.target.value })
        }
        />
        <label>Ingresa la raza de tu personaje:</label>
        <input
        className="data-input"
        type="text"
        onChange={(e) =>
            setInputValue({ ...inputValue, raza: e.target.value })
        }
        />
        <button type="submit">Crear</button>
    </form>

    {show && (
        <Card>
        <div className="data">
            <h2>Jugador {inputValue.nombre}</h2>
            <p>La raza de tu personaje es:</p>
            <div className="raza_pj">{inputValue.raza}</div>
        </div>
        </Card>
    )}
    {err && <h2>Por favor chequea que la información sea correcta</h2>}
    </div>
);
};

export default Form;
