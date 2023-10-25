import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default ({mode}) => {
    console.log({mode})
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};
    const {VITE_SERVER_URL, VITE_DEV_SERVER} = process.env
    return defineConfig({
        plugins: [react()],
        base: "./",
        server: {
            open: false,
            proxy: {
                [VITE_SERVER_URL]: {
                    target: VITE_DEV_SERVER,
                    changeOrigin: true,
                    secure: false,
                    ws: true,
                    cors: true,
                    // rewrite: (path) => path.replace(/^\/api/, '')
                    configure: (proxy, _options) => {
                        proxy.on('error', (err, _req, _res) => {
                            console.log('proxy error', err);
                        });
                        proxy.on('proxyReq', (proxyReq, req, _res) => {
                            console.log('Sending Request to the Target:', req.method, req.url);
                        });
                        proxy.on('proxyRes', (proxyRes, req, _res) => {
                            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
                        });
                    },
                }
            }
        },
        build: {
            outDir: "dist",
            sourcemap: true,
        }
    })

}