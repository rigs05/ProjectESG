import logo from "../assets/logo.png";
import globe from "../assets/globe.png";

export const FirstPage = ({ title }: { title: string }) => {
  // export const FirstPage = () => {
  return (
    <div className='flex gap-5 justify-evenly items-center h-screen'>
      {/* Introduction div */}
      <div className='font-sans'>
        <p>WELCOME TO </p>
        <img
          src={logo}
          alt='Breathe ESG logo'
          className='mt-4 w-[347.81px] h-[42px]'
        />
        <p className='text-gray-paratext mt-8 mb-12'>
          We help you track your organisations <br />
          metrics as per the ESG Guidelines
        </p>
        Sounds Interesting?
        <span>
          <a href='#' className='text-green-link'>
            " Get in touch!"
          </a>
        </span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-[156px] h-[152px]'>
          <img src={globe} alt='globe icon' />
        </div>

        {/* Input Form */}
        <form className='bg-green-login rounded-md text-white p-[40px] h-[482px] -m-5'>
          {/* <div>{title}</div> */}
          <div className='mb-4 text-3xl text-slate-title'>{title}</div>
          <div className='mb-4'>
            <label className='block font-semibold pb-2 text-sm'>
              Email{" "}
              <span className='text-red-mandatory font-semibold text-sm'>
                *
              </span>
            </label>
            <input
              type='email'
              name='email'
              placeholder='Your Email ID'
              className='rounded p-3 w-[300px]'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block font-semibold pb-2 text-sm'>
              Password{" "}
              <span className='text-red-mandatory font-semibold text-sm'>
                *
              </span>
            </label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              className='rounded p-3 w-[300px]'
              required
            />
          </div>
          <div className='mb-12'>
            <label className='block font-semibold pb-2 text-sm'>
              Confirm Password{" "}
              <span className='text-red-mandatory font-semibold text-sm'>
                *
              </span>
            </label>
            <input
              type='password'
              name='confirmPassword'
              placeholder='Password'
              className='rounded p-3 w-[300px]'
              required
            />
          </div>
          <button className='bg-green-submit text-white text-bold px-4 py-4 rounded w-full'>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};
