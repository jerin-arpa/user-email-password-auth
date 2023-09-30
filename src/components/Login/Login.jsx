const Login = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl font-bold text-center my-10">Please Login</h2>
            <div className="flex justify-center">
                <form className=" w-1/3">
                    <input type="email" placeholder="Type here" className="input input-bordered w-full mb-3" /> <br />
                    <input type="password" placeholder="Type here" className="input input-bordered w-full mb-8" /> <br />
                    <div className="flex justify-center">
                        <input className="mb-5 btn btn-neutral" type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;