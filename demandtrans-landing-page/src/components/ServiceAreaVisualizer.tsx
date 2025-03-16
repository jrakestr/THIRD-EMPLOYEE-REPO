import React, { useState, useRef, useEffect } from 'react';
import { Map, MapPin, Maximize, Minimize, Navigation, RotateCw } from 'lucide-react';
import BrandedButton from './BrandedButton';

const ServiceAreaVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'current' | 'optimized'>('current');
  const [zoom, setZoom] = useState<number>(1);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [serviceArea, setServiceArea] = useState<{x: number, y: number, width: number, height: number} | null>(null);
  const [optimizedArea, setOptimizedArea] = useState<{x: number, y: number, width: number, height: number} | null>(null);
  const [startPoint, setStartPoint] = useState<{x: number, y: number} | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize the map
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const updateCanvasSize = () => {
      if (!containerRef.current || !canvasRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      drawMap();
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  // Draw the map
  const drawMap = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw background map (simplified for demo)
    ctx.fillStyle = '#f3f4f6';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid lines
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    
    // Vertical grid lines
    for (let x = 0; x < canvas.width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    
    // Horizontal grid lines
    for (let y = 0; y < canvas.height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    
    // Draw roads
    ctx.strokeStyle = '#d1d5db';
    ctx.lineWidth = 3;
    
    // Main roads
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.2, 0);
    ctx.lineTo(canvas.width * 0.2, canvas.height);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.5, 0);
    ctx.lineTo(canvas.width * 0.5, canvas.height);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.8, 0);
    ctx.lineTo(canvas.width * 0.8, canvas.height);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(0, canvas.height * 0.3);
    ctx.lineTo(canvas.width, canvas.height * 0.3);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(0, canvas.height * 0.7);
    ctx.lineTo(canvas.width, canvas.height * 0.7);
    ctx.stroke();
    
    // Draw major intersections
    ctx.fillStyle = '#9ca3af';
    ctx.beginPath();
    ctx.arc(canvas.width * 0.2, canvas.height * 0.3, 5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(canvas.width * 0.5, canvas.height * 0.3, 5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(canvas.width * 0.8, canvas.height * 0.3, 5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(canvas.width * 0.2, canvas.height * 0.7, 5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(canvas.width * 0.5, canvas.height * 0.7, 5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(canvas.width * 0.8, canvas.height * 0.7, 5, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw service area if defined
    if (serviceArea && activeTab === 'current') {
      ctx.fillStyle = 'rgba(0, 86, 166, 0.2)';
      ctx.strokeStyle = 'rgba(0, 86, 166, 0.8)';
      ctx.lineWidth = 2;
      ctx.fillRect(serviceArea.x, serviceArea.y, serviceArea.width, serviceArea.height);
      ctx.strokeRect(serviceArea.x, serviceArea.y, serviceArea.width, serviceArea.height);
      
      // Draw transit stops
      drawTransitStops(ctx, serviceArea, 5);
    }
    
    // Draw optimized area if defined
    if (optimizedArea && activeTab === 'optimized') {
      ctx.fillStyle = 'rgba(0, 160, 223, 0.2)';
      ctx.strokeStyle = 'rgba(0, 160, 223, 0.8)';
      ctx.lineWidth = 2;
      ctx.fillRect(optimizedArea.x, optimizedArea.y, optimizedArea.width, optimizedArea.height);
      ctx.strokeRect(optimizedArea.x, optimizedArea.y, optimizedArea.width, optimizedArea.height);
      
      // Draw optimized transit stops
      drawTransitStops(ctx, optimizedArea, 8);
      
      // Draw connections between stops
      drawConnections(ctx, optimizedArea);
    }
  };
  
  // Draw transit stops
  const drawTransitStops = (ctx: CanvasRenderingContext2D, area: {x: number, y: number, width: number, height: number}, count: number) => {
    ctx.fillStyle = activeTab === 'current' ? '#0056a6' : '#00a0df';
    
    for (let i = 0; i < count; i++) {
      const x = area.x + Math.random() * area.width;
      const y = area.y + Math.random() * area.height;
      
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fill();
    }
  };
  
  // Draw connections between stops
  const drawConnections = (ctx: CanvasRenderingContext2D, area: {x: number, y: number, width: number, height: number}) => {
    ctx.strokeStyle = 'rgba(0, 160, 223, 0.6)';
    ctx.lineWidth = 2;
    
    // Create random points
    const points = [];
    for (let i = 0; i < 8; i++) {
      points.push({
        x: area.x + Math.random() * area.width,
        y: area.y + Math.random() * area.height
      });
    }
    
    // Connect points
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (Math.random() > 0.7) continue; // Only draw some connections
        
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[j].x, points[j].y);
        ctx.stroke();
      }
    }
  };
  
  // Handle mouse down event
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setIsDrawing(true);
    setStartPoint({ x, y });
  };
  
  // Handle mouse move event
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !startPoint || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const width = x - startPoint.x;
    const height = y - startPoint.y;
    
    setServiceArea({
      x: startPoint.x,
      y: startPoint.y,
      width,
      height
    });
    
    // Generate optimized area based on service area
    setOptimizedArea({
      x: startPoint.x - width * 0.1,
      y: startPoint.y - height * 0.1,
      width: width * 1.2,
      height: height * 1.2
    });
    
    drawMap();
  };
  
  // Handle mouse up event
  const handleMouseUp = () => {
    setIsDrawing(false);
  };
  
  // Handle zoom in
  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 0.1, 2));
  };
  
  // Handle zoom out
  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 0.1, 0.5));
  };
  
  // Handle reset
  const handleReset = () => {
    setServiceArea(null);
    setOptimizedArea(null);
    setZoom(1);
    drawMap();
  };
  
  // Update map when tab changes
  useEffect(() => {
    drawMap();
  }, [activeTab, zoom]);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-enterprise-primary to-enterprise-accent p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <Map className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold">Service Area Visualizer</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-6">
          Draw a service area on the map to visualize potential coverage improvements with DemandTrans solutions.
        </p>
        
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'current' ? 'text-enterprise-accent border-b-2 border-enterprise-accent' : 'text-gray-500 hover:text-enterprise-primary'}`}
            onClick={() => setActiveTab('current')}
          >
            Current Service
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'optimized' ? 'text-enterprise-accent border-b-2 border-enterprise-accent' : 'text-gray-500 hover:text-enterprise-primary'}`}
            onClick={() => setActiveTab('optimized')}
            disabled={!optimizedArea}
          >
            Optimized Service
          </button>
        </div>
        
        <div className="relative" ref={containerRef}>
          <div 
            className="relative h-[400px] border border-gray-200 rounded-lg overflow-hidden"
            style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }}
          >
            <canvas
              ref={canvasRef}
              className="absolute inset-0"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            ></canvas>
          </div>
          
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button 
              className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-700 hover:text-enterprise-accent"
              onClick={handleZoomIn}
            >
              <Maximize className="w-5 h-5" />
            </button>
            <button 
              className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-700 hover:text-enterprise-accent"
              onClick={handleZoomOut}
            >
              <Minimize className="w-5 h-5" />
            </button>
            <button 
              className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-700 hover:text-enterprise-accent"
              onClick={handleReset}
            >
              <RotateCw className="w-5 h-5" />
            </button>
          </div>
          
          {!serviceArea && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center">
                <MapPin className="w-6 h-6 text-enterprise-accent mx-auto mb-2" />
                <p className="text-gray-700">Click and drag to draw a service area</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-6 flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-enterprise-primary"></div>
            <span className="text-sm text-gray-600">Current Service Area</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-enterprise-accent"></div>
            <span className="text-sm text-gray-600">Optimized Service Area</span>
          </div>
          
          <div className="ml-auto">
            {optimizedArea && (
              <BrandedButton variant="accent" className="flex items-center gap-2">
                <Navigation className="w-4 h-4" /> View Detailed Analysis
              </BrandedButton>
            )}
          </div>
        </div>
        
        {activeTab === 'optimized' && optimizedArea && (
          <div className="mt-6 bg-gray-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-4 text-enterprise-primary">Optimization Results</h4>
            
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Coverage Increase</p>
                <p className="text-xl font-bold text-enterprise-accent">+20%</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Vehicle Utilization</p>
                <p className="text-xl font-bold text-enterprise-accent">+35%</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Cost Per Trip</p>
                <p className="text-xl font-bold text-enterprise-accent">-25%</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm">
              The optimized service area shows potential improvements based on DemandTrans' AI-powered routing and scheduling algorithms. Contact us for a detailed analysis specific to your service area.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceAreaVisualizer;