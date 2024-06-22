import { DummyDataTracker } from "./DummyDataTracker";

const Cards = ({ title, value, icon }) => {
  return (
    <div className='p-5 w-fit rounded-md border'>
      <div className='flex gap-5'>
        <div>
          <div className='text-gray-paratext text-xs'>{title}</div>
          <div className='font-semibold text-4xl'>{value}</div>
        </div>
        <div className='p-2 m-auto items-center font-bold rounded-md bg-gray-light'>
          {icon}
        </div>
      </div>
    </div>
  );
};

export const TrackerEntries = () => {
  return (
    <div className='m-6'>
      <div className='flex gap-5 my-8'>
        <Cards
          title={"PENDING TRACKERS"}
          value={"45/60"}
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='size-6 text-gray-dark'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25'
              />
            </svg>
          }
        />
        <Cards
          title={"PENDING REVIEWS"}
          value={"3"}
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='size-6 text-gray-dark'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z'
              />
            </svg>
          }
        />
      </div>
      <div className='flex gap-3 p-2 my-4 w-fit items-center shadow-sm rounded-sm border'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='size-4 ml-2'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
          />
        </svg>
        <input
          className='outline-none'
          placeholder='Search for a business unit'
        />
      </div>
      <div className='h-[500px] shadow-sm rounded-md border'>
        {/* Title bar */}
        <div className='grid grid-cols-4 gap-4 p-2 items-center font-sans text-sm bg-gray-light'>
          <div className='flex items-center gap-2 font-bold p-2'>
            <text>MONTH</text>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='size-3.5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3'
              />
            </svg>
          </div>
          <div className='flex items-center gap-2 font-bold p-2'>
            <text>STATUS</text>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='size-3.5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3'
              />
            </svg>
          </div>
          <div className='flex items-center gap-2 font-bold p-2'>
            <text>COMPLETION %</text>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='size-3.5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3'
              />
            </svg>
          </div>
          <div className='flex items-center gap-2 font-bold p-2'>
            <text>BUSINESS UNIT</text>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='size-3.5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z'
              />
            </svg>
          </div>
        </div>

        {/* Dummy Data */}
        <DummyDataTracker
          month={"Jan 2024"}
          status={"PENDING"}
          statusCode={1 / 12}
          completion={20}
          unit={"Business Unit 1"}
        />
        <DummyDataTracker
          month={"Feb 2024"}
          status={"APPROVED"}
          statusCode={2 / 12}
          completion={30}
          unit={"Business Unit 2"}
        />
        <DummyDataTracker
          month={"Mar 2024"}
          status={"INCOMPLETE"}
          statusCode={4 / 12}
          completion={50}
          unit={"Business Unit 3"}
        />
      </div>
    </div>
  );
};
