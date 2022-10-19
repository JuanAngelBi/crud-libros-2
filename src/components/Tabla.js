import { useContext, useEffect } from "react";
import context from "../context/context";
import Fila from "./ElementoTabla";

export default function Tabla() {
    const { getBooks, lstLibros } = useContext(context);

    useEffect(() => {
        getBooks()
        console.log("cargar");
    }, []);

    return (
        <div>
            <table className="w-100 table table-striped-columns">
                <thead className="text-center">
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Nombre</th>
                        <th className="text-center">Autor</th>
                        <th className="text-center">Editorial</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        lstLibros.map(item =>
                        (
                            <Fila {...item} key={item.id}></Fila>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}