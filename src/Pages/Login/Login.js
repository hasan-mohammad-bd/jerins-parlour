import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <div className="flex justify-center items-center h-screen">
        <button className="btn" onClick={()=>{signInWithGoogle()}}>Signup with google</button>
    </div>
    );
};

export default Login;