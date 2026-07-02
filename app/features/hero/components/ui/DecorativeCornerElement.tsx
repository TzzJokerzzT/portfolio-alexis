export const DecorativeCornerElement = () => {
  return (
    <>
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64">
        <div className="absolute top-0 right-0 w-full h-full border-r-4 border-t-4 border-p5-red" />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64">
        <div className="absolute bottom-0 left-0 w-full h-full border-l-4 border-b-4 border-p5-red" />
      </div>
    </>
  );
};
