"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Tasks from './data/tasks';
import AddForm from './addForm';
import Blog from './blog';


export default function Home() {
  const [items, setItem] = useState(Tasks)

  const filterItem = (categItem)=>{
    const updatedItems = Tasks.filter((currItem)=>{
      return currItem.category===categItem
    })
    console.log(updatedItems);
    setItem(updatedItems)
  }

  const removeByAttr = function(arr, attr, value){
    let i = arr.length;
    while(i--){
       if( arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ){ 

           arr.splice(i,1);

       }
    }
    return arr;
  }

  const removeTasks = (name)=>{
    const newitems = items.filter((item)=>item.title!==name)
    setItem(newitems)
    removeByAttr(Tasks,'title',name)
  }

  useEffect(()=>{
    setItem(Tasks)
  },[Tasks])
  return (
    <div className=' bg-black text-white min-h-screen'>
      <div className=' text-5xl font-extrabold text-center md:text-start p-10'>Categories</div>
      <div className=' flex flex-col items-center justify-center md:flex-row md:justify-around'>
        <div className='grid grid-cols-3 gap-6 p-5'>
          <button className=' md:w-22 px-4 py-1 text-xl bg-orange-500 rounded-lg transform transition duration-300 hover:bg-orange-600' onClick={()=>{setItem(Tasks)}}>All</button>
          <button className=' md:w-22 px-4 py-1 text-xl bg-orange-500 rounded-lg transform transition duration-300 hover:bg-orange-600' onClick={()=>{filterItem('Custom')}}>Custom</button>
          <button className=' md:w-22 px-4 py-1 text-xl bg-orange-500 rounded-lg transform transition duration-300 hover:bg-orange-600' onClick={()=>{filterItem('Mission')}}>Mission</button>
        </div>
        <AddForm items={items} setItem={setItem}/>
      </div>
      <div>
        <h2 className=' font-bold text-3xl text-center p-5'>Topics</h2>
        <div className=' flex flex-col divide-y divide-slate-700'>
          {
            items.map((item, index)=>{
              return(
                <div key={index} className=' flex flex-col gap-4 md:flex-row justify-between p-5 items-center'>
                  <div className=' flex flex-col gap-2'> 
                    <h3 className=' text-center font-bold text-xl'>{item.title}</h3>
                    <div className=' flex gap-5 justify-center items-center md:items-start md:justify-normal'>
                    {item.keywords.map((keyword,index)=>{
                      return(
                        <div key={index} className=' px-2 text-sky-800 text-lg bg-sky-200 border border-sky-500 rounded-lg'>
                          {keyword}
                        </div>
                      )
                    })}
                    </div>
                  </div>
                  <div className=' flex gap-5'>
                    <Blog items={items} setItem={setItem} name={item.title}/>
                    <button className=' text-lg rounded-lg bg-red-600 border-red-600 px-5 py-1 transition duration-300 hover:bg-red-500' onClick={()=>removeTasks(item.title)}>Delete</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
