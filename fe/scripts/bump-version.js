const fs = require('fs');
const path = require('path');

const versionFile = path.join(__dirname, '../src/assets/version.json');

const boardGames = [
  'Catan',
  'Gloomhaven',
  'TerraformingMars',
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
  'ResArcana',
  'MachiKoro',
  'GreatWesternTrail',
  'PuertoRico',
  'Unmatched',
  'Voidfall',
  'TwilightImperium',
  'Viticulture',
  'Emerge',
  'Amalfi',
  'Agricola',
  'Nemesis',
  'Concordia',
  'Cascadia',
  'Lisboa',
  'Arcs',
  'Calico',
  'WorldOrder',
  'ArkNova',
  'Seti',
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

const envArg = process.argv[3];
const angularEnv = envArg || process.env.NODE_ENV || 'dev';

const allowedEnvs = ['dev', 'test', 'prod'];

if (!allowedEnvs.includes(angularEnv)) {
  console.error(`Invalid environment: ${angularEnv}`);
  console.error(`Allowed values: ${allowedEnvs.join(', ')}`);
  process.exit(1);
}

file.environment = angularEnv;


fs.writeFileSync(versionFile, JSON.stringify(file, null, 2));

console.log('--------------------------------');
console.log(`Version     : ${newVersion}`);
console.log(`Environment : ${angularEnv.toUpperCase()}`);
console.log(`Build date  : ${file.buildDate}`);
console.log('--------------------------------');
