import { Modal, useMantineTheme } from '@mantine/core';
import "./ShareModel.css";
import axios from 'axios';
import { useState } from 'react';

function ShareModel({modelOpened,setModelOpened}) {
  const theme = useMantineTheme();

  const handleSubmit=(evt)=>{
    evt.preventDefault();

    const question = evt.target.question.value ;
    const topic =evt.target.topic.value;
    const data={question,topic};
    console.log(data)
    axios.post("http://localhost:5000/post/",{data,userId:"641ff2f1be3a463df8fd9a53"}).then(function(response){
      console.log(response)
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modelOpened}
      onClose={()=>setModelOpened(false)}
    >
    <form className='infoForm' onSubmit={handleSubmit}>
      <h3>Ask question</h3>
      <textarea className='infoInput' rows='4' cols="50" placeholder="ask your question..." name="question"></textarea>
      <select className='topic' name="topic">
        <option value="college">college</option>
        <option value="coding">coding</option>
        <option value="hostel">hostel</option>
        <option value="events">events</option>
      </select>
      <button className="button ask-Button" type="submit">Ask</button>
    </form>
    </Modal>
  );
}

export default ShareModel
