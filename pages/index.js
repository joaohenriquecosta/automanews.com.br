function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1>AutomaNews</h1>
      <p>
        AutomaNews is a collaborative content platform focused on home
        automation and smart home technologies. Inspired by TabNews, the project
        brings together news, tutorials, reviews, and community discussions
        around the world of connected homes.
      </p>

      <h2>🚀 Features</h2>
      <ul>
        <li>📢 Latest news on smart home and IoT</li>
        <li>📚 Tutorials and guides for beginners and advanced users</li>
        <li>🛠️ Product reviews and comparisons</li>
        <li>💬 Open community for sharing knowledge and experiences</li>
      </ul>

      <h2>🛠️ Development Setup</h2>
      <p>
        Make sure you have Node.js installed. We recommend using NVM (Node
        Version Manager):
      </p>
      <pre
        style={{ background: "#f4f4f4", padding: "10px", borderRadius: "5px" }}
      >
        {`# Check Node.js version
          node -v

          # List installed Node versions
          nvm ls

          # Install the recommended LTS version
          nvm install lts/hydrogen

          # Set default Node version
          nvm alias default lts/hydrogen

          # Write on the .nvmrc file
          lts/hydrogen`}
      </pre>
    </div>
  );
}

export default Home;
