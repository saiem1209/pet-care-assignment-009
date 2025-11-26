import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.config';

const Profile = () => {

    const { setUser, user } = useContext(AuthContext);
    const [isopen, setIsopen] = useState(false)

    const handleOpenForms = () => {

        setIsopen(!isopen)
    }

    const handleupdate = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photourl = e.target.photoUrl.value;

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photourl
        }).then(() => {
            setUser({
                ...user,
                displayName: name,
                photoURL: photourl
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="min-h-screen flex justify-center bg-gray-200 items-center p-6">

            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md text-center">

              
                <div className="avatar mb-4">
                    <div className="w-28 rounded-full ring ring-blue-500 ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} alt="profile" />
                    </div>
                </div>

        
                <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
                <p className="text-gray-500">{user?.email}</p>

              
                <button
                    onClick={handleOpenForms}
                    className="btn btn-primary w-full mt-5"
                >
                    {isopen ? "Close Update Form" : "Update Profile"}
                </button>

           
                {isopen && (
                    <form
                        onSubmit={handleupdate}
                        className="mt-6 bg-gray-50 p-5 rounded-lg shadow-inner animate-fadeIn"
                    >
                        <div className="text-left">

                            <label className="label font-semibold">Name</label>
                            <input
                                defaultValue={user.displayName}
                                name="name"
                                type="text"
                                className="input input-bordered w-full mb-3"
                                placeholder="Your Name"
                            />

                            <label className="label font-semibold">Photo URL</label>
                            <input
                                defaultValue={user.photoURL}
                                name="photoUrl"
                                type="text"
                                className="input input-bordered w-full mb-3"
                                placeholder="Photo URL"
                            />

                        </div>

                        <button
                            className="btn btn-neutral w-full mt-2"
                        >
                            Save Changes
                        </button>
                    </form>
                )}

            </div>
        </div>
    );

};

export default Profile;