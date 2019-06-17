export default () => (
  <div className="outside">
    <div className="inside">
      <h1 className="shadow">John Apostol</h1>
      <h2 className="shadow">Software and Life</h2>
    </div>
    <style jsx>{`
      .outside {
        height: 80vh;
        position: relative;
        width: 100vw;
      }

      .outside::before {
        background: radial-gradient(circle, transparent 50%, #000000 150%),
          url("static/cover.jpg") center center;
        background-size: cover;
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
      }

      .inside {
        align-items: center;
        color: #ffffff;
        display: flex;
        height: 100%;
        width: 100%;
        flex-direction: column;
        justify-content: flex-start;
        font-family: "Merriweather", serif;
        position: relative;
      }

      h1 {
        margin: 0;
        padding-top: 4rem;
      }

      .shadow {
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
      }
    `}</style>
  </div>
);
