import { existsSync, readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

export function verifyCatalog(inventory, { fileExists, storyExists }) {
  const errors = [];
  const seen = new Set();
  for (const entry of inventory.components) {
    if (seen.has(entry.slug)) errors.push(`Duplicate component: ${entry.slug}`);
    seen.add(entry.slug);
    if (!entry.files.length) errors.push(`${entry.slug}: source list is empty`);
    for (const file of entry.files) if (!fileExists(file)) errors.push(`${entry.slug}: missing source ${file}`);
    if (!entry.storyIds.length) errors.push(`${entry.slug}: story list is empty`);
    for (const id of entry.storyIds) if (!storyExists(id)) errors.push(`${entry.slug}: missing story ${id}`);
  }
  return { errors, componentCount: seen.size };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const inventory = JSON.parse(readFileSync("docs/component-inventory.json", "utf8"));
  if (!existsSync("storybook-static/index.json")) {
    console.error("Build Storybook first: npm run build-storybook");
    process.exit(1);
  }
  const index = JSON.parse(readFileSync("storybook-static/index.json", "utf8"));
  const result = verifyCatalog(inventory, {
    fileExists: existsSync,
    storyExists: (id) => index.entries[id]?.type === "story",
  });
  if (result.errors.length) {
    console.error(result.errors.join("\n"));
    process.exitCode = 1;
  } else console.log(`Catalog verified: ${result.componentCount} components, all sources and stories present.`);
}
