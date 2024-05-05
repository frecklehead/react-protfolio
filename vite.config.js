import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    modules:{
      localsConvention:'camelCase'
    },//configuring css modules to use camelcase naming convention eg: my_class_name to styles.myclassname
  }
})
