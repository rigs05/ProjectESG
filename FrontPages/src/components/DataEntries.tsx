import { DummyData } from "./DummyData";

export const DataEntries = () => {
  return (
    <div className='m-5 h-[500px] shadow-sm rounded-md'>
      {/* Data Title */}
      {/* <div className='grid grid-cols-9 font-sans font-bold p-2 text-sm rounded-t-md bg-gray-light'> */}
      <div className='grid grid-cols-9 gap-4 items-center text-sm p-2 font-sans font-semibold rounded-t-md bg-gray-light'>
        <div className='text-center'>
          <input id='default-checkbox' type='checkbox' className='w-4 h-4' />
        </div>
        <div className='text-center'>ASSESSMENT TITLE</div>
        <div className='text-center'>TYPE</div>
        <div className='text-center'>NO. OF SUPPLIES</div>
        <div className='text-center'>SCORE</div>
        <div className='text-center'>RISK CLASSIFICATION</div>
        <div className='text-center'>STATUS</div>
        <div className='text-center'>RESULT</div>
        <div className='text-center'>ACTIONS</div>
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
      <DummyData
        number={2}
        type={"BRSR"}
        supplies={25}
        score={98}
        classify={"Low"}
        status={"COMPLETE"}
        result={"View"}
      />
      <DummyData
        number={3}
        type={"BRSR"}
        supplies={35}
        score={22}
        classify={"High"}
        status={"COMPLETE"}
        result={"View"}
      />
      <DummyData
        number={4}
        type={"Custom"}
        supplies={49}
        score={23}
        classify={"Medium"}
        status={"COMPLETE"}
        result={"View"}
      />
      <DummyData
        number={5}
        type={"Custom"}
        supplies={100}
        score={42}
        classify={"Medium"}
        status={"COMPLETE"}
        result={"View"}
      />
    </div>
  );
};
