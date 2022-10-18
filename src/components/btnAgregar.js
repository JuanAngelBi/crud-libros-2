import { useState, useContext } from "react";
import context from "../context/context";

export default function BottonAgregar() {
    const {createBook, getBooks} = useContext(context)

    const[libro, setLibro] = useState({
        nombre: "",
        autor: "",
        editorial: ""
    });

    const handleChange = ({target:{name,value}}) => setLibro({...libro, [name]:value})

    const handleCreate = async(e) => {
        e.preventDefault()
        try {
            await createBook(libro.nombre, libro.autor, libro.editorial)
            getBooks()
        }   catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <button type="button" className="btn btn-secondary">Agregar</button>
        </>
    )
}