import React, {useState} from 'react';
import {ModalHeader,ModalBody,ModalFooter,Button,Form,FormGroup,Label,Input} from 'reactstrap';
import axios from 'axios';
import {toast} from 'react-toastify';
import { useHistory } from 'react-router-dom';

const LoginForm = ({toggleIsLogin,toggle,setLoggedIn}) =>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const history = useHistory()
   

    const handleLogin =(e)=>{
        e.preventDefault()

        axios({
            method: 'post',
            url: 'https://insta.nextacademy.com/api/v1/login',
            data: {
              username: username,
              password: password
            }
          })
          .then(result =>{
              console.log(result)
              localStorage.setItem('jwt',result.data.auth_token)
              setLoggedIn(true)
              setUsername('')
              setPassword('')
              toggle()
              history.push("/profile")

              toast.success("Successfully Signed In! Yay!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
    
                localStorage.setItem("user",JSON.stringify(result.data.user))
          })
          
           
            .catch(error => {
                console.error(error)
              })
    }
    


    return <>
     <Form>
        <ModalHeader toggle={toggle} charCode="x">Log In</ModalHeader>
            <ModalBody>
            
            <FormGroup row>
                <Label for="username">Username</Label>
                <Input type="username" name="username" id="username" placeholder="username" value={username} onChange={(e)=>{
                    setUsername(e.target.value)
                }}/>
            </FormGroup>
            <FormGroup row>
                <Label for="Password">Password</Label>
                <Input type="password" name="password" id="Password" placeholder="password" value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }} />
            </FormGroup>
            <p>New member? <a href="#" onClick={(e)=>{
                e.preventDefault()
                toggleIsLogin()

            }}>Sign up here</a></p>
        
            <div>
            <button onClick={toggleIsLogin}>Go to sign up</button>
            </div>

            </ModalBody> 
            <ModalFooter>
            <Button color="primary" disabled={!(username && password)}  onClick={handleLogin}>Login</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
    </Form>
    </>
}


export default LoginForm;   