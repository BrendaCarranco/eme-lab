import React, { useState, useCallback } from 'react';
import { firebase } from '../../firebase';
import { withRouter } from 'react-router-dom';

const Reset = ({ history }) => {
    const [email, setEmail] = useState('');
    //const [error, setError] = useState(null);

    const handleReset = e => {
        e.preventDefault();
        if (!email.trim()) {
            console.log('Ingresa tu correo');
            return;
        }
        //setError(null);
        resetPass();
    };

    const resetPass = useCallback(async () => {
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            alert('Enviamos un correo con una liga para restablecer tu contraseña');
            history.push('/login');

        } catch (error) {
            console.log(error);
            //setError(error.message);
        }
    }, [email, history]);

    return (
        <div className='container mt-5'>
            <div>
                <h1>Recuperar contraseña</h1>
                <form onSubmit={handleReset}>
                    <input placeholder='Correo' type='email' onChange={e => setEmail(e.target.value)} />
                    <button className='ml-2' type='submit' >Ingresar</button>
                </form>
            </div>
        </div>
    );
};

export default withRouter(Reset);
