
import { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const Canvas = ({ config }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas('uniform-canvas', {
      width: 500,
      height: 600,
      backgroundColor: '#f5f5f5',
    });
    canvasRef.current = canvas;

    // Draw jersey base
    const jersey = new fabric.Rect({
      width: 300,
      height: 400,
      fill: config.colors.base,
      top: 100,
      left: 100,
      selectable: false,
    });
    canvas.add(jersey);

    // Add text
    config.text.forEach((txt) => {
      const textObj = new fabric.Text(txt.content, {
        left: txt.position.x,
        top: txt.position.y,
        fill: txt.color,
        fontFamily: txt.font,
        scaleX: txt.scale,
        scaleY: txt.scale,
        angle: txt.rotation,
      });
      canvas.add(textObj);
    });

    // Add logos
    config.logos.forEach((logo) => {
      fabric.Image.fromURL(logo.src, (img) => {
        img.set({
          left: logo.position.x,
          top: logo.position.y,
          scaleX: logo.scale,
          scaleY: logo.scale,
          angle: logo.rotation,
        });
        canvas.add(img);
      });
    });

    return () => {
      canvas.dispose();
    };
  }, [config]);

  return (
    <div className="border border-gray-300 rounded shadow bg-white">
      <canvas id="uniform-canvas" className="mx-auto my-4" />
    </div>
  );
};

export default Canvas;
