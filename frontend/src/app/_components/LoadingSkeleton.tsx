const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-16 bg-gray-300 rounded w-1/3"></div>
      <div className="h-16 bg-gray-200 rounded"></div>
    </div>
  );
};

export default LoadingSkeleton;
