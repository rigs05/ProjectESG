import logo from "../assets/logo.png";

export const FirstPage = () => {
  return (
    <div className='flex gap-5 justify-evenly align-middle'>
      {/* Introduction div */}
      <div className='font-sans'>
        <p>WELCOME TO </p>
        <img
          src={logo}
          alt='Breathe ESG logo'
          style={{ width: "347.81px", height: "42px" }}
        />
        <p className='text-gray-500'>
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
      <div>{/* // Login Logic */}</div>
    </div>
  );
};
