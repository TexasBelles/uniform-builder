import { useState } from 'react';
import Canvas from '../components/Canvas';
import Toolbar from '../components/Toolbar';

export default function BuilderPage() {
  const [config, setConfig] = useState({
    colors: { base: '#1a1a1a', accent1: '#ffffff', accent2: '#f44336' },
    text: [],
    logos: [],
  });

  return (
    <div className="flex gap-4 p-4 min-h-screen bg-gray-50">
      <div className="w-1/3">
        <Toolbar onUpdate={setConfig} />
      </div>
      <div className="w-2/3">
        <Canvas config={config} />
      </div>
    </div>
  );
}
