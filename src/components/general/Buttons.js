export const RecordButton = ({ hand }) => (
  <div className="gradient w-36 h-36 flex flex-col gap-1 items-center justify-center rounded-full text-white">
    <img src={hand} alt="" />

    <span className="font-medium text-xl">report</span>
  </div>
);
