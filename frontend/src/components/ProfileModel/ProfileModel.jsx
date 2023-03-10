import { Modal, useMantineTheme } from '@mantine/core';
import "./ProfileModel.css";
const axios=require('axios');

function ProfileModel({modelOpened,setModelOpened}) {
  const theme = useMantineTheme();
  const changeProfile=async(e)=>{
    e.preventDefault()
    try{
      const response=await axios.post('/change',
        {firstname:e.target.firstName,lastName:e.target.lastName,WorksAT:e.target.WorksAT,livesIN:e.target.livesIN,Country:e.target.Country},
        {
          headers:{'Content-Type':'application/json'},
          withCredentials:true
        }
      ).then(function(response){
        console.log(response.data);
      })
    }catch(err){
      console.log(err);
    }
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
        <input type="text" className="infoInput" name="firstName" placeholder="First Name"/>
        <input type="text" className="infoInput" name="lastName" placeholder="Last Name"/>
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
