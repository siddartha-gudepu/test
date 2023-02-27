import { Modal, useMantineTheme } from '@mantine/core';
import "./ProfileModel.css";

function ProfileModel({modelOpened,setModelOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modelOpened}
      onClose={()=>setModelOpened(false)}
    >
    <form className='infoForm'>
      <h3>your info</h3>
      <div>
        <input type="text" className="infoInput" name="FirstName" placeholder="First Name"/>
        <input type="text" className="infoInput" name="LastName" placeholder="Last Name"/>
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
      <button className="button infoButton">Update</button>
    </form>
    </Modal>
  );
}

export default ProfileModel
