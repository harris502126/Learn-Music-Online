import { Button,Container,Card,Grid, CardContent,CardActions, Typography,Paper, Avatar } from "@mui/material";
import { amber, brown, grey, lightBlue, red, teal } from "@mui/material/colors";
import {  useNavigate } from "react-router-dom";
import './Main.css'
import { light } from "@mui/material/styles/createPalette";
function Main(){
const navigate = useNavigate()
const handleStuClick=()=>
{
    navigate('/signin')
}
const handleStaClick=()=>
{
    navigate('/StaffLog')
}
    return (
        <body>
            <Container sx={{display:'flex', marginTop:'20vh',marginLeft:'21vw'}}>
            
                    <Paper elevation={20} sx={{margin:5 , width:'20vw',height:'40vh',p:6,bgcolor:light[500] }} >
                    <Grid align='center'>
                                        <Avatar sx={{bgcolor:brown[500]}}>S</Avatar>
                                        <Typography variant="h4" fontFamily={"fantasy"}>I'm a STUDENT</Typography>
                                        <Button onClick={handleStuClick} variant="contained" sx={{marginTop:2}}>Click Here</Button>
                                    </Grid>
            
                    </Paper>
                    <Paper elevation={20} sx={{margin:5 , width:'20vw',height:'40vh',p:6,bgcolor:light[500] }}>
            
                                    <Grid align='center'>
                                        <Avatar sx={{bgcolor:red[400]}}>T</Avatar>
                                        <Typography variant="h4">I'm a TUTOR</Typography>
                                        <Button onClick={handleStaClick} variant="contained" sx={{marginTop:2}}>Click Here</Button>
                                    </Grid>
            
                    </Paper>
            </Container>
        </body>

    )
}
export default Main