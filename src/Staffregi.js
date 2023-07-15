import axios from 'axios';
import {useNavigate}from 'react-router-dom';
import './login.css'
import React, {useState} from 'react'
import { TextField , Button,Paper,Grid,Avatar,Typography} from '@mui/material';
import { AddBusinessRounded } from '@mui/icons-material';
import {  blueGrey, teal } from '@mui/material/colors';

const url = 'http://localhost:3000'
function  Staffregi() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [cnfmpass,setCnfmpass] = useState('');
  const [subject,setSubject] = useState('')
  const paperStyle={padding:'30px 20px' , width:'30vw', margin:'15vh auto'}
  const headerStyle={margin:'0'}
  const handleNamechange = (e)=>
  {
    setName(e.target.value);
  };
  const handleSubjectchange = (e)=>
  {
    setSubject(e.target.value);
  };
  const handleEmailchange = (e)=>
  {
    setEmail(e.target.value);
  };
  const handlePasswordchange = (e)=>
  {
    setPassword(e.target.value);
  };
  const handleCnfmpasschange = (e)=>
  {
    setCnfmpass(e.target.value);
   
  };
  
  const navigate = useNavigate()

  const handleSubmit= (e)=>
  {
    e.preventDefault();
    if(password!==cnfmpass){
      alert('password and confirm password must be equal');
      setCnfmpass('');
      
      }
      else{
        
    const userData = {
      name,
      email,
      subject,
      password
      
    };
    console.log('con',userData)
axios.post(`${url}/api/staff/regi`,userData)
.then((response) => {
  console.log(response.data);
  // setLabel('Registered Successfully')
  navigate('/StaffLog');
})
      .catch((error) => {
        console.error('Error:', error);
      });
      setEmail('');
      setCnfmpass('');
      setName('');
      setPassword('');
      setSubject('');
      }

    
  };
    return (
        
      <Grid >
          
      <Paper  elevation = {20} style={paperStyle}>
        <Grid align='center'>
        
        <Avatar sx={{bgcolor:blueGrey[500]}}>
        <AddBusinessRounded/>
        </Avatar>
        <h2 style={headerStyle}>Sign-Up</h2>
        <Typography variant='caption'>Create an account</Typography>
        </Grid>
        
    <form action="" onSubmit={handleSubmit}>
      <Grid align='center'>
        <TextField type="text" name="name" value={name} placeholder="StaffName"onChange={handleNamechange} sx={{width:'25vw'}} required/><br/><br/>
        <TextField type="email" name="email"  value={email}placeholder="Staff-Email" onChange={handleEmailchange} sx={{width:'25vw'}}required/><br/><br/>
        <TextField type="text" name="subject" value={subject} placeholder="Subject"onChange={handleSubjectchange} sx={{width:'25vw'}}required/><br/><br/>
        <TextField type="password" name="password" value={password} placeholder="Password" onChange={handlePasswordchange} sx={{width:'25vw'}}required/><br/><br/>
        <TextField type="password" name="cnpass" value={cnfmpass} placeholder="Confirm Password"onChange={handleCnfmpasschange} sx={{width:'25vw'}} required/><br/><br/>
        <Button  variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                  
      </Grid> 
  <Grid align='center'><Typography variant='caption'>Already have an account?</Typography>
                  
                  <a href="/login">
                    <Button color='success'>Log-In</Button></a></Grid>
    </form>
    
 </Paper>
</Grid>
    );
  }

  
  export default Staffregi;

 