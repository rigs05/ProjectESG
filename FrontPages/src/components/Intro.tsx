import logo from "../assets/logo.png";

export const Intro = () => {
  return (
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
  );
};
