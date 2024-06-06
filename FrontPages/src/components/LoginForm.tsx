import google from "../assets/google.png";
import x from "../assets/x-logo.png";
import globe from "../assets/globe.png";

export const LoginForm = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-[156px] h-[152px]'>
        <img src={globe} alt='globe icon' />
      </div>
      <form className='flex flex-col bg-green-login rounded-md text-white p-[40px] h-fit -m-5'>
        {/* h-[482px] */}
        {/* <div>{title}</div> */}
        <div className='mb-4'>
          <div className='mb-2 text-3xl text-slate-title'>Login</div>
          <p className='text-gray-light text-sm'>
            Enter your registered Email ID to continue
          </p>
        </div>
        <div className='mb-4'>
          <label className='block font-semibold pb-2 text-sm'>
            Email{" "}
            <span className='text-red-mandatory font-semibold text-sm'>*</span>
          </label>
          <input
            type='email'
            name='email'
            placeholder='Your Email ID'
            className='rounded p-3 w-[300px] text-black'
            required
          />
        </div>
        <div className='mb-8'>
          <label className='block font-semibold pb-2 text-sm'>
            Password{" "}
            <span className='text-red-mandatory font-semibold text-sm'>*</span>
          </label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            className='rounded p-3 w-[300px] text-black'
            required
          />
        </div>
        {/* Social Links Login */}
        <div className='group flex rounded p-2 mb-2 border w-full text-sm justify-center items-center hover:bg-white'>
          <img
            src={google}
            alt='Google Logo'
            className='w-6 h-6 rounded group-hover:border border-black'
          />
          <p className='ml-2 font-semibold group-hover:text-black'>
            Sign in with Google
          </p>
        </div>
        <div className='group flex rounded p-2 mb-4 border w-full text-sm justify-center items-center hover:bg-black'>
          <img
            src={x}
            alt='Twitter logo'
            className='w-6 h-6 rounded group-hover:bg-transparent'
          />
          <p className='ml-2 font-semibold group-hover:text-white'>
            Sign in with Twitter
          </p>
        </div>
        <p className='text-white text-xs text-center mb-1'>
          Having trouble logging in?{" "}
          <span className='underline text-green-link'>
            <a href='#'>Contact Us</a>
          </span>
        </p>
        <button className='bg-green-submit text-white text-bold px-4 py-4 rounded w-full hover:bg-green-700'>
          Continue
        </button>
      </form>
    </div>
  );
};
