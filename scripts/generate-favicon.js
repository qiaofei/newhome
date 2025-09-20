// 生成 favicon 的脚本
// 需要安装: npm install sharp

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateFavicon() {
  const svgPath = path.join(__dirname, '../public/favicon.svg');
  const icoPath = path.join(__dirname, '../public/favicon.ico');
  const distIcoPath = path.join(__dirname, '../dist/favicon.ico');
  
  try {
    // 读取 SVG 文件
    const svgBuffer = fs.readFileSync(svgPath);
    
    // 生成不同尺寸的 PNG
    const sizes = [16, 32, 48];
    const pngBuffers = await Promise.all(
      sizes.map(size => 
        sharp(svgBuffer)
          .resize(size, size)
          .png()
          .toBuffer()
      )
    );
    
    // 这里需要使用专门的库来生成 ICO 文件
    // 或者直接使用 32x32 的 PNG 作为 favicon
    const favicon32 = await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toBuffer();
    
    // 保存到 public 和 dist 目录
    fs.writeFileSync(icoPath.replace('.ico', '.png'), favicon32);
    fs.writeFileSync(distIcoPath.replace('.ico', '.png'), favicon32);
    
    console.log('✅ Favicon 生成成功！');
    console.log('📁 文件位置:');
    console.log(`   - ${icoPath.replace('.ico', '.png')}`);
    console.log(`   - ${distIcoPath.replace('.ico', '.png')}`);
    
  } catch (error) {
    console.error('❌ 生成 favicon 失败:', error);
  }
}

// 如果直接运行此脚本
if (import.meta.url === `file://${process.argv[1]}`) {
  generateFavicon();
}
