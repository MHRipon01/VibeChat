import { Link } from "react-router-dom";

const Login = () => {
    return (
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            Login
            <span className="text-blue-500"> VibeChat</span>
          </h1>
  
          <form className="text-white">
            <div>
              <label className="label p-2">
                <span className="">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full input input-bordered h-10 text-black"
              />
  
              <label className="label p-2">
                <span className="">Password</span>
              </label>
              <input
                type="text"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10 text-black"
              />
            </div>
  
            <div className="mt-5">
              {" "}
              <p className="inline-block">Don&apos;t have an account?</p>
              <Link to={'/signup'} className="font-semibold ">
                {" "}
                Sign up Now
              </Link>
              <div>
                <div>
                  <button className="btn btn-block btn-sm mt-2">Login</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
  