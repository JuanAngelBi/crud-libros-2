export default function Fila(props) {
    const { id, nombre, autor, editorial } = props
    return (
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{autor}</td>
            <td>{editorial}</td>
        </tr>
    )
}