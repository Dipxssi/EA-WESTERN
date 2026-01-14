const fs = require('fs');
const path = require('path');

// Copy .htaccess from public to out folder
const sourcePath = path.join(__dirname, '../public/.htaccess');
const destPath = path.join(__dirname, '../out/.htaccess');

if (fs.existsSync(sourcePath)) {
  fs.copyFileSync(sourcePath, destPath);
  console.log('✓ .htaccess file copied to out folder');
} else {
  console.warn('⚠ .htaccess file not found in public folder');
}

