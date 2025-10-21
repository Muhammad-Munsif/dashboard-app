import React from "react";
import {
  FiHome,
  FiBarChart2,
  FiUsers,
  FiShoppingBag,
  FiFileText,
  FiCalendar,
  FiMail,
  FiPieChart,
  FiHelpCircle,
  FiX,
} from "react-icons/fi";

const Sidebar = ({ isOpen, isMobile, onClose }) => {
  const menuItems = [
    { icon: FiHome, label: "Dashboard", active: true },
    { icon: FiBarChart2, label: "Analytics" },
    { icon: FiUsers, label: "Users" },
    { icon: FiShoppingBag, label: "Products" },
    { icon: FiFileText, label: "Invoices" },
    { icon: FiCalendar, label: "Calendar" },
    { icon: FiMail, label: "Messages" },
    { icon: FiPieChart, label: "Reports" },
  ];

  const sidebarClasses = `
    bg-white border-r border-gray-200 transform transition-all duration-300 ease-in-out
    flex flex-col h-full
    ${isMobile ? "fixed inset-y-0 left-0 z-40 w-64" : "relative w-64"}
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `;

  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={sidebarClasses}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-indigo-600">Dashboard</h1>
            {isMobile && (
              <button
                onClick={onClose}
                className="p-1 rounded-md text-gray-400 hover:text-gray-600"
              >
                <FiX className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  item.active
                    ? "bg-indigo-50 text-indigo-700 border border-indigo-100"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </a>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="border-t border-gray-200 p-4">
            <a
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900"
            >
              <FiHelpCircle className="mr-3 h-5 w-5" />
              Help & Support
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
