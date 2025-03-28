
import { useState } from 'react';

const fonts = ['Arial', 'Verdana', 'Georgia', 'Impact', 'Courier New', 'Varsity'];

const Toolbar = ({ onUpdate }) => {
  const [teamName, setTeamName] = useState('BELLES');
  const [font, setFont] = useState('Varsity');
  const [color, setColor] = useState('#ffffff');
  const [baseColor, setBaseColor] = useState('#1a1a1a');
  const [logoUrl, setLogoUrl] = useState('');

  const handleUpdate = () => {
    const config = {
      colors: {
        base: baseColor,
        accent1: '#ffffff',
        accent2: '#f44336',
      },
      text: [
        {
          content: teamName,
          font,
          color,
          position: { x: 120, y: 40 },
          scale: 1.0,
          rotation: 0,
          layerIndex: 1,
        },
      ],
      logos: logoUrl
        ? [
            {
              src: logoUrl,
              position: { x: 100, y: 80 },
              scale: 0.75,
              rotation: 0,
              layerIndex: 2,
            },
          ]
        : [],
    };
    onUpdate(config);
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <div className="mb-2">
        <label className="block font-semibold">Team Name</label>
        <input
          className="w-full border px-2 py-1 rounded"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label className="block font-semibold">Font</label>
        <select
          className="w-full border px-2 py-1 rounded"
          value={font}
          onChange={(e) => setFont(e.target.value)}
        >
          {fonts.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label className="block font-semibold">Text Color</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label className="block font-semibold">Jersey Base Color</label>
        <input
          type="color"
          value={baseColor}
          onChange={(e) => setBaseColor(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label className="block font-semibold">Logo URL</label>
        <input
          className="w-full border px-2 py-1 rounded"
          value={logoUrl}
          onChange={(e) => setLogoUrl(e.target.value)}
        />
      </div>
      <button
        onClick={handleUpdate}
        className="w-full mt-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Update Canvas
      </button>
    </div>
  );
};

export default Toolbar;
