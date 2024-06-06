import { Intro } from "../components/Intro";
import { RegForm } from "../components/RegForm";

export const Register = () => {
  return (
    <div className='flex gap-5 justify-evenly items-center bg-green-home text-white w-full h-screen'>
      <Intro />
      <RegForm />
    </div>
  );
};
