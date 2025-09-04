import React from 'react'

export default function Modal({isOpen , handleClose}) {
  return (
<div>
     {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal Content */}
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
            <p className="mb-4">This is a custom modal using Tailwind CSS.</p>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2 hover:bg-gray-400"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleClose}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

