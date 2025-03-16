export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`btn px-4 py-2 rounded-lg transition ${className}`}
    >
      {children}
    </button>
  );
}
