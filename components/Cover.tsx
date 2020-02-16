export default () => (
  <div className="outside">
    <div className="inside">
      <h1 className="shadow">John Apostol</h1>
      <span className="shadow">lifelong software learner</span>
    </div>
    <style jsx>{`
      .outside {
        box-sizing: border-box;
        height: 45vh;
        position: relative;
        width: 100vw;
      }

      .outside:before {
        background: radial-gradient(circle, transparent 20%, #000000 125%),
          url(${require("../static/cover.jpg")}) center top;
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
        text-shadow: 1px 1px 5px #362640;
      }

      h1 {
        font-size: 2rem;
        margin: 0.5rem 0;
        padding: 0.5rem 1.1rem;
        color: #ffffff;
        text-align: left;
        border: 2px solid #ffffff;
        box-shadow: 1px 1px 5px #362640, inset 1px 1px 5px #362640;
      }

      span {
        color: #ffffff;
        text-shadow: #362640;
        font-size: 1rem;
      }
    `}</style>
  </div>
);
