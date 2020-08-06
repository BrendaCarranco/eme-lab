import React, { useState, useCallback } from 'react';
import { firebase } from '../../firebase';
import './login.css'
import logoeme from '../../img/logoeme.png';
import Modal from 'react-modal';
const Login = () => {

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
            await firebase.firestore().collection('usuarios').doc(res.user.email).set({
                email: res.user.email,
                uid: res.user.uid,
                name: name
            });
            setEmail('');
            setPassword('');
            setUser(res.user.email);


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
        <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5 border border-secondary rounded-0">
            <div className='cad-body'>
            
                <img src={logoeme} align="center" className="logo mx-auto d-block p-4"/>
               
                <form className="form-signin" onSubmit={handleLogin}>
                    <div className="form-label-group pt-5">
                    
                    <input className="form-control rounded-0 mx-auto d-block" placeholder='Correo' type='email' onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-label-group">
                  
                    <input className="form-control rounded-0 mx-auto d-block" placeholder='Contraseña' type='password' onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button className='btn btn-m btn-dark btn-block text-uppercase rounded-0' type='submit' >Ingresar</button>
                </form>
                <p className="login-wrapper-footer-text text-center pt-5">¿No tienes cuenta?
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
                {
                    user !== '' ? (<div>Logueado</div>) : (<div>no logueado</div>)
                }
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
    </div>

    
    

        
    );
};

export default Login;
