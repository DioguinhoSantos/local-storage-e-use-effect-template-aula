import React, { useState } from "react";
import { Form } from "./style";

export default function FormLocal() {
    const [nome, setNome] = useState("");
    // const [tarefa, setTarefa] = useState("");
    const [listaTarefa, setListaTarefa] = useState([]);

    const recebeNome = (e) => {
        setNome(e.target.value);
    }

    const guardaNome = (e) => {
        localStorage.setItem('nome', nome);
    }

    const pegaNome = (e) => {
        localStorage.getItem('nome');
        alert(localStorage.getItem('nome'));
    }

    return (
        <Form>
            <h3>Prática 1</h3>
            <label htmlFor="nome">
                nome:
                <input name="nome" id="nome" value={nome} onChange={recebeNome} />
            </label>
            <div>
                <button onClick={guardaNome}>Guardar Dados</button>
                <button onClick={pegaNome}>Acessar Dados</button>
            </div>
            <br />
            <h3>Prática 2</h3>
            <label htmlFor="tarefa">
                tarefa:
                <input name="tarefa" id="tarefa" />
            </label>
            <button type="button">adicionar Tarefa</button>
            <ul>
                {listaTarefa.map((task) => {
                    return <li key={task}>{task}</li>;
                })}
            </ul>
            <div>
                <button>Guardar tarefa</button>
                <button>Acessar tarefa</button>
            </div>
        </Form>
    );
}