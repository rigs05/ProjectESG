import { Intro } from "../components/Intro";
import { LoginForm } from "../components/LoginForm";

const Login = () => {
  return (
    <div className='flex gap-5 justify-evenly items-center bg-green-home text-white w-full h-screen'>
      <Intro />
      <LoginForm />
    </div>
  );
};

export default Login;
