import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { useEffect, useState } from 'react';
import React from 'react';
import Tasks from './data/tasks';

export default function Editor(props){
    const {items, setItem, name, closeEditor} = props
    let placeholder = ''
    items.map((item)=>{
        if(item.title === name){
            placeholder = item.content
        }
    })
    const { quill, quillRef } = useQuill({placeholder});
    const {value, setValue} = useState('');

    const handleClick = ()=>{
        closeEditor()
    }
    
    React.useEffect(() => {
        console.log('ok');
        if (quill) {
          quill.on('text-change', () => {
            
            console.log(quillRef.current.firstChild.innerHTML);
            setValue(quillRef.current.firstChild.innerHTML)
          });
        }
      }, [quill]);
      console.log(value, 'this is quill');

    return(
        <div className=" fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
            <div className=" bg-white px-5 rounded h-{300}">
                <h2 className=' text-black text-2xl text-center font-extrabold mt-2'>Blog</h2>
                <div className=' p-5 w-full mb-8' style={{ width: 500, height: 300 }}>
                    <div ref={quillRef} />
                </div>
                <div className=' flex justify-center items-center'>
                    <button className=' mt-8 mb-4 px-5 h-10 text-lg rounded-lg border text-white bg-lime-600 border-lime-600 transition duration-300 hover:bg-lime-500' onClick={handleClick}>Generate</button>
                </div>
            </div>
        </div>
    )
}