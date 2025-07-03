import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

const NeuralNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createNodes = () => {
      const nodes: Node[] = [];
      const nodeCount = 25;
      
      for (let i = 0; i < nodeCount; i++) {
        const node: Node = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          connections: []
        };
        
        // Create connections to nearby nodes
        for (let j = 0; j < nodes.length; j++) {
          const distance = Math.sqrt(
            Math.pow(node.x - nodes[j].x, 2) + Math.pow(node.y - nodes[j].y, 2)
          );
          if (distance < 150 && Math.random() > 0.7) {
            node.connections.push(j);
            nodes[j].connections.push(i);
          }
        }
        
        nodes.push(node);
      }
      nodesRef.current = nodes;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const nodes = nodesRef.current;
      const time = Date.now() * 0.001;
      
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Keep within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
        
        // Draw connections
        node.connections.forEach(connectionIndex => {
          if (connectionIndex < nodes.length) {
            const connectedNode = nodes[connectionIndex];
            const pulse = Math.sin(time * 2 + i * 0.5) * 0.5 + 0.5;
            
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 * pulse})`;
            ctx.lineWidth = 1 + pulse;
            ctx.stroke();
          }
        });
        
        // Draw node
        const pulse = Math.sin(time * 3 + i * 0.3) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3 + pulse * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${pulse})`;
        ctx.fill();
        
        // Glow effect
        ctx.beginPath();
        ctx.arc(node.x, node.y, 8 + pulse * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${0.1 * pulse})`;
        ctx.fill();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createNodes();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createNodes();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
      style={{ background: 'transparent' }}
    />
  );
};

export default NeuralNetwork;