const fs = require('fs');
const path = require('path');

const versionFile = path.join(__dirname, '../src/assets/version.json');

const boardGames = [
  'Catan',
  'Gloomhaven',
  'TerraformingMars',
  'Carcassonne',
  'Azul',
  'Pandemic',
  'Wingspan',
  'Scythe',
  'Root',
  'BrassBirmingham',
  '7Wonders',
  'Everdell',
  'Dune',
  'BloodRage',
  'BunnyKingdom',
  'Vendetta',
  'Elfenland',
  'Barony',
  'PuertoRico',
  'SpiritIsland',
  'Civolution',
  'Dixit',
  'ResArcana',
  'MachiKoro',
  'GreatWesternTrail',
  'PuertoRico',
];

const bumpType = process.argv[2] || 'patch';

const file = JSON.parse(fs.readFileSync(versionFile, 'utf8'));

let version = file.version.split('-')[0];

let [major, minor, patch] = version.split('.').map(Number);

switch (bumpType) {
  case 'major':
    major++;
    minor = 0;
    patch = 0;
    break;

  case 'minor':
    minor++;
    patch = 0;
    break;

  default:
    patch++;
}

const randomGame =
  boardGames[Math.floor(Math.random() * boardGames.length)];

const newVersion = `${major}.${minor}.${patch}-${randomGame}`;

file.version = newVersion;
file.buildDate = new Date().toISOString();

const angularEnv =
  process.env.NODE_ENV || 'production';

file.environment = angularEnv;

fs.writeFileSync(versionFile, JSON.stringify(file, null, 2));

console.log(`Updated version to ${newVersion}`);
