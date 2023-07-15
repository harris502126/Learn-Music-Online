import axios from 'axios';
import {useNavigate}from 'react-router-dom';
import React, {useState} from 'react'
import { AddBusinessRounded } from '@mui/icons-material';
import {  Typography, Button, TextField,Grid, Paper, Avatar} from '@mui/material';
import {  teal } from '@mui/material/colors';

const url = 'http://localhost:3000'

function  Login() {
const [email,setEmail] = useState('');
 const [password,setPassword] = useState('');
 const [name,setName] = useState('');
 const handleNamechange = (e)=>
  {
    setName(e.target.value);}
 const handleEmailchange = (e)=>
 {
   setEmail(e.target.value);
 };
 const handlePasswordchange = (e)=>
 {
   setPassword(e.target.value);
 };
 const navigate = useNavigate()
 const handleSubmit= (e)=>
  {
    e.preventDefault();
    const userData = {
    name,
		email,
		password,
	  };
axios.post(`${url}/api/stud/login`,userData)
.then((response) => {
  const data = response.data
  console.log(data)
  const name =data[0].name 
  const level =data[0].level 
  navigate('/Home', {state:{name,level}});
})
      .catch((error) => {
        console.error('Error:', error);
      });
  };const paperStyle={padding:'30px 20px' , width:'30vw', margin:'15vh auto'}
  const headerStyle={margin:'0'}
  
    return (
        
      <Grid >
          
      <Paper  elevation = {20} style={paperStyle}>
        <Grid align='center'>
        
        <Avatar sx={{bgcolor:teal[500]}}>
          <AddBusinessRounded/>
        </Avatar>
        <h2 style={headerStyle}>Log-in</h2>
        <Typography variant='caption'>Log in to your account</Typography>
        </Grid>
        
    <form action="" onSubmit={handleSubmit}>
      <Grid align='center'>
        <TextField type="text" name="name" value={name} placeholder="UserName"onChange={handleNamechange} sx={{width:'25vw'}} required/><br/><br/>
        <TextField type="email" name="email"  value={email}placeholder="Email" onChange={handleEmailchange} sx={{width:'25vw'}}required/><br/><br/>
        <TextField type="password" name="password" value={password} placeholder="Password" onChange={handlePasswordchange} sx={{width:'25vw'}}required/><br/><br/>
        
        <Button  variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                  
      </Grid> 
  <Grid align='center'><Typography variant='caption'>Don't have an account?</Typography>
                  
                  <a href="/signin">
                    <Button color='success'>Sign-Up</Button></a></Grid>
    </form>
    
 </Paper>
</Grid>
    );
  }

  
  export default Login;