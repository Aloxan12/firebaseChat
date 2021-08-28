import React, {useContext} from "react";
import {Box, Button, Container, Grid} from "@material-ui/core";
import {AuthContext} from "../index";
import firebase from "firebase";

export const Login = () => {
    const {auth} = useContext(AuthContext)

    const login = async ()=>{
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={'center'}
                  justify={'center'}
            >
                <Grid style={{width: 400, background: 'lightgray'}}
                      container
                      alignItems={'center'}
                      direction={'column'}
                >
                    <Box p={5}>
                        <Button onClick={login} variant={'outlined'}>Войти с помощь гугл</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}