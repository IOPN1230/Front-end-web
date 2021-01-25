import React, {useEffect, useRef, useState } from 'react';
import {Box,Button} from '@material-ui/core';
import logo from './images/logo192.png'
import styles from './styles.module.css';
import { AuthorizationSystem } from '../../service/AuthorizationSystem'
import { User } from '../../service/User'
import { useCookies } from 'react-cookie';

export default function LoginScreen(props) {
    const [mounted, setMounted] = useState(true)
    const onUserChangedSubscription = useRef(null);
    const [cookies, setCookie] = useCookies(['userType']);

    useEffect(()=>{

            onUserChangedSubscription.current = User.onUserChanged.subscribe((user)=>{
                if(user == null) {
                    return;
                }
                setCookie('userType', user.userType);

                let userData = User.getUserData()
                let userType = null
    
                if (userData) {
                    userType = User.getUserData().userType
                }
    
                props.setAuthenticatedUser(userType)
    
                if(onUserChangedSubscription.current != null) {
                    onUserChangedSubscription.current.unsubscribe()
                    onUserChangedSubscription.current = null
                }
            })
    })

    const handleCitizenAuthentication = () => {
        AuthorizationSystem.doSigningIn()
    }

    const handleOfficialAuthentication = () => {
        //alert("I'm empty now officialy, but I'm growing officialy :)")
    }

    return (
        <Box className={styles.loginScreen + " container-fluid d-flex justify-content-center align-items-center"}>
            <Box className={styles['auth-section'] + " container-fluid d-flex flex-column justify-content-around align-items-center"}>
                <h1>BaUHInia</h1>

                <img src={logo} 
                     alt="BauHlina" 
                     width="40%" />

                <Button color="primary" 
                        variant="contained"
                        onClick={handleCitizenAuthentication}>

                    <img src={logo} width="50" height="50" alt="google" />

                    <span style={{marginLeft: '10px'}}>Zaloguj z Google</span>
                </Button>
                {/* <Button onClick={handleOfficialAuthentication}>Zaloguj jako urzędnik</Button> */}
            </Box>
            
            <a className={styles['freepik-link']} 
               href='https://www.freepik.com/vectors/background'>
               Background vector created by freepik - www.freepik.com
            </a>
        </Box>
    )
}