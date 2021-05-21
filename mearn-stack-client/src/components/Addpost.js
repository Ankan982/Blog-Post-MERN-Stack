import React, {useState} from 'react';
import './Showrecords.css';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';

function Addpost() {

    const [title, setTitle] = useState('');
    const [messages, setMessage] =useState('');



    const addPost=() =>{
        
        axios.post('http://localhost:4000/postMessages/', {
          title: title,
          message: messages
        })
        
        

    }


    return (
          
        <div >
             <h1>Add Post 🧾</h1>

           <form className="input__field">
             <TextField id="standard-basic" onChange={(event)=>{
                 setTitle(event.target.value);
             }} label="Enter title"  
             color="primary" />

             <TextField id="standard-basic" onChange={(event)=>{
                 setMessage(event.target.value);}} 
                   label="Enter description" 
                   color="primary" />
             <Button onClick={addPost} variant="contained" color="primary" disableElevation> Add Post </Button>
            </form>
        </div>
    )
}

export default Addpost
