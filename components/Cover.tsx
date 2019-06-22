export default () => (
  <div className="outside">
    <div className="inside">
      <h2 className="shadow">John Apostol</h2>
    </div>
    <style jsx>{`
      .outside {
        box-sizing: border-box;
        height: 30vh;
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
        display: flex;
        flex-direction: column;
        font-family: "Merriweather", serif;
        height: 100%;
        justify-content: center;
        position: relative;
        width: 100%;
      }

      .shadow {
        margin: 0.5rem 0;
        padding: 0 2rem 0;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
      }

      h2 {
        color: #ffffff;
      }
    `}</style>
  </div>
);
