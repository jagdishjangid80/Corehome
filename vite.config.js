import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ Add this config
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, 
  },
});
