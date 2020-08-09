import React, { useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { firebase } from '../../firebase';

const Login = ({ history, firebaseUser }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [user, setUser] = useState('');
    const [name, setName] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email.trim()) {
            console.log('mete un correo');
            return;
        }
        if (!password.trim()) {
            console.log('mete contraseña');
            return;
        }
        console.log('validando...');
        login();
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (!email.trim()) {
            console.log('mete un correo');
            return;
        }
        if (!password.trim()) {
            console.log('mete contraseña');
            return;
        }
        console.log('validando...');
        register();
    };

    const login = useCallback(async () => {
        try {
            const res = await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log(res.user);

            //setUser(res.user.email);
        } catch (err) {
            console.log(err);
            if (err.code === "auth/user-not-found") {
                alert('correo no valido');
            }
        }

    }, [email, password]);

    const register = useCallback(async () => {
        try {
            const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
            console.log(res.user);


            /*                     var user = firebase.auth().currentUser;
            
                    user.updateProfile({
                    displayName: "Jane Q. User" */

            let current = firebase.auth().currentUser;
            current.updateProfile({
                displayName: name
            });




            await firebase.firestore().collection('usuarios').doc(res.user.email).set({
                email: res.user.email,
                uid: res.user.uid,
                name: name
            });
            setEmail('');
            setPassword('');
            //setUser(res.user.email);


        } catch (err) {
            console.log(err);
            /*             if(err.code === 'auth/invalid-email'){
                            setError('Email no válido')
                        } */
        }
    },
        [email, password, name],
    );




    return (
        <div className='container mt-5'>
            <div>
                <h1>Iniciar sesión</h1>
                <form onSubmit={handleLogin}>
                    <input placeholder='Correo' type='email' onChange={e => setEmail(e.target.value)} />
                    <input placeholder='Contraseña' type='password' onChange={e => setPassword(e.target.value)} />
                    <button className='ml-2' type='submit' >Ingresar</button>
                    <button type='button' onClick={() => history.push('/reset')}>Olvidé mi contraseña</button>
                </form>
            </div>
            <div className='mt-5'>
                <h1>Registrarse</h1>
                <form onSubmit={handleRegister}>
                    <input placeholder='Correo' type='email' onChange={e => setEmail(e.target.value)} />
                    <input placeholder='Contraseña' type='password' onChange={e => setPassword(e.target.value)} />
                    <input placeholder='Nombre' type='text' onChange={e => setName(e.target.value)} />
                    <button className='ml-2'>Ingresar</button>
                </form>
                {
                    firebaseUser ? (<div>Logueado</div>) : (<div>no logueado</div>)
                }
            </div>
        </div>
    );
};

export default withRouter(Login);
