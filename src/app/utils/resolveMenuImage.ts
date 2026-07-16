import placeholderImage from "../images/placeholders/menu-items-placeholder.webp";

// Vite bundles every file matching this pattern at build time. If a filename
// referenced in menuData.ts isn't physically present in
// src/app/images/menu-items/, it simply won't be in this map, and
// resolveMenuImage() falls back to the placeholder automatically.
//
// This means: once you drop a correctly-named photo into
// src/app/images/menu-items/ and rebuild, it just appears -- no code
// changes needed anywhere else.
const menuImageFiles = import.meta.glob<string>(
  "../images/menu-items/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" }
);

const menuImageMap: Record<string, string> = {};
for (const path in menuImageFiles) {
  const filename = path.split("/").pop() as string;
  menuImageMap[filename] = menuImageFiles[path];
}

export function resolveMenuImage(filename: string): string {
  return menuImageMap[filename] || placeholderImage;
}
