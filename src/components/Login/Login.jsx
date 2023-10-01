import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef(null);


    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);


        setRegisterError('');
        setSuccess('');


        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                if (result.user.emailVerified) {
                    setSuccess('User Logged in successfully');
                }
                else {
                    alert('Please verify your email address')
                }
            })
            .error(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }


    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            console.log('Please provide an email', emailRef.current.value)
        }
        else if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log('Please write a valid email');
            return;
        }


        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Please Check your email');
            })
            .catch(error => {
                console.log(error);
            })
    }



    return (
        <div className="mt-20">
            <h2 className="text-3xl font-bold text-center my-10">Please Login</h2>
            <div className="hero">
                <div className="card w-full max-w-xl shadow-2xl bg-base-200">
                    <div className="card-body">
                        <form onSubmit={handleLogIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" ref={emailRef} placeholder="Enter your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" />
                                <label className="label">
                                    <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>

                    <div>
                        {
                            registerError && <p className="text-red-400 text-2xl font-bold text-center">{registerError}</p>
                        }
                    </div>
                    <div>
                        {
                            success && <p className="text-green-500 text-2xl font-bold text-center">{success}</p>
                        }
                    </div>

                    <div className="flex justify-center mb-5">
                        Do not have an account? <Link className="ml-2 text-blue-600 underline" to='/register'>Register Here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;