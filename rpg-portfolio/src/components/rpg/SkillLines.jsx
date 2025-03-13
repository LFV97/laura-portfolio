import { Html } from "@react-three/drei";
import { Line } from "@react-three/drei";
import "../../styles/RpgSkillTree.css"

export default function SkillLines({ skills }) {
  const connections = [
    ["frontend", "html"],
    ["frontend", "css"],
    ["frontend", "javascript"],
    ["javascript", "react"],
    ["css", "bootstrap"],
    ["css", "tailwindcss"],
    ["backend", "java"],
    ["ai", "csharp"],
    ["ai", "cplusplus"],
    ["ai", "python"],
  ];
  
  return (
    <>
      {connections.map(([from, to], index) => {
        const start = skills.find((s) => s.id === from)?.position;
        const end = skills.find((s) => s.id === to)?.position;
      
        return start && end ? (
          <Line key={index} points={[start, end]} color="white" lineWidth={2} />
        ) : null;
      })}
    </>
    )
  }
// return (
//   <>
//     {connections.map(([from, to], index) => {
//       const start = skills.find((s) => s.id === from)?.position;
//       const end = skills.find((s) => s.id === to)?.position;
    
//       if (!start || !end) return null;

//         // Convertir coordenadas a píxeles
//         const midX = (start[0] + end[0]) / 2;
//         const midY = (start[1] + end[1]) / 2;
//         const width = Math.sqrt(
//           Math.pow(end[0] - start[0], 2) + Math.pow(end[1] - start[1], 2)
//         );

//         return (
//           <Html position={[midX, midY, 0]} key={index}>
//             <div
//               className="glowing-line"
//               style={{
//                 width: `${width * 20}px`,
//                 transform: `rotate(${Math.atan2(
//                   end[1] - start[1],
//                   end[0] - start[0]
//                 )}rad)`,
//               }}
//             ></div>
//           </Html>
//         );
//       })}
//     </>
//   );
// }
