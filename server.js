const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3500;

// Mapeo de extensiones de archivo a tipos MIME
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    // Obtener la ruta del archivo
    let filePath = '.' + req.url;
    
    // Si la URL termina en '/', servir index.html
    if (filePath === './') {
        filePath = './index.html';
    }
    
    // Obtener la extensión del archivo
    const extname = path.extname(filePath);
    let contentType = mimeTypes[extname] || 'application/octet-stream';
    
    // Leer el archivo
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // Archivo no encontrado
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Archivo no encontrado</h1>', 'utf-8');
            } else {
                // Error del servidor
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>500 - Error interno del servidor</h1>', 'utf-8');
            }
        } else {
            // Archivo encontrado
            const headers = { 'Content-Type': contentType };
            
            // Headers adicionales para SVG
            if (extname === '.svg') {
                headers['Cache-Control'] = 'public, max-age=31536000';
                headers['Access-Control-Allow-Origin'] = '*';
            }
            
            res.writeHead(200, headers);
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
    console.log(`📁 Sirviendo archivos desde: ${__dirname}`);
    console.log(`🌐 Abre tu navegador y visita: http://localhost:${PORT}`);
    console.log(`⏹️  Presiona Ctrl+C para detener el servidor`);
});

// Manejo de señales para cerrar el servidor
process.on('SIGINT', () => {
    console.log('\n👋 Cerrando servidor...');
    server.close(() => {
        console.log('✅ Servidor cerrado correctamente');
        process.exit(0);
    });
}); 