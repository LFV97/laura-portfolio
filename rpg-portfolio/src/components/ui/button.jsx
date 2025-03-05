export function Button({ children, onClick }) {
    return (
      <button
        onClick={onClick}
        className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-700 transition"
      >
        {children}
      </button>
    );
  }
  