import { FC } from "react";
import { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Year: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [year, setYear] = useState<string>(searchParams.get("year") || "");
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    //inputa yil girildiyse url'e aktar yoksa kaldir
    if (year) {
      searchParams.set("year", year);
    } else {
      searchParams.delete("year");
    }
    setSearchParams(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label>Yil</label>

      <div className="flex">
        <input
          value={year}
          type="number"
          placeholder="orn:2025"
          onChange={(e) => setYear(e.target.value)}
          className="w-28 py-[6px] px-2 rounded-l-[4px] shadow text-black bg-white border-r border-zinc-200"
        />
        <button className="bg-white rounded-r text-blue-500 hover:bg-zinc-200 transition cursor-pointer px-3">
          🔎
        </button>
      </div>
    </form>
  );
};

export default Year;
