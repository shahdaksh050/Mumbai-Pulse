import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Explicit root so Turbopack ignores the parent monorepo lockfile
	turbopack: {
		root: __dirname,
	},
};

export default nextConfig;
