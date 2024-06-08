import { DummyData } from "./DummyData";

export const DataEntries = () => {
  return (
    <div className='m-5 h-[500px] shadow-sm rounded-md'>
      {/* Data Title */}
      <div className='flex justify-around items-center font-sans font-bold p-2 text-sm rounded-t-md bg-gray-light'>
        <div className=''>
          <input
            id='default-checkbox'
            type='checkbox'
            value=''
            className='w-4 h-4'
          />
        </div>
        <text className=''>ASSESSMENT TITLE</text>
        <text className=''>TYPE</text>
        <text className=''>NO. OF SUPPLIES</text>
        <text className=''>SCORE</text>
        <text className=''>RISK CLASSIFICATION</text>
        <text className=''>STATUS</text>
        <text className=''>RESULT</text>
        <text className=''>ACTIONS</text>
      </div>

      {/* Dynamic Data */}
      <DummyData
        number={1}
        type={"BRSR"}
        supplies={20}
        score={0}
        classify={"Medium"}
        status={"PENDING"}
        result={"-"}
      />
    </div>
  );
};
