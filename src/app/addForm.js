"use client";
import { useState } from "react"
import Tasks from "./data/tasks";
import MyForm from "./myform";

export default function AddForm(props){
    const {items, setItem} = props
    const [show, setShow] = useState(false)
    
    const closeForm = ()=>{
        return setShow(false)
    }
    return(
        <>
        <button  className=" px-1 md:px-5 h-10 text-lg rounded-lg border text-white bg-lime-600 border-lime-600 transition duration-300 hover:bg-lime-500" onClick={()=>{setShow(true)}}>Add Task</button>
        {show && <MyForm closeForm={closeForm} items={items} setItem={setItem}/>}
        </>
    )
}