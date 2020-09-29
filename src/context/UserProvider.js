import React, { createContext, useEffect, useState } from 'react';
import { firebase } from '../firebase';

export const UserContext = createContext();

const UserProvider = (props) => {

    const dataInitialUser = {
        email: null,
        uid: null,
        role: null,
        displayName: null
    };

    const [userProvider, setUserProvider] = useState(dataInitialUser);

    const [paper, setPaper] = useState('');
    const [size, setSize] = useState('');
    const [cost, setCost] = useState('');
    const [add, setAdd] = useState(false);
    const [fullPaperName, setFullPaperName] = useState('');
    const [finalOrder, setFinalOrder] = useState([]);
    const [order, setOrder] = useState({});
    const [material, setMaterial] = useState([]);


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
                        if (!!idTokenResult.claims.admin) {
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



    useEffect(() => {
        const fetchMaterial = async () => {
            try {

                const db = firebase.firestore();
                const usersFilesCollection = await db.collection('precios').get();
                const arrayData = await usersFilesCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                //console.log(arrayData);
                setMaterial(arrayData);

            } catch (err) {
                console.log(err);
            }
        };
        fetchMaterial();
    }, [setMaterial]);

    //console.log(material);



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
        <UserContext.Provider value={{
            userProvider, userRegister,
            setPaper, material, paper, setSize, cost, setCost, fullPaperName,
            setFullPaperName, size, order, setOrder, setFinalOrder, finalOrder, add, setAdd
        }} >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;
