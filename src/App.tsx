import { useEffect, useState } from "react";

function App() {
  const [firstNum, setFirstNum] = useState<number>();
  const [secNum, setSecNum] = useState<number>();
  const [user, setUser] = useState<number>();
  const [score, setScore] = useState<number>();

  useEffect(() => {
    setFirstNum(Math.floor(Math.random() * 10 + 1));
    setSecNum(Math.floor(Math.random() * 10 + 1));
  });

  return (
    <div className="w-full h-screen bg-slate-600 flex justify-center items-center">
      <div className="w-1/3 h-[420px] bg-gray-200 rounded-2xl">
        <div className="">
          Mennyi {firstNum} és {secNum} szorzata?
        </div>
      </div>
    </div>
  );
}

export default App;
