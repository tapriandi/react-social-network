import { AiOutlineSearch } from "react-icons/ai";

export default function SearchForm({ className }) {
  return (
    <form className={`relative ${className}`}>
      <input
        type="text"
        className="w-full h-10 p-2 pr-10 border ring-lightgreen rounded ring-[1px] focus:ring-main"
      />
      <AiOutlineSearch className="absolute right-3 top-3 text-lg cursor-pointer" />
    </form>
  );
}
