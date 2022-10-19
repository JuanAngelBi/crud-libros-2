import { useContext, useEffect } from "react";
import context from "../context/context";
import Fila from "./ElementoTabla";

export default function Tabla() {
    const { getLibros, lstLibros } = useContext(context);

    useEffect(() => {
        getLibros()
        console.log("cargar");
    }, []);

    return (
        <div>
            <table className="w-100 table table-striped-columns">
                <thead className="text-center">
                    <tr>
                        <th className="text-center">id</th>
                        <th className="text-center">nombre</th>
                        <th className="text-center">autor</th>
                        <th className="text-center">editorial</th>
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