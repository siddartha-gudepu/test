import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import "./ProfileModel.css";
import axios from "axios";

function ProfileModel({modelOpened,setModelOpened}) {
  const theme = useMantineTheme();
  const [data,setdata]=useState({firstname:"",lastname:"",WorksAT:"",Country:"",profileImg:"",livesIN:""});

  const handlechange=(e)=>{
      setdata({...data,[e.target.name]:e.target.value})
  }
  const changeProfile=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/profilemodel",{data}).then(function(response){
      console.log(response.data);
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
    <form className='infoForm' onSubmit={changeProfile}>
      <h3>your info</h3>
      <div>
        <input type="text" className="infoInput" name="firstname" placeholder="First Name"/>
        <input type="text" className="infoInput" name="lastname" placeholder="Last Name"/>
      </div>
      <div><input type="text" className="infoInput" name="WorksAT" placeholder="Works at"/></div>
      <div>
        <input type="text" className="infoInput" name="livesIN" placeholder="lives in"/>
        <input type="text" className="infoInput" name="Country" placeholder="Country"/>
      </div>
      <div>
        Profile Image
        <input type="file" name='profileImg' />

      </div>
      <button className="button infoButton" type="submit">Update</button>
    </form>
    </Modal>
  );
}

export default ProfileModel
