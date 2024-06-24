import React from "react";

export const DummyDataTracker = ({
  month,
  status,
  statusValue,
  completion,
  unit,
}: {
  month: string;
  status: string;
  statusValue: string;
  completion: number;
  unit: string;
}) => {
  return (
    <div className='grid grid-cols-4 gap-4 p-2 items-center font-sans text-sm'>
      <div className='p-2'>{month}</div>
      <StatusWrapper status={status} value={statusValue} />
      {/* </StatusWrapper> */}
      <div className='p-2 ml-5'>{completion}%</div>
      <div className='p-2'>{unit}</div>
    </div>
  );
};

const StatusPending = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-red-200 text-red-500 p-2 w-fit text-xs rounded-sm font-semibold text-center'>
      {children}
    </div>
  );
};

const StatusApproved = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-green-200 text-green-submit p-2 w-fit text-xs rounded-sm font-semibold text-center'>
      {children}
    </div>
  );
};

const StatusIncomplete = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-yellow-300 text-yellow-600 p-2 w-fit text-xs rounded-sm font-semibold text-center'>
      {children}
    </div>
  );
};

const StatusWrapper = ({
  status,
  value,
}: //   children,
{
  status: string;
  value: string;
  //   children: string;
}) => {
  switch (status) {
    case "PENDING APPROVAL":
      return (
        <StatusPending>
          {status} {value}
        </StatusPending>
      );
    case "APPROVED":
      return (
        <StatusApproved>
          {status} {value}
        </StatusApproved>
      );
    case "INCOMPLETE":
      return (
        <StatusIncomplete>
          {status} {value}
        </StatusIncomplete>
      );
    default:
      return <div>{"NULL"}</div>;
  }
};
