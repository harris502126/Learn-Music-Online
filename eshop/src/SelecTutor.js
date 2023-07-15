import { Grid, Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Button } from "@mui/material";
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useNavigate}from 'react-router-dom';
import { useLocation } from "react-router-dom";
import React, {useState} from 'react'
import Image from './home-banner-image.svg'

const url = 'http://localhost:3000'

function SelectTutor(){
    const navigate = useNavigate()
    const location = useLocation()
    const [selection,setSelection] = useState('')
    const data = location.state.userData;
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const level= data.level
    console.log('naanthaan',data)
    const handleoneclick=()=>
    {
        setSelection('1')
        const userData={
            name,
            email,
            password,
            level,
            selection
        }

        
        
axios.post(`${url}/api/tutor/regi`,userData)
.then((response) => {
  console.log(response.data);
  // setLabel('Registered Successfully')
  navigate('/login');
})
      .catch((error) => {
        console.error('Error:', error);
      });
      
      }
// axios.get(`${url}/api/tutor`)
// .then((response)=>{
//     console.log(response);

// })
//     .catch((error)=>{
//         console.error('ERROR',error)
//     })
    
    const handletwoclick=()=>
    {
        setSelection('2')
    }
    const handlethreeclick=()=>
    {
        setSelection('3')
    }
    const handlefourclick=()=>
    {
        setSelection('4')
    }
    return(
        <>
        {/* <div className="card">
      <div className="card-body">
        <h3 className="card-title">{tutor_name}</h3>
        <p className="card-text">Age: {age}</p>
        <p className="card-text">Course: {course}</p>
        <p className="card-text">Qualifications: {qualifications}</p>
        <p className="card-text">Stars: {stars}</p>
      </div>
    </div> */}
        <Grid align='center'>


            
            <Paper sx={{width:'70vw',height:'90vh',bgcolor:grey[200]}} elevation={20}>
                <Grid align='center'sx={{marginTop:'10vh'}}>
                    <Paper sx={{width:'50vw',height:'70vh'}} elevation={10}>
                        <Typography variant="h3">TUTOR ONE</Typography>

<Grid align='left' paddingTop={10}>
    <Typography variant='h4'>Name         :Harris</Typography>
    <Typography variant='h4'>Age          :19</Typography>
    <Typography variant='h4'>Course       :Piano</Typography>
    <Typography variant='h4'>Qualification:B.Tech</Typography>
    <Typography variant='h4'>Rewards      :*******</Typography>
</Grid>
<Button onClick={handleoneclick}>Select</Button>

                    </Paper>
                </Grid>
            </Paper>



            <Paper sx={{width:'70vw',height:'90vh',bgcolor:grey[200]}} elevation={20}>
                <Grid align='center'sx={{marginTop:'10vh'}}>
                    <Paper sx={{width:'50vw',height:'70vh'}} elevation={10}>
                    <Typography variant="h3">TUTOR TWO</Typography> 
                    <Grid align='left' paddingTop={10}>
    <Typography variant='h4'>Name         :Harris</Typography>
    <Typography variant='h4'>Age          :19</Typography>
    <Typography variant='h4'>Course       :Piano</Typography>
    <Typography variant='h4'>Qualification:B.Tech</Typography>
    <Typography variant='h4'>Rewards      :*******</Typography>
</Grid>
<Button onClick={handletwoclick}>Select</Button>
                    </Paper>
                </Grid>
            </Paper>



            <Paper sx={{width:'70vw',height:'90vh',bgcolor:grey[200]}} elevation={20}>
                <Grid align='center'sx={{marginTop:'10vh'}}>
                    <Paper sx={{width:'50vw',height:'70vh'}} elevation={10}>
                     <Typography variant="h3">TUTOR THRE</Typography>
                     <Grid align='left' paddingTop={10}>
    <Typography variant='h4'>Name         :Harris</Typography>
    <Typography variant='h4'>Age          :19</Typography>
    <Typography variant='h4'>Course       :Piano</Typography>
    <Typography variant='h4'>Qualification:B.Tech</Typography>
    <Typography variant='h4'>Rewards      :*******</Typography>
</Grid>
                     <Button onClick={handlethreeclick}>Select</Button>

                    </Paper>
                </Grid>
            </Paper>




            <Paper sx={{width:'70vw',height:'90vh',bgcolor:grey[200]}} elevation={20}>
                <Grid align='center'sx={{marginTop:'10vh'}}>
                    <Paper sx={{width:'50vw',height:'70vh'}} elevation={10}>
                      <Typography variant="h3">TUTOR FOUR</Typography>
                      <Grid align='left' paddingTop={10}>
    <Typography variant='h4'>Name         :Harris</Typography>
    <Typography variant='h4'>Age          :19</Typography>
    <Typography variant='h4'>Course       :Piano</Typography>
    <Typography variant='h4'>Qualification:B.Tech</Typography>
    <Typography variant='h4'>Rewards      :*******</Typography>
</Grid>
                      <Button onClick={handlefourclick}>Select</Button>

                    </Paper>
                </Grid>
            </Paper>


        </Grid>
        </>
    )
}
export default SelectTutor;