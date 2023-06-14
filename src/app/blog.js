import { useState } from "react"
import Editor from "./editor"

export default function Blog(props){
    const {items, setItem, name} = props
    const [show, setShow] = useState(false)
    const closeEditor = ()=>{
        return setShow(false)
    }
    return(
        <>
            <button className=" text-lg rounded-lg border text-white bg-blue-600 border-blue-600 px-5 py-1 transition duration-300 hover:bg-blue-500" onClick={()=>{setShow(true)}}>Write</button>
            {show && <Editor items={items} setItem={setItem} name={name} closeEditor={closeEditor}/>}
        </>
    )
}