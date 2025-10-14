import fs from 'fs';

const data = fs.readFileSync('world.json', 'utf-8');
const world = JSON.parse(data);

// Loop through each region
for (const region of world.regions) {
  console.log(`\nRegion: ${region.name} (${region.climate})`);

  // Loop through each town in region
  for (const town of region.towns) {
    console.log(`  Town: ${town.name} — Population: ${town.population}`);

    // Loop through each notable person in town
    console.log('    Notable People:');
    for (const person of town.notable_people) {
      console.log(`      - ${person.name} (${person.role})`);

      // Print their items
      console.log('        Items:');
      for (const item of person.items) {
        if (typeof item === 'string') {
          console.log(`          ${item}`);
        } else {
          console.log(`          ${item.name || 'Unnamed item'} (${Object.keys(item).map(k => `${k}: ${item[k]}`).join(', ')})`);
        }
      }
    }
  }
}
