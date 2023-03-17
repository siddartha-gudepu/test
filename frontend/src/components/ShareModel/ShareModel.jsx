import { Modal, useMantineTheme } from '@mantine/core';
import "./ShareModel.css";
import axios from 'axios';

function ShareModel({modelOpened,setModelOpened}) {
  const theme = useMantineTheme();
  const handlePost=async(e)=>{
    try{
      await axios.put("/post",{ques:e.target.ques,cato:e.target.cato})
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
    <form className='infoForm' onSubmit={handlePost}>
      <h3>Ask question</h3>
      <div>
        <textarea className='infoInput' rows='4' cols="50" placeholder="ask your question..." name="ques"></textarea>
      </div>
      <select className='topic' name="cato">
        <option value="college">college</option>
        <option value="coding">coding</option>
        <option value="hostel">hostel</option>
        <option value="events">events</option>
      </select>

      <button className="button ask-Button">Ask</button>
    </form>
    </Modal>
  );
}

export default ShareModel
