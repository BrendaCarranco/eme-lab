import React, { useState, useEffect } from 'react';
import { firebase } from '../../firebase';
import moment from 'moment';
import 'moment/locale/es';

const Storage = ({ firebaseUser }) => {
    const [fileUrl, setFileUrl] = useState(null);
    const [usersFiles, setUsersFiles] = useState([]);

    const handleChangeFile = async e => {
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref('Cotizaciones').child(firebaseUser.email);
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL());
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit');

        const username = e.target.username.value;
        if (!username) {
            return;
        }

        const newUserFile = {
            name: username,
            fileLink: fileUrl,
            date: Date.now()
        };
        //esta sube la imegen 
        firebase.firestore().collection('files').doc(firebaseUser.email).set(newUserFile);
        setUsersFiles([
            ...usersFiles,
            { ...newUserFile }

        ]);
    };

    useEffect(() => {
        const fetchUsersFiles = async () => {
            const usersFilesCollection = await firebase.firestore().collection('files').get();
            setUsersFiles(usersFilesCollection.docs.map(doc => {
                return doc.data();
            }));
        };
        fetchUsersFiles();
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='file'
                    onChange={handleChangeFile}
                />
                <input
                    type='text'
                    placeholder='name'
                    name='username'
                />
                <button>Submit</button>
            </form>
            <ul>
                {
                    usersFiles.map(user => {
                        return <li key={user.name} >
                            <a href={user.fileLink}>descarga</a>
                            <img width='100' height='100' src={user.fileLink} alt={user.name} />
                            <p>{user.name} - {moment(user.date).format('LLL')} </p>
                        </li>;
                    })
                }
            </ul>
        </div>
    );
};

export default Storage;
