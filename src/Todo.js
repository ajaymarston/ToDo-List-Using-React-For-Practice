import {useState} from "react"
const Todo=()=>{
     const[list,setList]=useState([{id:1, activity:"apple"},{id:2, activity:"orange"}])
    const[newItem,setNewItem]=useState("")
    const handleDelete=(removeid)=>{
        var tempArr= list.filter(function(item){
            if(item.id===removeid){
                return false
            }
            else{
                return true
            }
        })
        setList(tempArr)
    }
    const handleChange=(event)=>{
        setNewItem(event.target.value)
    }
    const addElement=()=>{
        setList([...list,{id:list.length+1,activity:newItem}])
    }
    
    return(
         <div>
             <h1>To do List</h1>
        <input value={newItem} onChange={handleChange} ></input>
        <button onClick={addElement}>Add</button>
        <ul>
            {
            list.map(function(item)
            {
          return <li> {item.activity} <button onClick={()=>{handleDelete(item.id)}}>Delete</button> </li>
            })}
            </ul>
            </div>
    )
}
export default Todo;