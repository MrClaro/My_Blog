import "./App.css";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          MyBlog
        </a>
        <nav>
          <a href="" className="login">
            Login
          </a>
          <a href="" className="Register">
            Register
          </a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
          <img
            src="https://raw.githubusercontent.com/khaosdoctor/blog-assets/master/images/2024/09/articles.png"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>Usando tipos derivados</h2>
          <p className="info">
            <a className="author">Adr Dev</a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className="summary">
            Pra quem está na Formação TS, sabe que eu sou muito fã de derivar
            tipos, escrever em um único lugar e utilizar variações desse tipo em
            todos os outros lugares. É uma aplicação do princípio do DRY (don´t
            repeat yourself)
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img
            src="https://raw.githubusercontent.com/khaosdoctor/blog-assets/master/images/2024/09/articles.png"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>Usando tipos derivados</h2>
          <p className="info">
            <a className="author">Adr Dev</a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className="summary">
            Pra quem está na Formação TS, sabe que eu sou muito fã de derivar
            tipos, escrever em um único lugar e utilizar variações desse tipo em
            todos os outros lugares. É uma aplicação do princípio do DRY (don´t
            repeat yourself)
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img
            src="https://raw.githubusercontent.com/khaosdoctor/blog-assets/master/images/2024/09/articles.png"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>Usando tipos derivados</h2>
          <p className="info">
            <a className="author">Adr Dev</a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className="summary">
            Pra quem está na Formação TS, sabe que eu sou muito fã de derivar
            tipos, escrever em um único lugar e utilizar variações desse tipo em
            todos os outros lugares. É uma aplicação do princípio do DRY (don´t
            repeat yourself)
          </p>{" "}
        </div>
      </div>
    </main>
  );
}

export default App;
