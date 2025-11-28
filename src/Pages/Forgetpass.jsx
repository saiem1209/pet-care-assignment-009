import { sendPasswordResetEmail } from 'firebase/auth';
import React from 'react';
import { useParams } from 'react-router';
import auth from '../Firebase/firebase.config';


const Forgetpass = () => {
    const {email} = useParams();

    const handlesubmit = (e) => {
        e.preventDefault();
        const forEmail = e.target.email.value;
        sendPasswordResetEmail(auth, forEmail)
        .then(()=>{
            window.open('https://mail.google.com/mail/u/0/#inbox')
        })
        .catch((error) =>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-20">
                <div className="card-body">
                    <form onSubmit={handlesubmit} className='fieldset'>
                        <label className="label">Email</label>
                        <input  defaultValue={email} name='email' type="email" className="input" placeholder="Email" />
                        <button className="btn btn-neutral mt-4">Send Email</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Forgetpass;