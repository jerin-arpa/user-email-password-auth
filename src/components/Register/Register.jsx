const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }

    return (
        <div className="mt-20">
            <h2 className="text-3xl font-bold text-center my-10">Please Register</h2>
            <div className="flex justify-center">
                <form onSubmit={handleRegister} className=" w-1/3">
                    <input type="email" name="email" placeholder="Email Address" className="input input-bordered w-full mb-3" /> <br />
                    <input type="password" name="password" placeholder="Your Password" className="input input-bordered w-full mb-8" /> <br />
                    <div className="flex justify-center">
                        <input className="mb-5 btn btn-neutral" type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;