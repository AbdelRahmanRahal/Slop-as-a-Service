# Slop-as-a-Service (SaaS)

> Enterprise-grade slop delivery at scale. You should for sure use this in prod.

## What is this?

Slop-as-a-Service is a revolutionary API that provides on-demand access to premium, enterprise-grade programming jokes. Built on a robust, cloud-native architecture, SaaS delivers consistent mediocrity with 99.9% uptime\*.

\*uptime not guaranteed

## Why?

Because every modern application needs a joke API with questionable humor and even more questionable architectural decisions.

## Features

- **Blazingly Fast**: Returns slop at the speed of light (or network latency, whichever is slower)
- **Secure**: No authentication required because who would want to steal these jokes anyway
- **Scalable**: Can handle dozens of requests per second\*

\*not tested

## Installation

```bash
# Clone this repository
git clone https://github.com/AbdelRahmanRahal/Slop-as-a-Service.git
cd slop-as-a-service

# Install dependencies
npm install

# Run locally
npm start
```

## API Documentation

### Base URL

```
http://localhost:3000
```

### Endpoints

#### `GET /`

Get API information and available endpoints.

**Response:**

```json
{
  "message": "Welcome to Slop-as-a-Service!",
  "tagline": "You should for sure use me in prod.",
  "version": "1.0.0",
  "endpoints": { ... }
}
```

#### `GET /api/slop`

Get a single random slop.

**Response:**

```json
{
  "slop": "Slop here",
  "quality": "enterprise-grade",
  "sla": "99.9% uptime*",
  "disclaimer": "*uptime not guaranteed"
}
```

#### `GET /api/slop/bulk?count=5`

Get multiple slops at once (max 10).

**Query Parameters:**

- `count` (optional): Number of slops to return (default: 5, max: 10)

**Response:**

```json
{
  "slops": ["slop 1", "slop 2", "sloop 3"],
  "count": 3,
  "quality": "enterprise-grade",
  "sla": "99.9% uptime*",
  "disclaimer": "*uptime not guaranteed"
}
```

#### `GET /health`

Health check endpoint for your monitoring needs.

**Response:**

```json
{
  "status": "operational",
  "slop_quality": "the finest there is",
  "timestamp": "2025-12-25T12:00:00.000Z"
}
```

## License

MIT

## Disclaimer

This is a joke project. Please don't actually use this in production. Then again, I can't stop you.

---

Made with 1.6 hours of sleep and questionable decisions
