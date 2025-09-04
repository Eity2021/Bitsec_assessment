// import React, { useState } from "react";
// import { Eye, Pencil, Trash2, ChevronRight, ChevronLeft } from "lucide-react";
// import Modal from "../../../components/modal/Modal";

export default function Data() {
  // const data = [
  //   { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  //   { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Member" },
  //   { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Admin" },
  //   { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Member" },
  // ];

  return (
    <>
      <div className="p-6 bg-gray-100 h-screen">
        {/* Heading + Paragraph */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            User/Merchant Management
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Manage all registered users, update their roles, and perform actions
            like view, edit, or delete.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-primary text-white">
              <tr>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Role</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {/* {user?.users?.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-100 transition">
                  <td className="py-3 px-4">{user.id}</td>
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">{user.role}</td>
                  <td className="py-3 px-4 flex gap-2">
                    <button className="bg-primary text-white px-2 py-1 rounded hover:bg-primary transition">
                      <Eye size={14} />
                    </button>
                    <button className="bg-editButton text-white px-2 py-1 rounded hover:bg-editButton transition">
                      <Pencil size={14} />
                    </button>
                    <button className="bg-danger text-white px-2 py-1 rounded hover:bg-danger transition">
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
