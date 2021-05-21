import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Showrecords from './components/Showrecords';
import Addpost from './components/Addpost';


function App() {

  const [post, setPost] = useState('')

  useEffect(()=>{
    getAllMessage();
  }, []);
  

    const getAllMessage= () =>{
      axios.get('http://localhost:4000/postMessages')
      .then((response)=>{
         
        const  allmessage = response.data
        setPost(allmessage)
        console.log(allmessage)
         
      })
      .catch(error=> console.error(`Error: ${error}`))
    }

  return (
          <div className="App">
            <h1> 📢MERN Stack Build 📢</h1>
            <Showrecords postValue={post}  />
       
            <Addpost />

          </div>
          
          

  );
}

export default App;
