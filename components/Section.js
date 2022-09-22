import React from "react";

function Section({ children }) {
  return (
    <main className="max-w-3xl mx-auto p-5 md:p-0 md:py-6">{children}</main>
  );
}

export default Section;
