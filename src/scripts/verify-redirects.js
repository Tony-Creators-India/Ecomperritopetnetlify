#!/usr/bin/env node

/**
 * Pre-build script to verify _redirects file is valid
 * This prevents deployment failures from invalid _redirects configuration
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const redirectsPath = path.join(__dirname, '..', 'public', '_redirects');

console.log('🔍 Verifying _redirects file...');

// Check if _redirects exists
if (!fs.existsSync(redirectsPath)) {
  console.error('❌ Error: public/_redirects does not exist');
  console.error('Creating _redirects file...');
  
  // Create public directory if it doesn't exist
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // Create _redirects file
  fs.writeFileSync(redirectsPath, '/* /index.html 200\n');
  console.log('✅ Created public/_redirects');
}

// Check if _redirects is a file (not a directory)
const stats = fs.statSync(redirectsPath);
if (stats.isDirectory()) {
  console.error('❌ Error: public/_redirects is a directory, should be a file');
  console.error('Please delete the directory and create a plain text file instead');
  process.exit(1);
}

// Check if _redirects has correct content
const content = fs.readFileSync(redirectsPath, 'utf-8');
if (!content.includes('/* /index.html 200')) {
  console.warn('⚠️  Warning: _redirects may not have correct SPA routing rule');
  console.warn('Expected: /* /index.html 200');
  console.warn('Current content:');
  console.warn(content);
}

console.log('✅ _redirects file is valid');
