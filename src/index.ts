// SPLOOP.io - Next.js dev server starter
import { spawn } from 'child_process';

console.log('Starting SPLOOP.io game server...');

const next = spawn('npx', ['next', 'dev', '--turbopack'], { 
  stdio: 'inherit',
  cwd: process.cwd(),
  shell: true
});

next.on('error', (err) => {
  console.error('Failed to start Next.js:', err);
});

next.on('close', (code) => {
  console.log(`Next.js exited with code ${code}`);
});
