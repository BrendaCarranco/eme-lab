import React, { useState, useEffect } from 'react';
import { firebase } from '../../firebase';
import './Storage.css'

const Storage = () => {
    const [fileUrl, setFileUrl] = useState(null);
    const [usersFiles, setUsersFiles] = useState([]);

    const handleChangeFile = async e => {
        console.log('hi file');
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref();
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
            avatar: fileUrl
        };
        firebase.firestore().collection('files').doc(username).set(newUserFile);
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
        <div className="storage-body">
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
         
        </div>
    );
};

export default Storage;

/*<ul>
{
    usersFiles.map(user => {
        return <li key={user.name}>
            <a href={user.avatar}>descarga</a>
            <img width='100' height='100' src={user.avatar} alt={user.name} />
            <p>{user.name}</p>
        </li>;
    })
}
</ul> */