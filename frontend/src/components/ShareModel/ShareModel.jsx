import { Modal, useMantineTheme } from '@mantine/core';
import "./ShareModel.css";

function ShareModel({modelOpened,setModelOpened}) {
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
      <h3>Ask question</h3>
      <div>
        <textarea className='infoInput' rows='4' cols="50" placeholder="ask your question..."></textarea>
      </div>
      <select className='topic'>
        <option>college</option>
        <option>coding</option>
        <option>hostel</option>
        <option>events</option>
      </select>

      <button className="button ask-Button">Ask</button>
    </form>
    </Modal>
  );
}

export default ShareModel
