const express = require("express")
const slop = require("./slop")
const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())

// CORS for browser requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Slop-as-a-Service!",
    tagline: "You should for sure use me in prod.",
    version: "1.0.0",
    endpoints: {
      "GET /api/slop": "Get 1 slop",
      "GET /api/slop/bulk?count=5": "Get multiple slops (max 10)",
      "GET /health": "Health check endpoint",
    },
    pricing:
      "Free tier: Unlimited slop! (No premium tier exists, it's all free)",
  })
})

app.get("/api/slop", (req, res) => {
  const randomSlop = slop[Math.floor(Math.random() * slop.length)]
  res.json({
    slop: randomSlop,
    quality: "enterprise-grade",
    sla: "99.9% uptime*",
    disclaimer: "*uptime not guaranteed",
  })
})

app.get("/api/slop/bulk", (req, res) => {
  const count = Math.min(parseInt(req.query.count) || 5, 10)
  const slops = []

  for (let i = 0; i < count; i++) {
    slops.push(slop[Math.floor(Math.random() * slop.length)])
  }

  res.json({
    slops: slops,
    count: slops.length,
    quality: "enterprise-grade",
    sla: "99.9% uptime*",
    disclaimer: "*uptime not guaranteed",
  })
})

app.get("/health", (req, res) => {
  res.json({
    status: "operational",
    slop_quality: "the finest there is",
    timestamp: new Date().toISOString(),
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Endpoint not found",
    suggestion: "Maybe the real slop was the friends we made along the way?",
    hint: "Try GET / for available endpoints",
  })
})

app.listen(PORT, () => {
  console.log(`Slop-as-a-Service running on port ${PORT}`)
  console.log(`Currently serving ${slop.length} premium slop`)
})
