const Container = ({ children }) => {
  return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center gap-2">
      {children}
    </div>
  );
};

export default Container;
