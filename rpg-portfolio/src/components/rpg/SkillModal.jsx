export default function SkillModal({ skill, onClose }) {
    const skillDetails = {
      Java: ["Spring", "Hibernate", "Struts2"],
      ".NET C#": ["Entity Framework", "Azure AI-900"],
    //   Python: ["Django", "Flask"],
    };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-100">
          <h2 className="text-xl font-bold text-yellow-400">{skill}</h2>
          <ul className="mt-4 space-y-2">
            {skillDetails[skill]?.map((framework) => (
              <li key={framework} className="text-white">
                - {framework}
              </li>
            ))}
          </ul>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  }
  