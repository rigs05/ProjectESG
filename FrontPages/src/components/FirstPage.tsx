import logo from "../assets/logo.png";
import globe from "../assets/globe.png";

// export const FirstPage = ({ title }: { title: string }) => {
export const FirstPage = () => {
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
      <div>
        <img src={globe} className='w-[156px] h-[152px] m-auto' />
        <form className='bg-green-login rounded-md text-white p-[40px] h-[482px] -m-5'>
          {/* <div>{title}</div> */}
          <div className='mb-2 text-3xl text-slate-title'>Sign Up</div>
          <div>
            <label className='block'>
              Email <span>*</span>
            </label>
            <input
              type='email'
              name='email'
              placeholder='Your Email ID'
              className='rounded'
              required
            />
          </div>
          <div>
            <label>
              Password <span>*</span>
            </label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              className='rounded'
              required
            />
          </div>
          <div>
            <label>
              Confirm Password <span>*</span>
            </label>
            <input
              type='password'
              name='confirmPassword'
              placeholder='Password'
              className='rounded'
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};
