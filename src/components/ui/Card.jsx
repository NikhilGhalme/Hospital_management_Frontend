import React from "react";

export const Card = ({ children, className }) => (
  <div className={`rounded-lg border border-gray-200 shadow-sm p-4 ${className}`}>{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="mb-4 border-b pb-2">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h3 className="text-lg font-semibold">{children}</h3>
);

export const CardDescription = ({ children }) => (
  <p className="text-sm text-gray-600">{children}</p>
);

export const CardContent = ({ children }) => (
  <div className="mt-2">{children}</div>
);

export const CardFooter = ({ children }) => (
  <div className="mt-4">{children}</div>
);

// Additional reusable card definitions
export const SimpleCard = ({ children }) => (
  <div className="bg-white shadow rounded-lg p-4">{children}</div>
);

export const SimpleCardContent = ({ children }) => (
  <div className="mt-2">{children}</div>
);
