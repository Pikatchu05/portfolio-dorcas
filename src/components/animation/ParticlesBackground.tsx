import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.8;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
`;

interface CodeLine {
  x: number;
  y: number;
  chars: string;
  speed: number;
  length: number;
  maxLength: number;
  color: string;
  delay: number;
  active: boolean;
}

interface UIElement {
  x: number;
  y: number;
  width: number;
  height: number;
  type: 'button' | 'input' | 'window' | 'menu';
  color: string;
  borderRadius: number;
  alpha: number;
  speed: number;
  targetAlpha: number;
}

const CodeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const codeLines: CodeLine[] = [];
  const uiElements: UIElement[] = [];
  const codeColors = ['#0f0', '#00ffff', '#0088ff', '#66ff66', '#ffffff'];
  const uiColors = ['#4a93ff', '#6b9bd1', '#ffffff', '#66ff66', '#ff6b6b'];
  
  // Code snippets
  const codeSnippets = [
    "function createComponent() {",
    "import React from 'react';",
    "const App = () => {",
    "return <div>Hello</div>;",
    "useEffect(() => {",
    "const data = fetchAPI();",
    "interface User {",
    "export default function();",
    "const [state, setState] = useState();",
    "styled.div`",
    "npm install react",
    "git commit -m 'update'",
    "async function load() {",
    "const response = await fetch();",
    "<FaReact className={style} />",
    "background: linear-gradient();",
    "@media screen and (max-width: 768px) {",
    "animation: fadeIn 1s ease-in-out;",
    "const router = useRouter();",
    "npm run build",
    "<div className='container'>",
    "const result = data.map(item => (",
    "ReactDOM.render(",
    "position: absolute;",
    "transform: translateY(-50%);"
  ];

  const initCodeLines = (canvas: HTMLCanvasElement) => {
    const totalLines = Math.floor(canvas.height / 30); // 30px spacing between lines
    
    for (let i = 0; i < totalLines; i++) {
      const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      const y = i * 30 + Math.random() * 20;
      codeLines.push({
        x: Math.random() * canvas.width,
        y,
        chars: snippet,
        speed: 0.5 + Math.random() * 2,
        length: 0,
        maxLength: snippet.length,
        color: codeColors[Math.floor(Math.random() * codeColors.length)],
        delay: Math.random() * 200,
        active: false
      });
    }
  };

  const initUIElements = (canvas: HTMLCanvasElement) => {
    const totalElements = 15;
    
    for (let i = 0; i < totalElements; i++) {
      const type = ['button', 'input', 'window', 'menu'][Math.floor(Math.random() * 4)] as 'button' | 'input' | 'window' | 'menu';
      let width, height;
      
      switch (type) {
        case 'button':
          width = 80 + Math.random() * 100;
          height = 30 + Math.random() * 20;
          break;
        case 'input':
          width = 150 + Math.random() * 200;
          height = 30 + Math.random() * 20;
          break;
        case 'window':
          width = 250 + Math.random() * 350;
          height = 200 + Math.random() * 300;
          break;
        case 'menu':
          width = 150 + Math.random() * 200;
          height = 40 + Math.random() * 200;
          break;
      }
      
      uiElements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width,
        height,
        type,
        color: uiColors[Math.floor(Math.random() * uiColors.length)],
        borderRadius: 4 + Math.random() * 10,
        alpha: 0,
        speed: 0.005 + Math.random() * 0.01,
        targetAlpha: 0.1 + Math.random() * 0.4
      });
    }
  };

  const animateCodeLines = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    // Draw and update code lines
    codeLines.forEach(line => {
      if (line.delay > 0) {
        line.delay--;
        return;
      }
      
      line.active = true;
      
      if (line.length < line.maxLength) {
        line.length += line.speed / 10;
      } else {
        // Reset if it moves off screen completely
        if (line.x > canvas.width) {
          line.x = -line.maxLength * 10; // Move to left side out of view
          line.y = Math.random() * canvas.height;
          line.length = 0;
          const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
          line.chars = snippet;
          line.maxLength = snippet.length;
          line.color = codeColors[Math.floor(Math.random() * codeColors.length)];
          line.delay = Math.random() * 100;
          line.active = false;
        } else {
          line.x += line.speed;
        }
      }
      
      if (line.active) {
        ctx.font = '14px monospace';
        ctx.fillStyle = line.color;
        const displayText = line.chars.substring(0, Math.floor(line.length));
        ctx.fillText(displayText, line.x, line.y);
      }
    });
  };

  const animateUIElements = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    // Draw and update UI elements
    uiElements.forEach(el => {
      // Update alpha
      if (el.alpha < el.targetAlpha) {
        el.alpha += el.speed;
      } else {
        // Reset position when fully visible
        el.x += (Math.random() - 0.5) * 0.5;
        el.y += (Math.random() - 0.5) * 0.5;
        
        // If moved off screen, reset
        if (el.x > canvas.width || el.x + el.width < 0 || el.y > canvas.height || el.y + el.height < 0) {
          el.x = Math.random() * canvas.width;
          el.y = Math.random() * canvas.height;
          el.alpha = 0;
          el.targetAlpha = 0.1 + Math.random() * 0.3;
        }
      }
      
      // Draw element
      ctx.globalAlpha = el.alpha;
      ctx.fillStyle = el.color;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      
      ctx.beginPath();
      ctx.roundRect(el.x, el.y, el.width, el.height, el.borderRadius);
      ctx.fill();
      ctx.stroke();
      
      // Add details based on type
      switch (el.type) {
        case 'button':
          ctx.fillStyle = '#ffffff';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.font = '12px sans-serif';
          ctx.fillText('Button', el.x + el.width/2, el.y + el.height/2);
          break;
          
        case 'input':
          ctx.fillStyle = '#111';
          ctx.fillRect(el.x + 5, el.y + 5, el.width - 10, el.height - 10);
          break;
          
        case 'window':
          // Window header
          ctx.fillStyle = '#333';
          ctx.fillRect(el.x, el.y, el.width, 25);
          
          // Window title
          ctx.fillStyle = '#fff';
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          ctx.font = '12px sans-serif';
          ctx.fillText('Window', el.x + 10, el.y + 12);
          
          // Window controls
          ctx.fillStyle = '#ff5f5f';
          ctx.beginPath();
          ctx.arc(el.x + el.width - 15, el.y + 12, 5, 0, Math.PI * 2);
          ctx.fill();
          break;
          
        case 'menu':
          // Menu items
          for (let i = 0; i < 4; i++) {
            ctx.fillStyle = i % 2 === 0 ? '#222' : '#333';
            ctx.fillRect(el.x, el.y + (i * 40), el.width, 40);
            
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.font = '12px sans-serif';
            ctx.fillText(`Menu Item ${i+1}`, el.x + 15, el.y + (i * 40) + 20);
          }
          break;
      }
      
      ctx.globalAlpha = 1;
    });
  };

  const animate = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    animateCodeLines(ctx, canvas);
    animateUIElements(ctx, canvas);
    
    requestAnimationFrame(() => animate(ctx, canvas));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Reset arrays
    codeLines.length = 0;
    uiElements.length = 0;
    
    // Initialize
    initCodeLines(canvas);
    initUIElements(canvas);
    
    // Start animation
    animate(ctx, canvas);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default CodeBackground;
