const buttonStyle = {
  margin: "1em",
  borderRadius: "5px",
  minHeight: "2em",
};

// ************************************************************************************************************************ //
// BUTTON FUNCTION COMPONENT (embedded in export) //////////////////////////////////////////////////////
// ************************************************************************************************************************ //
export default function Button({ onClick, children }) {
  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}
