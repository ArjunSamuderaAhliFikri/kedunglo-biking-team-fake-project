import Header from "../Elements/Header";
const LoadingComponent = () => {
  return (
    <div className="flex justify-center items-center gap-3 mx-auto p-3">
      <div
        className="flex justify-center items-center size-10
           rounded-full bg-gradient-to-r from-sky-500 to-blue-700 animate-spin"
      >
        <div className="size-7 rounded-full bg-slate-200"></div>
      </div>
      <Header classname="text-md font-semibold capitalize text-slate-700">
        loading...
      </Header>
    </div>
  );
};

export default LoadingComponent;
