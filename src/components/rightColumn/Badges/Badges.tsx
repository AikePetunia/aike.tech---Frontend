import vsc from "./assets/vsc.gif";
import sucks from "./assets/sucks.gif";
import vrc from "./assets/vrchat.avif";
import firefox from "./assets/firefoxget.gif";
import debian from "./assets/powered-by-debian.gif";
import forever from "./assets/forever_online.gif";
import a7 from "./assets/a7.gif";
import arch from "./assets/arch.gif";
import compaq from "./assets/comp.gif";
import construction from "./assets/construction.avif";
import css from "./assets/css.avif";
import discord from "./assets/discord.gif";
import iLikeComputer from "./assets/i_like_computer.avif";
import lonely from "./assets/lonely.avif";
import minecraft from "./assets/minecraft.gif";
import tumblr from "./assets/2006.gif";
import ublock from "./assets/ublock.avif";
import zanarkand from "./assets/zanarkand.gif";
import nika from "./assets/nika.avif";
import myGif from "./assets/myWeb.gif";
import "./badges.css";

export function Badges() {
  return (
    <>
      <div className="badges-container">
        <img
          alt="made with vscode"
          decoding="async"
          height="31"
          loading="lazy"
          src={vsc}
          width="88"
        />
        <iframe
          src="//incr.easrng.net/badge?key=aike"
          style={{ background: "url(//incr.easrng.net/bg.gif)" }}
          title="increment badge"
          width="88"
          height="31"
          frameBorder="0"
        />
        <img src={forever} alt="forever online" height="31" width="88" />
        <a
          href="https://hello.vrchat.com/"
          rel="noopener"
          target="_blank"
          title="VRChat"
        >
          <img
            alt="VRChat 88x31"
            height="31"
            loading="lazy"
            src={vrc}
            width="88"
          />
        </a>
        <img
          alt="Get Firefox"
          height="31"
          loading="lazy"
          src={firefox}
          width="88"
        />
        <img
          alt="Powered by Debian"
          height="31"
          loading="lazy"
          src={debian}
          width="88"
        />
        <img
          alt="this site sucks"
          height="31"
          loading="lazy"
          src={sucks}
          width="88"
        />
        <img alt="A7" height="31" loading="lazy" src={a7} width="88" />
        <img
          alt="Arch Linux"
          height="31"
          loading="lazy"
          src={arch}
          width="88"
        />
        <img alt="Compaq" height="31" loading="lazy" src={compaq} width="88" />
        <img
          alt="Under Construction"
          height="31"
          loading="lazy"
          src={construction}
          width="88"
        />
        <img alt="CSS Valid" height="31" loading="lazy" src={css} width="88" />
        <img
          alt="Discord"
          height="31"
          loading="lazy"
          src={discord}
          width="88"
        />
        <img
          alt="I like computer"
          height="31"
          loading="lazy"
          src={iLikeComputer}
          width="88"
        />
        <img alt="Lonely" height="31" loading="lazy" src={lonely} width="88" />
        <img
          alt="Minecraft"
          height="31"
          loading="lazy"
          src={minecraft}
          width="88"
        />
        <img alt="Tumblr" height="31" loading="lazy" src={tumblr} width="88" />
        <img
          alt="uBlock Origin"
          height="31"
          loading="lazy"
          src={ublock}
          width="88"
        />
        <img
          alt="Zanarkand"
          height="31"
          loading="lazy"
          src={zanarkand}
          width="88"
        />
        <a
          href="https://nikableh.moe"
          rel="noopener noreferrer"
          className="select-none inline-block m-1"
          data-v-a6540401=""
        >
          <img
            width="88"
            height="31"
            src={nika}
            alt="nikableh's 88x31 badge"
            className="badge"
            data-v-a6540401=""
          ></img>
        </a>
        <a
          href="https://aike.tech"
          style={{
            filter:
              "drop-shadow(0 0 8px #ff0000) drop-shadow(0 0 16px #ff0000)",
          }}
        >
          <img
            src={myGif}
            alt="My page lol"
            className="badge"
            width="88"
            height="31"
          ></img>
        </a>
      </div>

      <div className="webring-container">
        <h3>webring !</h3>
        <div className="webring-links">
          <a
            href="https://webring.grimmlabs.org/aike/prev"
            target="_blank"
            rel="noopener noreferrer"
          >
            ← prev
          </a>
          <a
            href="https://webring.grimmlabs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            home
          </a>
          <a
            href="https://webring.grimmlabs.org/aike/next"
            target="_blank"
            rel="noopener noreferrer"
          >
            next →
          </a>
        </div>
      </div>
    </>
  );
}
