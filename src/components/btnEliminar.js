import { useState, useContext } from "react"
import context from "../context/context";

export default function ButtonEliminar() {
    const [book, setBook] = useState("");

    const {deleteBook, getBooks} = useContext(context)

    const handleChange = ({target:{name,value}}) => {
        setBook({...book, [name]:value})
    }

    const handleDelete = async(e) => {
        e.preventDefault()
        try {
            await deleteBook(book.id)
            getBooks()
        }   catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <button type="button" className="btn btn-primary">Eliminar</button>
        </>
    )
}