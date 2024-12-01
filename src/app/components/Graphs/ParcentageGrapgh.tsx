// 'use client';

// import React, { useEffect, useRef } from 'react';
// import {
//   Chart,
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale,
//   ChartOptions,
// } from 'chart.js';

// Chart.register(LineElement, PointElement, LinearScale, CategoryScale);

// interface PercentageGraphProps {
//   percentage: number;
// }

// const PercentageGraph: React.FC<PercentageGraphProps> = ({ percentage }) => {
//   const chartRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     if (chartRef.current) {
//       const ctx = chartRef.current.getContext('2d') as CanvasRenderingContext2D;

//       // Create gradient for the line chart
//       const gradient = ctx.createLinearGradient(0, 0, 0, 150);
//       gradient.addColorStop(0, 'rgba(0, 123, 255, 0.7)');
//       gradient.addColorStop(1, 'rgba(0, 123, 255, 0)');

//       // Initialize Chart.js instance
//       new Chart(ctx, {
//         type: 'line',
//         data: {
//           labels: ['', '', '', '', '', ''], // Dummy labels for smooth graph rendering
//           datasets: [
//             {
//               label: 'Knowledge',
//               data: [10, 20, 40, percentage, 70, 90], // Adjust data to show smooth line
//               borderColor: '#007bff',
//               backgroundColor: gradient,
//               fill: true,
//               borderWidth: 2,
//               tension: 0.4, // Curve the line
//             },
//           ],
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//             legend: {
//               display: false,
//             },
//           },
//           scales: {
//             x: {
//               display: false, // Hide x-axis
//             },
//             y: {
//               display: false, // Hide y-axis
//             },
//           },
//         } as ChartOptions<'line'>,
//       });
//     }
//   }, [percentage]);

//   return (
//     <div className="chart-container">
//       <h3 className="text-sm text-gray-500">Starting Knowledge</h3>
//       <h1 className="text-2xl font-bold">{percentage}%</h1>
//       <canvas ref={chartRef} width={170} height={150}></canvas>
//     </div>
//   );
// };

// export default PercentageGraph;
