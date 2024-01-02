export const Button = ({ label, onClick, color, ...props }) => {
    return (
      <div
        style={{
          ...buttonStyles.container,
          backgroundColor: color === "secondary" ? "#f8f3ed" : "#7a4ec7",
        }}
        onClick={onClick}
      >
        <div style={{ textAlign: "center" }}>{label}</div>
      </div>
    );
  };
  
  const buttonStyles = {
    container: {
      width: "95%",
      padding: "10px",
      fontSize: "16px",
      backgroundColor: "#f8f3ed",
      color: "black",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer", // Add cursor pointer style
    },
  };
  