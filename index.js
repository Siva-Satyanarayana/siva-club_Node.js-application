const express = require('express');
const helmet = require('helmet');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Security and performance middleware
app.use(helmet());
app.use(compression());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    service: 'Siva Club',
    timestamp: new Date().toISOString()
  });
});

// Home page
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Siva Club</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body {
  font-family: 'Poppins', sans-serif;
  background: #0f172a;
  color: white;
}
header {
  background: linear-gradient(135deg, #ff9933, #138808);
  padding: 80px 20px;
  text-align: center;
}
header h1 {
  font-size: 4rem;
  color: #fff8dc;
}
header p {
  margin-top: 15px;
  font-size: 1.2rem;
}
nav {
  background: #111827;
  padding: 15px;
  text-align: center;
}
nav a {
  color: #fbbf24;
  margin: 0 15px;
  text-decoration: none;
  font-weight: 600;
}
.hero {
  max-width: 1200px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  padding: 0 20px;
}
.card {
  background: #1e293b;
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  transition: 0.3s;
}
.card:hover {
  transform: translateY(-8px);
}
.card h2 {
  color: #fbbf24;
  margin-bottom: 10px;
}
.card p {
  color: #cbd5e1;
  line-height: 1.6;
}
.stats {
  background: #111827;
  padding: 60px 20px;
  margin-top: 40px;
}
.stats h2 {
  text-align: center;
  color: #fbbf24;
  margin-bottom: 30px;
}
.grid {
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
}
.box {
  background: #1e293b;
  padding: 25px;
  border-radius: 16px;
  text-align: center;
}
.box h3 {
  color: white;
  font-size: 2rem;
}
.box p {
  color: #94a3b8;
}
.membership {
  max-width: 900px;
  margin: 60px auto;
  background: linear-gradient(135deg, #7c2d12, #065f46);
  padding: 40px;
  border-radius: 24px;
  text-align: center;
}
.membership h2 {
  color: #fde68a;
  margin-bottom: 15px;
}
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 14px 30px;
  background: #fbbf24;
  color: #111827;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
}
footer {
  background: #020617;
  padding: 30px;
  text-align: center;
  color: #94a3b8;
  margin-top: 60px;
}
</style>
</head>
<body>

<header>
  <h1>Siva Club</h1>
  <p>India's Premium Fitness, Sports & Wellness Club</p>
</header>

<nav>
  <a href="#gym">Gym</a>
  <a href="#pool">Swimming</a>
  <a href="#running">Running Coach</a>
  <a href="#sports">Sports</a>
  <a href="#membership">Membership</a>
</nav>

<section class="hero">
  <div class="card" id="gym">
    <h2>Modern Gym</h2>
    <p>State-of-the-art equipment, strength training, cardio zones, and personal trainers.</p>
  </div>

  <div class="card" id="pool">
    <h2>Swimming Pool</h2>
    <p>Olympic-style swimming pool with professional coaching and aqua fitness sessions.</p>
  </div>

  <div class="card" id="running">
    <h2>Running Coach Sessions</h2>
    <p>Marathon preparation, endurance coaching, and personalized running plans.</p>
  </div>

  <div class="card" id="sports">
    <h2>Basketball Arena</h2>
    <p>Indoor wooden courts, tournaments, coaching camps, and competitive league matches.</p>
  </div>

  <div class="card">
    <h2>Volleyball Courts</h2>
    <p>Professional volleyball courts with coaching sessions and evening practice groups.</p>
  </div>

  <div class="card">
    <h2>Yoga & Meditation</h2>
    <p>Daily yoga, pranayama, meditation, and holistic wellness programs.</p>
  </div>
</section>

<section class="stats">
  <h2>Why Choose Siva Club?</h2>
  <div class="grid">
    <div class="box">
      <h3>1500+</h3>
      <p>Active Members</p>
    </div>
    <div class="box">
      <h3>25+</h3>
      <p>Expert Coaches</p>
    </div>
    <div class="box">
      <h3>12</h3>
      <p>Sports Facilities</p>
    </div>
    <div class="box">
      <h3>365</h3>
      <p>Open All Year</p>
    </div>
  </div>
</section>

<section class="membership" id="membership">
  <h2>Become a Siva Club Member</h2>
  <p>Access the gym, swimming pool, running track, basketball and volleyball courts, yoga sessions, wellness programs, and exclusive sports events.</p>
  <a href="#" class="btn">Join Siva Club</a>
</section>

<footer>
  <p>Siva Club • Premium Indian Sports & Wellness Experience</p>
</footer>

</body>
</html>
  `);
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested resource was not found.'
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal Server Error'
  });
});

// Start server
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Siva Club server started successfully on port ${PORT}`);
});

// Handle server errors
server.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

// Graceful shutdown
const shutdown = (signal) => {
  console.log(`${signal} received. Shutting down Siva Club server...`);

  server.close(() => {
    console.log('HTTP server closed successfully');
    process.exit(0);
  });

  setTimeout(() => {
    console.error('Forcefully shutting down');
    process.exit(1);
  }, 10000);
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
