# Use the official Bun image
FROM oven/bun:latest AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the app
RUN bun run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create nextjs user (Bun base image doesn't provide adduser/groupadd)
RUN set -eux; \
    uid=1001 gid=1001; \
    if ! grep -q '^nextjs:' /etc/passwd; then \
        printf 'nextjs:x:%s:%s:Next.js user:/app:/bin/sh\n' "$uid" "$gid" >> /etc/passwd; \
    fi; \
    if ! grep -q '^nextjs:' /etc/group; then \
        printf 'nextjs:x:%s:\n' "$gid" >> /etc/group; \
    fi

# Copy the built application
COPY --from=builder --chown=nextjs:nextjs /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# Copy node_modules for runtime
COPY --from=deps --chown=nextjs:nextjs /app/node_modules ./node_modules

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Run the app using Bun with next start
CMD ["bun", "run", "start"]
