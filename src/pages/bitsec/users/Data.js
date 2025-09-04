import { useState, useEffect, useMemo } from "react";
import { Search } from "lucide-react";
// import Modal from "../../../components/modal/Modal";
import axios from "axios";
import Table from "./Table";
export default function Data() {
  const [data, setData] = useState();
  console.log("data", data);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(res.data);
      } catch (err) {
        console.error("Error:", err);
      }
    }

    getUsers();
  }, []);

  // 🔍 Filter data by name or email
  const filteredData = useMemo(() => {
    return data?.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  // 📄 Pagination logic
  const totalPages = Math.ceil(filteredData?.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = filteredData?.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <div className="p-6 bg-gray-100 ">
        {/* Heading + Paragraph */}
        <div className="mb-6 block md:flex  justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">User Directory</h1>
            <p className="text-gray-600 text-sm mt-1">
              Manage your user database with ease
            </p>
          </div>

          <div className="relative w-[100%] md:w-[40%]">
            <input
              type="text"
              placeholder="Search users..."
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 pl-10 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />

            <div className="absolute left-3 top-2.5  text-gray-400">
              <Search size={20} />
            </div>
          </div>
        </div>

        {/* Table */}

        <Table
          data={data}
          paginatedData={paginatedData}
          startIndex={startIndex}
          rowsPerPage={rowsPerPage}
          filteredData={filteredData}
          handlePrev={handlePrev}
          currentPage={currentPage}
          handleNext={handleNext}
          totalPages={totalPages}
        ></Table>
      </div>
    </>
  );
}
