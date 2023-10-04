import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Google Login</button>
    </div>
  );
};

export default Login;
