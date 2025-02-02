/* eslint-disable react/prop-types */
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../firebase-config";

const Login = ({ setUser }) => {
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  const loginWithGitHub = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-login bg-cover bg-center px-6">
      <div className="bg-whiteblue p-6 sm:p-8 md:p-10 rounded-lg shadow-lg text-center w-full max-w-sm md:max-w-md lg:max-w-lg">
        <h2 className="text-2xl font-bold mb-4 sm:mb-6">
          Login to Country Information
        </h2>
        <h3 className="text-lg font-normal mb-3 sm:mb-4">
          Website that provides information about countries in the world.
        </h3>
        <p className="text-base font-semibold text-gray-600 mb-4 sm:mb-6">
          Login Now!
        </p>

        <div className="flex flex-col gap-4 md:flex-row">
          <button
            onClick={loginWithGoogle}
            className="flex items-center justify-center w-full gap-3 bg-white text-gray-900 py-2 rounded-lg hover:bg-whiteblue2 transition shadow-sm"
          >
            <img className="w-6 h-6" src="/assets/google.png" alt="Google" />
            Login with Google
          </button>

          <button
            onClick={loginWithGitHub}
            className="flex items-center justify-center w-full gap-3 bg-white text-gray-900 py-2 rounded-lg hover:bg-whiteblue2 transition shadow-sm"
          >
            <img className="w-6 h-6" src="/assets/github.png" alt="GitHub" />
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
