import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://systentando.com';
const routes = [
    { path: '/', lastmod: new Date().toISOString().split('T')[0], priority: '1.0', changefreq: 'weekly' },
    { path: '/freds-code-assistant', lastmod: new Date().toISOString().split('T')[0], priority: '0.8', changefreq: 'monthly' },
];

const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `    <url>
        <loc>${BASE_URL}${route.path}</loc>
        <lastmod>${route.lastmod}</lastmod>
        <changefreq>${route.changefreq}</changefreq>
        <priority>${route.priority}</priority>
    </url>`).join('\n')}
</urlset>`;

    const outputPath = path.resolve('public/sitemap.xml');
    fs.writeFileSync(outputPath, sitemap);
    console.log(`Sitemap gerado com sucesso em: ${outputPath}`);
};

generateSitemap();
