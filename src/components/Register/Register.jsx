import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');


    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);


        // reset error
        setRegisterError('');
        setSuccess('');


        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters');
            return;
        }

        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('Account created successfully');
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }

    return (
        <div className="mt-20">
            <h2 className="text-3xl font-bold text-center my-10">Please Register</h2>
            <div className="flex justify-center">
                <form onSubmit={handleRegister} className=" w-1/3">
                    <input type="email" name="email" placeholder="Email Address" className="input input-bordered w-full mb-3" required /> <br />
                    <input type="password" name="password" placeholder="Your Password" className="input input-bordered w-full mb-8" required /> <br />
                    <div className="flex justify-center">
                        <input className="mb-5 btn btn-neutral" type="submit" value="Register" />
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
        </div>
    );
};

export default Register;