import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";



const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password, accepted);


        // reset error
        setRegisterError('');
        setSuccess('');


        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have one uppercase character');
            return;
        }
        else if (!accepted) {
            setRegisterError('Please accept our terms and conditions');
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
                <form onSubmit={handleRegister} className=" w-full lg:w-2/4  bg-base-200 px-10 pt-14 rounded-xl">
                    <input type="email" name="email" placeholder="Email Address" className="input input-bordered w-full mb-3" required /> <br />

                    <input type={showPassword ? "text" : "password"}
                        name="password" placeholder="Your Password" className="input input-bordered w-full" required />
                    <div className="relative flex justify-end">
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute bottom-4 right-4">
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                    <br />

                    <input type="checkbox" name="terms" id="terms" />
                    <label className="ml-3" htmlFor="terms">Accept our terms and conditions</label>

                    <div className="flex justify-center">
                        <input className="my-5 btn btn-primary w-full" type="submit" value="Register" />
                    </div>


                    <div>
                        {
                            registerError && <p className="text-red-400 text-xl font-bold text-center">{registerError}</p>
                        }
                    </div>
                    <div>
                        {
                            success && <p className="text-green-500 text-xl font-bold text-center">{success}</p>
                        }
                    </div>

                    <div className="flex justify-center mt-3 mb-10">
                        Already have an account? <Link className="ml-2 text-blue-600 underline" to='/login'>Login Here</Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Register;