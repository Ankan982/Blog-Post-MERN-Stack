import React from 'react'
import './Showrecords.css';
import { ExpandMore } from '@material-ui/icons';
import {Accordion ,Button,AccordionSummary,AccordionDetails} from '@material-ui/core';
import axios from 'axios';
export default function Showrecords(props){

  const deletePost=(id)=>{
      axios.delete(`http://localhost:4000/postMessages/${id}`)
      //console.log(id)
  }


    const displayNotes = (props) =>{
       
        const {postValue} = props;

        if(postValue.length >0){
           return(

           postValue.map((note,key)=>{
               return(
                   <div>
                       
                    <Accordion className="posts">
                        <AccordionSummary
                        expandIcon={<ExpandMore />}
                        >
                        <h2 className="post__title">✔  {note.title}</h2>
                        </AccordionSummary>
                        <AccordionDetails className="post__card">
                        <p>{note.message}</p>
                        <Button onClick={()=> deletePost(note._id)} variant="contained" size="medium"  color="secondary">Delete</Button>
                        </AccordionDetails>
                    </Accordion>

                    
                   
                  </div>
               )
           })

           )
        }else{
            return (<h3>No posts</h3>)
        }

    }

  return(
      <>
         {displayNotes(props)}

      </>
  )





}
