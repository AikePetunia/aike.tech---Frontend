import peak from "./peak.avif";
export function WhoAmI() {
  return (
    <>
      <h3>Who am I ?!?!</h3>
      <p className="my-pronouns">
        She/Her/Ella
        <a>🏳️‍⚧️</a>
        ESP/ENG
      </p>
      <br></br>
      <p>
        {" "}
Aike is a human who likes computers. My first interaction with a
        computer and the internet was at 4 years old. I started experimenting with
        programming at 12. Nowadays I'm studying Computer
        Science at
        <a
          href="https://www.famaf.unc.edu.ar/"
          style={{ color: "gray", margin: "0 4px" }}
          target="_blank"
          rel="noreferrer"
        >
          FAMAF
        </a>
        and currently working freelance at
        <a
          href="https://inverte.com/"
          style={{ color: "green", margin: "0 2px" }}
          target="_blank"
          rel="noreferrer"
        >
          Inverte
        </a>{" "}
        as a Software Engineer, Fullstack with Interactive 3D recollecting Data for GA4
        analysis
      </p>
      <br></br>
      <p>Happy to say I am living, not surviving.</p>
      <img
        src={peak}
        width="200px"
        height="200px"
        style={{ display: "block", margin: "20px auto" }}
        alt="Im at my peak"
      />
    </>
  );
}

export default WhoAmI;
