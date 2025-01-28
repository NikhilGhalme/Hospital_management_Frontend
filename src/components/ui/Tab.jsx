import React from "react";

export const Tabs = ({ children, defaultValue, className }) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue || "");

  return (
    <div className={`tabs-container ${className}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
};

export const TabsList = ({ children, activeTab, setActiveTab }) => (
  <div className="flex border-b">
    {React.Children.map(children, (child) =>
      React.cloneElement(child, { activeTab, setActiveTab })
    )}
  </div>
);

export const TabsTrigger = ({ value, children, activeTab, setActiveTab }) => (
  <button
    className={`px-4 py-2 text-sm ${
      activeTab === value ? "border-b-2 border-blue-500 font-semibold" : "text-gray-600"
    }`}
    onClick={() => setActiveTab(value)}
  >
    {children}
  </button>
);

export const TabsContent = ({ value, activeTab, children }) => {
  return activeTab === value ? <div className="mt-4">{children}</div> : null;
};
