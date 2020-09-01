import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { firebase } from '../firebase';

export const UserContext = createContext();

const UserProvider = (props) => {

    const dataInitialUser = {
        email: null,
        uid: null,
        role: 'Invitado',
        displayName: null
    };

    const [userProvider, setUserProvider] = useState(dataInitialUser);
    const [order, setOrder] = useState({})


    useEffect(() => {
        detectUser();
    }, []);

    const detectUser = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log(user, 'user provider');
                user.getIdTokenResult()
                    .then(idTokenResult => {
                        console.log(idTokenResult, 'token');
                        if (!!idTokenResult.claims.Admin) {
                            console.log('es admin');
                            setUserProvider({
                                email: user.email,
                                uid: user.uid,
                                displayName: user.displayName,
                                role: 'Admin'

                            });
                        } else if (!!idTokenResult.claims.Member) {
                            console.log('es miembro');
                            setUserProvider({
                                email: user.email,
                                uid: user.uid,
                                displayName: user.displayName,
                                role: 'Miembro'
                            });
                        } else {
                            console.log('es invitado');
                            setUserProvider({
                                email: user.email,
                                uid: user.uid,
                                displayName: user.displayName,
                                role: 'Invitado'

                            });
                        }
                    }
                    );

            } else {
                console.log(user, 'user provider null');
            }
        });
    };

    const userRegister = async (email, password, name) => {
        try {
            const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const collection = await firebase.firestore().collection('usuarios').doc(res.user.email).get();

            if (!collection.exists) {
                await firebase.firestore().collection('usuarios').doc(res.user.email).set({
                    email: res.user.email,
                    uid: res.user.uid,
                    role: 'Invitado',
                    displayName: name
                });
                let current = firebase.auth().currentUser;
                current.updateProfile({
                    displayName: name
                });

            }

        } catch (error) {
            console.log(error);
        }
        firebase.auth().signOut();
    };

    return (
        <UserContext.Provider value={{ userProvider, userRegister }} >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;
