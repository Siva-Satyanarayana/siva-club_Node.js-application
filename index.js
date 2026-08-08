const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Siva Club</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{
  font-family:'Poppins',sans-serif;
  background:#0f172a;
  color:#fff;
}
header{
  background:linear-gradient(135deg,#ff9933,#138808);
  padding:80px 20px;
  text-align:center;
}
header h1{
  font-size:4rem;
  color:#fff8dc;
}
header p{
  margin-top:15px;
  font-size:1.2rem;
}
nav{
  background:#111827;
  padding:15px;
  text-align:center;
}
nav a{
  color:#fbbf24;
  margin:0 15px;
  text-decoration:none;
  font-weight:600;
}
.hero{
  max-width:1200px;
  margin:50px auto;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:30px;
  padding:0 20px;
}
.card{
  background:#1e293b;
  border-radius:20px;
  padding:25px;
  box-shadow:0 10px 30px rgba(0,0,0,0.4);
  transition:0.3s;
}
.card:hover{
  transform:translateY(-8px);
}
.card h2{
  color:#fbbf24;
  margin-bottom:10px;
}
.card p{
  color:#cbd5e1;
  line-height:1.6;
}
.stats{
  background:#111827;
  padding:60px 20px;
  margin-top:40px;
}
.stats h2{
  text-align:center;
  color:#fbbf24;
  margin-bottom:30px;
}
.grid{
  max-width:1000px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  gap:20px;
}
.box{
  background:#1e293b;
  padding:25px;
  border-radius:16px;
  text-align:center;
}
.box h3{
  color:#fff;
  font-size:2rem;
}
.box p{
  color:#94a3b8;
}
.membership{
  max-width:900px;
  margin:60px auto;
  background:linear-gradient(135deg,#7c2d12,#065f46);
  padding:40px;
  border-radius:24px;
  text-align:center;
}
.membership h2{
  color:#fde68a;
  margin-bottom:15px;
}
.btn{
  display:inline-block;
  margin-top:20px;
  padding:14px 30px;
  background:#fbbf24;
  color:#111827;
  text-decoration:none;
  border-radius:50px;
  font-weight:700;
}
footer{
  background:#020617;
  padding:30px;
  text-align:center;
  color:#94a3b8;
  margin-top:60px;
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
    <p>State-of-the-art equipment, strength training, cardio zones, personal trainers, and nutrition guidance inspired by Indian wellness traditions.</p>
  </div>

  <div class="card" id="pool">
    <h2>Swimming Pool</h2>
    <p>Olympic-style swimming pool with professional coaching, kids' classes, aqua fitness sessions, and relaxation lounges.</p>
  </div>

  <div class="card" id="running">
    <h2>Running Coach Sessions</h2>
    <p>Marathon preparation, endurance coaching, interval training, and personalized running plans with certified coaches.</p>
  </div>

  <div class="card" id="sports">
    <h2>Basketball Arena</h2>
    <p>Indoor wooden courts, weekend tournaments, youth coaching camps, and competitive league matches.</p>
  </div>

  <div class="card">
    <h2>Volleyball Courts</h2>
    <p>Professional volleyball courts with coaching sessions, evening practice groups, and inter-club competitions.</p>
  </div>

  <div class="card">
    <h2>Yoga & Meditation</h2>
    <p>Daily sunrise yoga, pranayama, meditation, and holistic wellness programs rooted in Indian traditions.</p>
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
  <p>Siva Club • Premium Indian Sports & Wellness Experience • Hyderabad • Bengaluru • Chennai</p>
</footer>

</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(\`Siva Club running at http://localhost:\${PORT}\`);
});
