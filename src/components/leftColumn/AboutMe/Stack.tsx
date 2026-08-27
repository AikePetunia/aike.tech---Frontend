import { useState, useEffect } from "react";
import imageSrc from "./backgrounds/stack.avif";
export function Stack() {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isVisible) return;
    const handleMouseEnter = (event: MouseEvent) => {
      setCoords({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mouseenter", handleMouseEnter);
    return () => {
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <img
          src={imageSrc}
          alt="archbtw"
          style={{
            position: "absolute",
            top: coords.y + 25,
            left: coords.x + 50,
            pointerEvents: "none",
            width: "350px",
            height: "225px",
            borderRadius: "8px",
            transition: "transform 0.1s ease-out",
          }}
        />
      )}
      <h3>My Stack</h3>
      <p
        style={{ fontSize: "12px" }}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        arch btw
      </p>

      <div className="stack-section">
        <h4>Skills</h4>
        <div className="skills-icons">
          <img
            src="https://skillicons.dev/icons?i=html,css,bootstrap,javascript,ts,react,tailwind"
            alt="Skills"
            loading="lazy"
          />
          <img
            src="https://developer.playcanvas.com/img/playcanvas.webp"
            alt="PlayCanvas"
            width="48"
            height="48"
            loading="lazy"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9bsC17sEuS2OqQ2NmsHDxP8jB3E8BGHjH6A&s"
            alt="Hostinger"
            width="48"
            height="48"
            loading="lazy"
          />
          <img
            src="https://skillicons.dev/icons?i=haskell,c,python,nodejs,express,supabase,aws,cloudflare"
            alt="Skills"
            loading="lazy"
          />
          <img
            src="https://img.shields.io/badge/-Assembly-343a40?style=flat-square"
            alt="Assembly"
            loading="lazy"
          />
        </div>
      </div>

      <div className="stack-section">
        <h4>Frameworks & Other stuff</h4>
        <div className="skills-icons">
          <img
            src="https://skillicons.dev/icons?i=git,github,obsidian,arch,debian,vscode,pycharm,sklearn,md,linux,unity,windows"
            alt="Frameworks"
            loading="lazy"
          />
          <img
            src="https://antigravity.google/assets/image/brand/antigravity-icon__full-color.png"
            alt="Antigravity"
            width="48"
            height="48"
            loading="lazy"
          />
                  <img src="https://images.seeklogo.com/logo-png/68/1/claude-code-logo-png_seeklogo-681795.png" alt="Claude Code" width="48" height="48"/>
          <img
            src="https://ms-playwright.gallerycdn.vsassets.io/extensions/ms-playwright/playwright/1.1.15/1749049892255/Microsoft.VisualStudio.Services.Icons.Default"
            alt="Playwright"
            width="48"
            height="48"
            loading="lazy"
          />
          <img
            src="https://avatars.githubusercontent.com/u/5192682?s=280&v=4"
            alt="Xournalpp"
            width="48"
            height="48"
            loading="lazy"
          />
          <img
            src="https://skillicons.dev/icons?i=instagram,gmail,discord,twitter,figma,sublime,postman,vercel"
            alt="Social & tools"
            loading="lazy"
          />
        </div>
      </div>

      <div className="stack-section">
        <h4>Skills I want to learn / learning</h4>
        <div className="skills-icons">
          <img
            src="https://skillicons.dev/icons?i=vue,java,maven,spring,sass,jenkins,docker,rust"
            alt="Learning"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}

export default Stack;