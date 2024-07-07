import { access } from 'fs/promises'

export async function fileExists(filename: string) {
  try {
      await access(filename);
      return true;
  } catch (err) {
      if (err.code === 'ENOENT') {
          return false;
      } else {
          throw err;
      }
  }
}

export { readFile, stat, readdir } from "fs/promises";
export { resolve } from "path";