import Tasks from "./data/tasks"
import { useState } from "react"
const MyForm = (props)=>{
    const {items, setItem, closeForm} = props
    const [details, updateDetails] = useState({})
    const handleTitle = (event)=>{
        updateDetails({
            ...details,
            title : event.target.value,
            category : "Custom",
            content:""
        })
    }
    const handleKey =(event)=>{
        updateDetails({
            ...details,
            keywords : [event.target.value]
        })
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        setItem([...items, details])
        Tasks.push(details)
        console.log(items);
        closeForm()
    }
    
    return(
        <div className=" fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className=" bg-gray-900 p-4 rounded">
                <form action="" onSubmit={handleSubmit}>
                    <div className=" flex flex-col justify-center items-center p-4">
                        <div className=" p-2 flex flex-col gap-2">
                            <label>Topic Name:</label>
                            <input name="title" type="text" onChange={handleTitle} className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none"/>
                        </div>
                        <div className=" p-2 flex flex-col gap-2">
                            <label>Keyword:</label>
                            <input name="keywords" type="text" onChange={handleKey} className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none" />
                        </div>
                    </div>
                    <div className=" flex justify-center items-center" >
                        <button className=" px-5 h-10 text-lg rounded-lg border text-white bg-lime-600 border-lime-600 transition duration-300 hover:bg-lime-500" type="submit">Add Task</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default MyForm