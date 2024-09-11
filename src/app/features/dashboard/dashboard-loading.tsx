const DashboardLoading = () => {
  const array = new Array(6).fill(null);
  return (
    <div className="w-full flex flex-wrap gap-6 animate-pulse">
      {[...array].map((_, i) => (
        <div
          key={i}
          className="w-[392px] h-[210px] bg-slate-300 flex flex-col items-center justify-center rounded-lg"
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default DashboardLoading;
