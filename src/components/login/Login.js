import React, { useState, useCallback } from 'react';
import { firebase } from '../../firebase';
import './login.css'
import logoeme from '../../img/logoeme.png';
import Modal from 'react-modal';
import {withRouter} from 'react-router-dom'

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    
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
            setUser(res.user.email);
            props.history.push('/Inicio')
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
            setUser(res.user.email);
            props.history.push('/Inicio')


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
    <div className="container">
        <div className="row align-middle">
            <div className="col">
            
            
                <img src={logoeme} className="mx-auto d-block pt-5 logo"/>
               
                <form className="" onSubmit={handleLogin}>
                <div className="form-group">
                   <input className="form-control rounded-0" placeholder='Correo' type='email' onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">  
                   
                    <input className="form-control rounded-0" placeholder='Contraseña' type='password' onChange={e => setPassword(e.target.value)} />
                  
                </div>    
                    <button className='btn btn-dark btn-lg btn-large mt-3' type='submit' >Ingresar</button>
                </form>
                <div className="mx-auto d-block">
                <p className="login-wrapper text-center">¿No tienes cuenta?
                <a onClick={() => setModalIsOpen(true)} className="badge badge-light">Registrate aquí</a>
                <Modal isOpen={modalIsOpen} className="card modalregistro">
                <h1 className="card-title mx-auto d-block text-center">Registrarse</h1>
                <div className="card-body">
                <form onSubmit={handleRegister}>
                <div className="form-label-group">
                <input className="form-control rounded-0 mx-auto d-block inputmodal" placeholder='Correo' type='email' onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-label-group">
                <input className="form-control rounded-0 mx-auto d-block inputmodal" placeholder='Contraseña' type='password' onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="form-label-group">
                <input className="form-control rounded-0 mx-auto d-block inputmodal" placeholder='Nombre' type='text' onChange={e => setName(e.target.value)} />
                </div>
                <button className='btn btn-m btn-dark btn-block text-uppercase rounded-0 btnmodal'>Ingresar</button>
                </form>
                <div>
                    <button className='btn btn-m btn-dark btn-block text-uppercase rounded-0 btnmodal' onClick={() => setModalIsOpen(false)}>Cerrar</button>
                </div>
                </div>
                </Modal>
                </p>
                </div>
            </div>
            
        </div>
    </div>

    
    

        
    );
};

export default withRouter(Login);
