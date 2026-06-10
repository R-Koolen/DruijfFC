// Generates PNG icons from SVG sources using sharp.
// Run once: npm install --no-save sharp && node gen-icons.mjs
import sharp from "sharp";
import { readFileSync } from "fs";

const icon     = readFileSync("icons/icon.svg");
const maskable = readFileSync("icons/icon-maskable.svg");

await sharp(icon).resize(192, 192).toFile("icons/icon-192.png");
await sharp(icon).resize(512, 512).toFile("icons/icon-512.png");
await sharp(maskable).resize(512, 512).toFile("icons/icon-512-maskable.png");
await sharp(icon).resize(180, 180).toFile("icons/apple-touch-icon-180.png");
await sharp(icon).resize(32, 32).toFile("icons/favicon-32.png");

console.log("Icons generated in icons/");
