import * as migration_20250317_143405 from './20250317_143405';
import * as migration_20250318_131127 from './20250318_131127';
import * as migration_20250319_200056 from './20250319_200056';

export const migrations = [
  {
    up: migration_20250317_143405.up,
    down: migration_20250317_143405.down,
    name: '20250317_143405',
  },
  {
    up: migration_20250318_131127.up,
    down: migration_20250318_131127.down,
    name: '20250318_131127',
  },
  {
    up: migration_20250319_200056.up,
    down: migration_20250319_200056.down,
    name: '20250319_200056'
  },
];
