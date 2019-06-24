export default () => (
  <div className="outside">
    <div className="inside">
      <h1 className="shadow">John Apostol</h1>
      <span className="shadow">always learning, never satisfied</span>
    </div>
    <style jsx>{`
      .outside {
        box-sizing: border-box;
        height: 30vh;
        position: relative;
        width: 100vw;
      }

      .outside:before {
        background: radial-gradient(circle, transparent 25%, #000000 150%),
          url("static/cover.jpg") center center;
        background-size: cover;
        background-color: rgba(0, 0, 0, 0.3);
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
      }

      .inside {
        align-items: center;
        display: flex;
        flex-direction: column;
        font-family: "Lato", serif;
        height: 100%;
        justify-content: center;
        position: relative;
        width: 100%;
      }

      .shadow {
        text-shadow: 0 2px rgba(0, 0, 0, 0.15);
      }

      h1 {
        font-size: 2rem;
        margin: 0.5rem 0;
        padding: 0.5rem 1.1rem;
        color: #ffffff;
        text-align: left;
        border: 2px solid #ffffff;
      }

      span {
        color: #ffffff;
        font-size: 1rem;
      }
    `}</style>
  </div>
);
