import React, {useState} from 'react'
import { db } from "../services/firebase";
import { dataBaseContext } from "./context";
import { collection, doc, getDocs, setDoc, updateDoc, deleteDoc } from "firebase/firestore";

export default function FirestoreContext(props) {
    const {children} = props

    const [libros, setLibros] = useState([])

    //Acumulador para id
    const incrementalCount = async() =>{
        let count = 0
        const lstDocs =  await getDocs(collection(db,"libros"))
        lstDocs.forEach((i)=>{
            if (count < parseInt(i.id)){
                count =parseInt(i.id)
            }
        })
        return count + 1
    }

    //Funcion para obtener todos los documentos
    const getBooks = async () => {
        const snap = await getDocs(collection(db, "libros"))
        const lstLibros = []
        snap.forEach((i) => {
            lstLibros.push({...i.data(), id: i.id})
        })
        setLibros(lstLibros)
    }

    //Funcion para agregar/crear libro
    const createBook = async(name, autor, editorial) => {
        await setDoc(doc(db, "libros", (await incrementalCount()).toString()),{
            "nombre": name,
            "autor": autor,
            "editorial": editorial
        })
    }

    //Funcion para actualizar libro
    const updateBook = async(id, name, autor, editorial) => await updateDoc(doc(db, "libros", id),{
        nombre: name,
        autor: autor,
        editorial: editorial
    })

    //Funcion para borrar libro
    const deleteBook = async(id) => {
        await deleteDoc(doc(db, "libros", id))
    }

  return (
    <dataBaseContext.Provider value={{getBooks, lstLibros:libros, createBook, updateBook, deleteBook, incrementalCount}}>{children}</dataBaseContext.Provider>
  )
}