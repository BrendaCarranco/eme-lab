import React from 'react';
import { withRouter } from 'react-router-dom';
import { firebase } from '../../firebase';

const NoMember = (props) => {

    const logOut = () => {
        firebase.auth().signOut()
            .then(() => {
                props.history.push('/');
            });
    };
    return (
        <div>
            <div>
                Esta es la vista de los que no son miembros :( actualiza tu membresía para acceder a la plataforma
        </div>
            <button onClick={() => logOut()}>
                Volver a inicio
        </button>
        </div>
    );
};

export default withRouter(NoMember);
