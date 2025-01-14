import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  // jsxInject: `import * as ReactDOM from 'react-dom';`,
//   base: "/the-Artemis-Website-V2/"
// ,
  plugins: [react() ],
  
})
