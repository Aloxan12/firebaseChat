import AppBar from "@material-ui/core/AppBar";
import React, {useContext} from "react";
import {Button, Grid, Toolbar} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {AuthContext} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

export const Navbar = () => {
    const {auth} = useContext(AuthContext)
    const [user] = useAuthState(auth)

    return (
        <AppBar color={'secondary'} position="static">
            <Toolbar variant="dense">
                <Grid container justify={'flex-end'}>
                    {user ?
                        <Button onClick={()=> auth.signOut()} variant={'outlined'}>Logout</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={'outlined'}>Login</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}