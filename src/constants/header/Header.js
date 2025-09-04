import TopHeader from "./TopHeader";
export default function Header({ isOpen, setIsOpen }) {
  return (
    <>
      <header
        className={`bg-[rgba(37,47,63,0.09)] shadow-md px-12 py-4 relative`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex text-gray-800 focus:outline-none absolute top-9 left-6">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <TopHeader></TopHeader>
      </header>
    </>
  );
}
