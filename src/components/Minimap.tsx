function Minimap() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="w-16 h-16"></div>
        <div className="w-16 h-16"></div>
        <div className="bg-white border-black border-4 w-16 h-16 font-bold text-3xl items-center flex justify-center">
          [B]
        </div>
      </div>
      <div className="flex flex-row">
        <div className="bg-white border-black border-4 border-r-0 w-16 h-16 font-bold text-3xl items-center flex justify-center">
          [S]
        </div>
        <div className="bg-white border-black border-4 border-l-0 w-16 h-16"></div>
        <div className="bg-white border-black border-4 w-16 h-16"></div>
      </div>
      <div className="flex flex-row">
        <div className="bg-white border-black border-4 border-r-0 border-b-0 w-16 h-16 font-bold text-3xl items-center flex justify-center">
          [P]
        </div>
        <div className="bg-white border-black border-4 border-l-0 border-b-0 w-16 h-16"></div>
        <div className="bg-white border-black border-4 w-16 h-16"></div>
        <div className="bg-white border-black border-4 border-b-0 w-16 h-16 font-bold text-3xl items-center flex justify-center">
          [C]
        </div>
        <div className="bg-white border-black border-4 w-16 h-16 font-bold text-3xl items-center flex justify-center">
          [C]
        </div>
      </div>
      <div className="flex flex-row">
        <div className="bg-white border-black border-4 border-r-0 border-t-0 w-16 h-16"></div>
        <div className="bg-white border-black border-4 border-l-0 border-t-0 w-16 h-16"></div>
        <div className="bg-white border-black border-4 w-16 h-16"></div>
        <div className="bg-white border-black border-4 border-t-0 w-16 h-16"></div>
        <div className="bg-white border-black border-4 w-16 h-16 font-bold text-3xl items-center flex justify-center">
          [C]
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-16 h-16"></div>
        <div className="w-16 h-16"></div>
        <div className="bg-white border-black border-4 w-16 h-16"></div>
      </div>
    </div>
  );
}

export default Minimap;
