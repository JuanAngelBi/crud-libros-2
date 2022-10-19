import { useState, useContext } from "react";
import context from "../context/context";

export default function ButtonActualizar() {

    const { updateBook, getBooks } = useContext(context)

    const [book, setBook] = useState({
        id: "",
        nombre: "",
        autor: "",
        editorial: ""
    });

    const handleChange = ({ target: { name, value } }) => setBook({ ...book, [name]: value })

    const handleActualizar = async (e) => {
        e.preventDefault()
        try {
            await updateBook(book.id, book.nombre, book.autor, book.editorial)
            getBooks()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <button type="button" className="btn btn-warning">Actualizar</button>
            <div className="modal fade" id="exampleModalActualizar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Actualizar libro</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="text-center my-5">
                                <div className="form-signin w-25 m-auto">
                                    <form onSubmit={handleActualizar}>
                                        <input className="form-control my-1" name="id" onChange={handleChange} placeholder="id"></input>
                                        <input className="form-control my-1" name="nombre" onChange={handleChange} placeholder="nombre"></input>
                                        <input className="form-control my-1" name="autor" onChange={handleChange} placeholder="autor"></input>
                                        <input className="form-control my-1" name="editorial" onChange={handleChange} placeholder="editorial"></input>
                                        <button className="w-100 btn btn-lg btn-primary" type="submit" >Actualizar libro</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Guardar cambios</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}