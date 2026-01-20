
import React, { useEffect, useRef } from 'react';

const MouseTrailEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };
    let time = 0;

    // Configuration "Poussière HD"
    // Beaucoup de particules très fines
    const particleCount = window.innerWidth > 1600 ? 1000 : 600; 
    const mouseInfluenceRadius = 300;
    const baseSpeed = 0.35; // Vitesse de déplacement ralentie pour laisser place à la "respiration"

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      baseOpacity: number;
      angle: number;
      phase: number; // Phase unique pour la respiration décalée
      breathSpeed: number; // Vitesse de respiration unique
    }

    const particles: Particle[] = [];

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        const isBlue = Math.random() > 0.94;
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: 0,
          vy: 0,
          // Taille très variable : de la micro-poussière (0.5px) aux gros grains (2px)
          size: Math.random() * 1.5 + 0.5, 
          color: isBlue ? '37, 99, 235' : '255, 255, 255',
          // Opacité de base plus faible pour un effet subtil
          baseOpacity: Math.random() * 0.2 + 0.05, 
          angle: 0,
          // Chaque particule commence sa respiration à un moment différent
          phase: Math.random() * Math.PI * 2,
          // Vitesse de respiration légèrement différente pour éviter l'effet "robot"
          breathSpeed: 0.01 + Math.random() * 0.02 
        });
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const draw = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.002; // Temps global qui avance

      particles.forEach(p => {
        // --- 1. Respiration (Pulsation) ---
        // On fait varier la taille et l'opacité selon une onde sinusoïdale
        // p.phase + time * ... crée le décalage
        const breathCycle = Math.sin(p.phase + time * 0.5); // Cycle lent -1 à 1
        
        // Facteur de respiration (0 à 1)
        const breathFactor = (breathCycle + 1) / 2; 

        // --- 2. Mouvement (Flow Field) ---
        const noiseX = p.x * 0.0015;
        const noiseY = p.y * 0.0015;
        
        const flowAngle = 
          Math.cos(noiseX + time) * Math.PI + 
          Math.sin(noiseY + time * 0.5) * Math.PI * 0.5;

        // --- 3. Interaction Souris ---
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let targetAngle = flowAngle;
        let speed = baseSpeed;

        if (dist < mouseInfluenceRadius) {
            const angleToMouse = Math.atan2(dy, dx);
            const influence = 1 - (dist / mouseInfluenceRadius);
            
            let diff = angleToMouse - flowAngle;
            while (diff < -Math.PI) diff += Math.PI * 2;
            while (diff > Math.PI) diff -= Math.PI * 2;
            
            targetAngle = flowAngle + diff * (influence * 0.8);
            speed = baseSpeed + influence * 2.5;
        }

        // --- 4. Physique ---
        let angleDiff = targetAngle - p.angle;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        
        p.angle += angleDiff * 0.08;

        p.vx = Math.cos(p.angle) * speed;
        p.vy = Math.sin(p.angle) * speed;

        p.x += p.vx;
        p.y += p.vy;

        // Wrapping
        const padding = 10;
        if (p.x < -padding) p.x = canvas.width + padding;
        if (p.x > canvas.width + padding) p.x = -padding;
        if (p.y < -padding) p.y = canvas.height + padding;
        if (p.y > canvas.height + padding) p.y = -padding;

        // --- 5. Rendu "Poussière Vivante" ---
        
        // Calcul de l'opacité dynamique (Base + Respiration)
        // La respiration ajoute jusqu'à 50% d'opacité en plus
        let currentOpacity = p.baseOpacity * (0.6 + 0.8 * breathFactor);
        
        // Calcul de la taille dynamique (légère pulsation)
        let currentSize = p.size * (0.8 + 0.4 * breathFactor);

        // Interaction souris surbrillance
        if (dist < mouseInfluenceRadius) {
            const influence = 1 - (dist / mouseInfluenceRadius);
            currentOpacity += influence * 0.6; // Devient beaucoup plus visible
            currentSize += influence * 0.5;    // Grossit légèrement
            
            if (influence > 0.5) {
                ctx.shadowBlur = 8 * influence;
                ctx.shadowColor = `rgba(${p.color}, 0.5)`;
            } else {
                ctx.shadowBlur = 0;
            }
        } else {
            ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${Math.min(currentOpacity, 1)})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0 mix-blend-screen"
    />
  );
};

export default MouseTrailEffect;
