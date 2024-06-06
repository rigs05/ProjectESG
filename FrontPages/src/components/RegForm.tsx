import globe from "../assets/globe.png";

export const RegForm = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-[156px] h-[152px]'>
        <img src={globe} alt='globe icon' />
      </div>
      <form className='bg-green-login rounded-md text-white p-[40px] h-[482px] -m-5'>
        {/* <div>{title}</div> */}
        <div className='mb-4 text-3xl text-slate-title'>Sign Up</div>
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
        <div className='mb-4'>
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
        <div className='mb-12'>
          <label className='block font-semibold pb-2 text-sm'>
            Confirm Password{" "}
            <span className='text-red-mandatory font-semibold text-sm'>*</span>
          </label>
          <input
            type='password'
            name='confirmPassword'
            placeholder='Password'
            className='rounded p-3 w-[300px]'
            required
          />
        </div>
        <button className='bg-green-submit text-white text-bold px-4 py-4 rounded w-full hover:bg-green-700'>
          Continue
        </button>
      </form>
    </div>
  );
};
