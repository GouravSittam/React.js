import "./App.css";

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="service.html">Service</a>
            </li>
            <li>
              <a href="contact.html">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Welcome to my Website</h1>
        <p>
          React is a free and open-source front-end JavaScript library for
          building user interfaces based on components by Facebook Inc. It is
          maintained by Meta and a community of individual developers and
          companies. React can be used to develop single-page, mobile, or
          server-rendered applications with frameworks like Next.js
        </p>
      </main>

      <footer>
        <p>&copy; 2024 ReactJS</p>
      </footer>
    </div>
  );
};

export default App;
