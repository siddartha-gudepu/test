import { Modal, useMantineTheme } from '@mantine/core';
import "./ShareModel.css";
const axios=require('axios');

function ShareModel({modelOpened,setModelOpened}) {
  const [data,setdata]=useState({ques:"",cat:""})
  const handlechange=(e)=>{
    setdata({...data,[e.target.value]:e.target.value})
  }
  const theme = useMantineTheme();
  const ask=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/ask",{data}).then(function(response){
      console.log('response.data')
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
    <form className='infoForm' onSubmit={ask}>
      <h3>Ask question</h3>
      <div>
        <textarea className='infoInput' rows='4' cols="50" placeholder="ask your question..." name='ques'></textarea>
      </div>
      <select className='topic' name="cat">
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
