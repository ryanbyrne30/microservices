FROM oven/bun:latest

COPY bun.lockb ./
COPY package.json ./
COPY tsconfig.json ./
COPY tsconfig.node.json ./
COPY svelte.config.js ./
COPY vite.config.ts ./
COPY index.html ./
COPY public/ ./
COPY src/ ./

RUN bun install
ENTRYPOINT ["bun", "dev"]
