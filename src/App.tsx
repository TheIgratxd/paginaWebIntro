import "./App.css";

function App() {
  return (
    <main>
      <nav className="topbar" aria-label="Navegación principal">
        <a className="brand" href="#inicio">
          <span className="brand-mark">◆</span> CUBO A CUBO
        </a>
        <div className="nav-links">
          <a href="#ruta">La ruta</a>
          <a href="#inventario">Inventario</a>
          <a href="#autores">Créditos</a>
        </div>
        <span className="edition">GUÍA DE SUPERVIVENCIA / 01</span>
      </nav>

      <section className="hero-section" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">MANUAL DEL SOBREVIVIENTE</p>
          <h1>
            Cómo pasarse
            <br />
            <em>Minecraft</em>
          </h1>
          <p className="hero-text">
            Una ruta sencilla desde el primer árbol hasta el combate final.
            Prepárate, explora y llega al Ender Dragon.
          </p>
          <a className="primary-button" href="#ruta">
            Ver la ruta <span>↓</span>
          </a>
        </div>
        <div
          className="hero-art"
          aria-label="Ilustración de un portal al End"
          role="img"
        >
          <div className="sun"></div>
          <div className="mountain mountain-back"></div>
          <div className="mountain mountain-front"></div>
          <div className="portal">
            <div className="portal-glow"></div>
          </div>
          <div className="grass-block block-one"></div>
          <div className="grass-block block-two"></div>
          <span className="coordinates">X: 248 / Y: 64 / Z: -912</span>
        </div>
      </section>

      <section className="intro-strip">
        <p>
          <strong>OBJETIVO FINAL</strong>
          <br />
          Derrotar al Ender Dragon
        </p>
        <p>
          <strong>TIEMPO ESTIMADO</strong>
          <br />5 a 10 horas
        </p>
        <p>
          <strong>DIFICULTAD</strong>
          <br />
          <span className="difficulty">● ● ● ○ ○</span>
        </p>
        <p>
          <strong>NECESITAS</strong>
          <br />
          Paciencia y comida
        </p>
      </section>

      <section className="content-section" id="ruta">
        <div className="section-heading">
          <p className="eyebrow">LA RUTA PRINCIPAL</p>
          <h2>
            Cuatro mundos,
            <br />
            <em>un objetivo.</em>
          </h2>
          <p>
            Avanza en este orden para no perderte. Cada etapa desbloquea lo
            necesario para la siguiente.
          </p>
        </div>
        <div className="steps">
          <article className="step-card">
            <span className="step-number">01</span>
            <span className="step-icon">▦</span>
            <h3>Sobrevive la primera noche</h3>
            <p>
              Consigue madera, herramientas de piedra, comida y construye un
              refugio antes de que oscurezca.
            </p>
            <span className="tag">MUNDO NORMAL</span>
          </article>
          <article className="step-card">
            <span className="step-number">02</span>
            <span className="step-icon">◈</span>
            <h3>Encuentra diamantes</h3>
            <p>
              Baja a las capas profundas, consigue hierro y diamantes. Fabrica
              una mesa de encantamientos.
            </p>
            <span className="tag">MINERÍA</span>
          </article>
          <article className="step-card">
            <span className="step-number">03</span>
            <span className="step-icon">◉</span>
            <h3>Entra al Nether</h3>
            <p>
              Construye un portal, consigue varas de blaze y perlas de Ender
              para fabricar los ojos.
            </p>
            <span className="tag">NETHER</span>
          </article>
          <article className="step-card final-step">
            <span className="step-number">04</span>
            <span className="step-icon">✦</span>
            <h3>Activa el portal y vence</h3>
            <p>
              Usa los Ojos de Ender para encontrar la fortaleza. Activa el
              portal y derrota al dragón.
            </p>
            <span className="tag">EL END</span>
          </article>
        </div>
      </section>

      <section className="survival-section" id="inventario">
        <div className="survival-copy">
          <p className="eyebrow">ANTES DE ENTRAR AL END</p>
          <h2>
            Tu inventario
            <br />
            <em>salva vidas.</em>
          </h2>
          <p>
            Revisa esta lista antes del combate final. El dragón no espera a
            nadie.
          </p>
        </div>
        <div className="checklist">
          <div className="check-item">
            <span>✓</span>
            <div>
              <strong>Armadura de diamante</strong>
              <small>Con Protección IV si es posible</small>
            </div>
          </div>
          <div className="check-item">
            <span>✓</span>
            <div>
              <strong>Arco y muchas flechas</strong>
              <small>Para destruir los cristales</small>
            </div>
          </div>
          <div className="check-item">
            <span>✓</span>
            <div>
              <strong>Comida y pociones</strong>
              <small>Curación y caída lenta</small>
            </div>
          </div>
          <div className="check-item">
            <span>✓</span>
            <div>
              <strong>Bloques y cubeta de agua</strong>
              <small>Para moverte y escapar</small>
            </div>
          </div>
        </div>
      </section>

      <section className="credits" id="autores">
        <div>
          <p className="eyebrow">TRABAJO ESCOLAR</p>
          <h2>
            Hecho por
            <br />
            <em>aventureros.</em>
          </h2>
        </div>
        <div className="credit-details">
          <div>
            <span>CREADORES</span>
            <strong>
              Cruz Lopez Aldo Emmanuel - Rodríguez Rodríguez Diego Felipe -
              Aguilar Hernández Jonathan - Silva Garcia Derek Gael -{" "}
            </strong>
          </div>
          <div>
            <span>GRUPO</span>
            <strong>Grupo 1159</strong>
          </div>
          <div>
            <span>MATERIA</span>
            <strong>Introducción a la Programación</strong>
          </div>
          <div>
            <span>PROFESORA</span>
            <strong>GLORIA SAMANTHA PELCASTRE RAMIREZ</strong>
          </div>
        </div>
      </section>
      <footer>
        <span>© 2026 CUBO A CUBO</span>
        <span>UNA GUÍA HECHA PARA APRENDER JUGANDO</span>
        <a href="#inicio">VOLVER ARRIBA ↑</a>
      </footer>
    </main>
  );
}

export default App;
