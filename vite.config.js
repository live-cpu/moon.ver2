// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
    // 1. 배포 경로 설정 (GitHub 레포 이름)
    let base = '/';
    if (command === 'build' && mode !== 'local') {
        base = '/moon.ver2/'; 
    }

    return {
        base: base,
        server: { port: 5173, open: true },
        
        build: {
            outDir: 'dist',
            assetsDir: 'assets',
            sourcemap: false,
            
            rollupOptions: {
                // 여기가 핵심입니다. 모든 HTML 파일을 여기에 등록합니다.
                input: {
                    // 1. 메인 (루트)
                    main: resolve(__dirname, 'index.html'),

                    // 2. Page > Main 폴더 (이전 요청)
                    pm_main: resolve(__dirname, 'page/main/main.html'),
                    pm_up: resolve(__dirname, 'page/main/lpUP.html'),
                    pm_down: resolve(__dirname, 'page/main/lpDOWN.html'),
                    pm_mid: resolve(__dirname, 'page/main/lpMIDDLE.html'),

                    // 3. Page > Canvas 폴더 (이번에 추가된 사진)
                    pc_canvas: resolve(__dirname, 'page/canvas/canvas.html'),

                    // 4. Page > Licenses 폴더 (이번에 추가된 사진)
                    pl_license: resolve(__dirname, 'page/licenses/license.html'),
                    pl_canvas_cap: resolve(__dirname, 'page/licenses/CANVAS.html'), // 대문자 파일명
                },

                output: {
                    manualChunks: {
                        'three': ['three'],
                    }
                }
            }
        },
        preview: { port: 4173, open: true }
    };
});