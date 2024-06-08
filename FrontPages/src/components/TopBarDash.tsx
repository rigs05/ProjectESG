import onlyLogo from "../assets/logo-only.png";

export const TopBarDash = ({ Name }: { Name: string }) => {
  return (
    <div className='bg-gray-light font-sans'>
      <div className='flex mx-5 py-3 justify-center items-center'>
        {/* logo */}
        <div className='flex justify-center items-center'>
          <img src={onlyLogo} alt='Logo Only' className='w-6 h-6' />
          <text className='mx-4 font-semibold text-lg'>View Name</text>

          {/* Region drop down menu */}
          <div className='flex justify-center items-center border-2 border-gray-edge rounded-md p-2 ml-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='size-4 text-gray-500'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21'
              />
            </svg>

            <p className=' text-gray-dark mx-2'>North India Region</p>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='size-4'
            >
              <path
                fillRule='evenodd'
                d='M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>

        {/* Notification-icon User-Name User-Icon */}
        <div className='flex p-2 justify-center items-center ml-auto rounded-md text-gray-dark'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='size-6 mr-2 hover:fill-gray-dark'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0'
            />
          </svg>
          <text className='text-gray-paratext font-semibold mx-3 hover:text-gray-dark'>
            {Name}
          </text>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='size-6 hover:fill-gray-dark'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
            />
          </svg>
        </div>
      </div>

      {/* Horizontal Separator */}
      <div className='border border-b-gray-edge'></div>

      {/* Data Entry Tracker page button FY 2023-24 drop down */}
      <div className='flex justify-between items-center mx-5 p-2'>
        {/* Pages */}
        <div className='flex justify-center items-center gap-5'>
          <div className='flex justify-center items-center text-green-link'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='size-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
              />
            </svg>
            <button className='font-semibold mx-3'>DATA ENTRY</button>
          </div>
          <div className='flex justify-center items-center text-gray-paratext hover:text-gray-dark'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='size-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'
              />
            </svg>
            <button className='font-semibold mx-3'>TRACKER</button>
          </div>
        </div>

        <div className='flex justify-center items-center gap-5 font-semibold'>
          {/* <text>For:</text> */}
          <div className='flex justify-center p-2 items-center border-2 border-gray-edge rounded-md'>
            <text className='font-bold mx-4'>FY 2023-24</text>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='size-4'
            >
              <path
                fillRule='evenodd'
                d='M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          {/* Separator */}
          <div className=' py-5 border-2 border-l-gray-edge'></div>
          <button className='bg-green-submit text-white font-semibold p-2 px-4 rounded-md hover:bg-green-700'>
            Submit for Approval
          </button>
        </div>
      </div>
    </div>
  );
};
