import { useState, useEffect } from "react";

const messages = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    subject: "Pricing question",
    message: "Hello, I would like to know more about your pricing plans.",
    date: "Nov 27, 2026",
  },
  {
    id: 2,
    name: "Mary Smith",
    email: "mary@example.com",
    subject: "Partnership inquiry",
    message: "We are interested in partnering with your team on a project.",
    date: "Nov 26, 2026",
  },
  {
    id: 3,
    name: "Samuel Okoro",
    email: "samuel@example.com",
    subject: "Bug report",
    message: "The login page shows an error when I use a long password.",
    date: "Nov 25, 2026",
  },
  {
    id: 4,
    name: "Aisha Bello",
    email: "aisha@example.com",
    subject: "Feature request",
    message: "It would be great to have a dark mode option.",
    date: "Nov 24, 2026",
  },
];

const Contacts = () => {
  // Holds the message being read, or null when the modal is closed
  const [selected, setSelected] = useState(null);

  // Close the modal when Escape is pressed
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Contact Messages</h1>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                  #
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                  Email
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                  Subject
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                  Message
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {messages.map((msg, index) => (
                <tr key={msg.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">
                    {msg.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {msg.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {msg.subject}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                    {msg.message}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                    {msg.date}
                  </td>
                  <td className="px-6 py-4 text-sm whitespace-nowrap space-x-4">
                    <button
                      onClick={() => setSelected(msg)}
                      className="text-blue-600 hover:underline"
                    >
                      Read
                    </button>
                    <button className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {messages.length === 0 && (
          <p className="p-6 text-sm text-gray-500 text-center">
            No messages yet.
          </p>
        )}
      </div>

      {/* Read message modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-xl w-full max-w-lg max-h-[90vh] flex flex-col shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 px-6 py-4 border-b border-gray-200">
              <div className="min-w-0">
                <h2 className="text-lg font-semibold text-gray-800 break-words">
                  {selected.subject}
                </h2>
                <p className="text-xs text-gray-500 mt-1">{selected.date}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            {/* Body (scrolls if the message is long) */}
            <div className="px-6 py-4 overflow-y-auto space-y-4">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase">
                  From
                </p>
                <p className="text-sm text-gray-800">{selected.name}</p>
                <a
                  href={`mailto:${selected.email}`}
                  className="text-sm text-blue-600 hover:underline"
                >
                  {selected.email}
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase">
                  Message
                </p>
                <p className="text-sm text-gray-700 whitespace-pre-wrap break-words mt-1">
                  {selected.message}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
              <a
                href={`mailto:${selected.email}?subject=Re: ${selected.subject}`}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700"
              >
                Reply
              </a>
              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;
