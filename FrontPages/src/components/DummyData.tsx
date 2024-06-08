export const DummyData = ({
  number,
  type,
  supplies,
  score,
  classify,
  status,
  result,
}: {
  number: number;
  type: string;
  supplies: number;
  score: number;
  classify: string;
  status: string;
  result: string;
}) => {
  return (
    <div className='grid grid-cols-9 p-2 font-sans bg-white'>
      <input id='default-checkbox' type='checkbox' className='w-4 h-4' />
      <text className='text-green-submit'>Assessment {number}</text>
      <text className='px-2'>{type}</text>
      <text className=''>{supplies}</text>
      <text className=''>{score}</text>
      <text className=''>{classify}</text>
      <StatusWrapper status={status}>
        {status === "PENDING" ? "PENDING" : "COMPLETE"}
      </StatusWrapper>

      <a href='#' className='text-green-submit font-md' defaultValue={"-"}>
        {result}
      </a>
      <div
        id='actions'
        className='flex justify-around items-center text-gray-paratext'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='size-4 m-2 hover:text-gray-dark'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z'
          />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='size-4 m-2 hover:text-gray-dark'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
          />
        </svg>
      </div>
    </div>
  );
};

// Status-box arrangement logic
const StatusStylePending = ({ children }: { children: string }) => {
  return (
    <div className='bg-red-200 text-red-500 py-1 px-2 text-xs rounded-sm font-semibold text-center'>
      {children}
    </div>
  );
};

const StatusStyleFinished = ({ children }: { children: string }) => {
  return (
    <div className='bg-green-200 text-green-submit py-1 px-2 text-xs rounded- font-semibold text-center'>
      {children}
    </div>
  );
};

const StatusWrapper = ({
  status,
  children,
}: {
  status: string;
  children: string;
}) => {
  switch (status) {
    case "PENDING":
      return <StatusStylePending>{children}</StatusStylePending>;
    case "COMPLETE":
      return <StatusStyleFinished>{children}</StatusStyleFinished>;
    default:
      <div>{children}</div>;
  }
};
