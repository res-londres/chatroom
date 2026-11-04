function ErrorView() {
  return (
    <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-2 md:p-4">
      <div className="flex-1 flex justify-center flex-col items-center text-[#65676B]">
        <span className="text-2xl icon-[ph--leaf-fill]"></span>
        <span>Something went wrong</span>
        <span>Please try again later</span>
      </div>
    </div>
  )
}

export default ErrorView;