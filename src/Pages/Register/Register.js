import { Button, TextField } from "@mui/material"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import './Register.css'

const Register = () => {
    return (
        <div>
            <Container>
                <div className="loginContainer">
                    <form style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
                        <h2>Create an Account</h2>
                        <TextField style={{ margin: '12px 5px' }} type="text" label="UserName" variant="outlined" required></TextField>
                        <TextField style={{ margin: '12px 5px' }} type="email" label="Your Email" variant="outlined" required></TextField>
                        <TextField style={{ margin: '12px 5px' }} type="password" label="Password" variant="outlined" required></TextField>
                        <TextField style={{ margin: '12px 5px' }} type="password" label="Confirm Password" variant="outlined" required></TextField>
                        <Button type="submit" style={{ margin: '12px 5px' }} variant="contained" size="large">Register</Button>
                        <span>Already have an account. <Link to='/login' style={{color:'#2074d4'}}>Login</Link></span>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Register
