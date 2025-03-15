import './style.css'
// For files in the public folder, we reference them directly
const atomLogo = '/images/atom.svg'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header>
      <div class="logo-container">
        <img src="${atomLogo}" class="logo" alt="Atom logo" />
        <h1>Science Projects</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#" class="active">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Experiments</a></li>
          <li><a href="#">About Me</a></li>
        </ul>
      </nav>
    </header>
    
    <main>
      <section class="hero">
        <h2>Welcome to My Science World!</h2>
        <p>I'm a 12-year-old science enthusiast sharing my projects and experiments.</p>
      </section>
      
      <section class="featured">
        <h3>Featured Projects</h3>
        <div class="project-grid">
          <div class="project-card">
            <div class="project-icon">🧪</div>
            <h4>Chemistry Fun</h4>
            <p>Testing reactions with household materials</p>
            <a href="#" class="btn">View Project</a>
          </div>
          <div class="project-card">
            <div class="project-icon">🔭</div>
            <h4>Backyard Astronomy</h4>
            <p>Observations of night sky phenomena</p>
            <a href="#" class="btn">View Project</a>
          </div>
          <div class="project-card">
            <div class="project-icon">🎮</div>
            <h4>Pixel Adventure</h4>
            <p>A 2D platformer game with pixelated graphics</p>
            <a href="#" class="btn">Play Game</a>
          </div>
        </div>
      </section>
    </main>
    
    <footer>
      <p>© 2025 Science Projects - Made with 💡 and curiosity</p>
    </footer>
  </div>
`
