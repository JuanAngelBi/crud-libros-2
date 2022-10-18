import { useState, useContext } from "react";
import context from "../context/context";

export default function ButtonActualizar() {
    const [updateBook, getBooks] = useContext(context)

    const[book, setBook] = useState({
        id: "",
        nombre: "",
        autor: "",
        editorial: ""
    });

    const handleChange = ({target:{name,value}}) => setBook({...book, [name]:value})

    const handleActualizar = async(e) => {
        e.preventDefault()
        try {
            await updateBook(book.id, book.nombre, book.autor, book.editorial)
            getBooks()
        }   catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <button type="button" className="btn btn-primary">Actualizar</button>
        </>
    )
}