import { Html } from "@react-three/drei";

export default function SkillControls() {
  return (
    <Html position={[0, 5, 0]} center>
      <div className="bg-black w-[300px] text-white text-sm p-2 rounded-md shadow-lg border border-white max-w-xs">
        <h3 className="text-lg font-bold">📜 Controles 📜</h3>
        <ul>
          <li>🖱️ <strong>LMB:</strong> Rotar / Girar vista</li>
          <li>🎮 <strong>RMB:</strong> Mover por el espacio</li>
          <li>🔍 <strong>MMB / Scroll:</strong> Zoom</li>
        </ul>
      </div>
    </Html>
  );
}
