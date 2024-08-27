import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-white">
          Sign Up <span className="text-blue-500"> VibeChat</span>
        </h1>

        <form className="text-white">
          <div>
            <label className="label p-2 ">
              <span className="text-base ">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered text-black h-10"
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base ">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input text-black input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base ">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered text-black h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base ">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered text-black h-10"
            />
          </div>

          <GenderCheckbox />

          <div>
            <h1 className="inline-block">Already have an account? </h1>
            <a
              className="text-md font-bold  hover:underline hover:text-blue-600 mt-2 inline-block"
              href="#"
            >
              &nbsp; Login Now
            </a>
          </div>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
