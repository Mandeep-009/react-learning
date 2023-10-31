import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import {useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [form,setForm] = useState({});
  const [data,setData] = useState([]);

  function addData(){
    setData([...data,form]);
    setForm({});
  }
  function removeItem(index){
    const arr=data;
    arr.splice(index,1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <Header />
      <div className='form'>
        <Stack direction="row" spacing={2}>
          <TextField value={form.name} onChange={(event)=>setForm({...form,name:event.target.value})} id="outlined-basic" label="name" variant="outlined" />
          <TextField value={form.email} onChange={(event)=>setForm({...form,email:event.target.value})} id="outlined-basic" label="email" variant="outlined" />
          <Button onClick={addData} variant="contained" color='success'><AddIcon /></Button>
        </Stack>
      </div>
      <div className='data'>
        <div className='data_val'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map( (d,index)=>{
        
        return (<div key={index} className='data_val'>
              <h4>{d.name}</h4>
              <h4>{d.email}</h4>
              <button onClick={()=>removeItem(index)} style={{backgroundColor: 'transparent',border: 'none',cursor:'pointer' }}><DeleteIcon /></button>
            </div>)
        })}
      </div>
      
    </div>
  );
}

export default App;
