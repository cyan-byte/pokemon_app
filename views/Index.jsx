// Import React
const React = require("react");

// Define your JSX component
const Index = () => {
  // Inline styles as an object
  const headerStyle = {
    textAlign: "center",
    backgroundColor: "#007BFF",
    color: "white",
    padding: "20px",
  };

  return (
    <html>
      <head>
        <title>See All The Pokemon</title>
      </head>
      <body>
        <div>
          {/* Inline styles applied to the <h1> element */}
          <h1 style={headerStyle}>See All The Pokemon!</h1>
        </div>
      </body>
    </html>
  );
};

// Export the component
module.exports = Index;
