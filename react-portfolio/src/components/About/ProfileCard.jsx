import React from "react";
import styled from "styled-components";

const ProfileCard = ({

  photoUrl = "/assets/images/card-profile.jpg", 

}) => {
  return (
    <Wrap>
      <div className="card">
        <div
          className="card-photo"
          style={{ backgroundImage: `url(${photoUrl})` }}
          aria-label="Profile photo"
        />

        <div className="card-socials">
        {/* X (Twitter) */}
        <button
            className="card-socials-btn x"
            onClick={() => window.open("https://x.com/dinuwara_P", "_blank")}
            aria-label="X"
        >
            <svg viewBox="0 0 24 24" width="20" height="20">
            <path d="M18.244 2H21l-6.545 7.487L22 22h-6.406l-5.02-6.584L4.56 22H2l7.02-8.024L2 2h6.406l4.533 5.99L18.244 2Zm-1.12 18h1.77L7.02 4H5.13l11.994 16Z" />
            </svg>
        </button>

        {/* Reddit */}
        <button
            className="card-socials-btn reddit"
            onClick={() => window.open("https://reddit.com/user/Dinuwara_17", "_blank")}
            aria-label="Reddit"
        >
            <svg viewBox="0 0 24 24" width="22" height="22">
            <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 3.313 1.343 6.313 3.515 8.485.254.254.52.494.796.72C5.744 22.308 8.79 24 12 24c6.627 0 12-5.373 12-12Zm-6.297 1.127c.014.143.02.286.02.433 0 2.254-2.577 4.083-5.76 4.083s-5.76-1.83-5.76-4.083c0-.147.007-.29.02-.433-.417-.192-.705-.61-.705-1.096 0-.669.542-1.21 1.21-1.21.329 0 .627.132.843.345 1.05-.745 2.45-1.226 3.98-1.278l.797-3.744 2.641.558a1.22 1.22 0 1 0 .177-.865l-2.982-.63-.894 4.19c1.533.046 2.936.528 3.987 1.275.215-.21.512-.34.839-.34.668 0 1.21.541 1.21 1.21 0 .486-.288.904-.705 1.096Z" />
            </svg>
        </button>

        {/* Discord */}
        <button
            className="card-socials-btn discord"
            onClick={() => window.open("https://discord.com/users/776088794859831336", "_blank")}
            aria-label="Discord"
        >
            <svg viewBox="0 0 245 240" width="22" height="22">
            <path d="M104.4 104.8c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1Zm36.2 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1Z" />
            <path d="M189.5 20h-134C24.7 20 10 34.7 10 53.5v133c0 18.8 14.7 33.5 33.5 33.5h113.1l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V53.5c0-18.8-14.7-33.5-33.5-33.5Zm-39.7 135s-3.7-4.4-6.8-8.3c13.5-3.8 18.6-12.3 18.6-12.3-4.2 2.8-8.2 4.8-11.8 6.2-5.1 2.1-10 3.5-14.8 4.3-9.8 1.8-18.8 1.3-26.4-.1-5.7-1.1-10.6-2.6-14.7-4.3-2.3-.9-4.8-2-7.3-3.3-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.2-1.8-1-2.8-1.7-2.8-1.7s5 8.3 18.2 12.2c-3.1 3.9-6.9 8.5-6.9 8.5-22.8-.7-31.5-15.7-31.5-15.7 0-33.3 14.9-60.3 14.9-60.3 14.9-11.1 29-10.8 29-10.8l1 1.2c-18.6 5.4-27.2 13.5-27.2 13.5s2.3-1.3 6.1-3c10.9-4.8 19.5-6.1 23-6.4.6-.1 1.1-.2 1.7-.2 6.1-.8 13-.9 20.2.2 9.5 1.4 19.7 5 30.2 12.1 0 0-8.2-7.8-26-13.2l1.4-1.6s14.1-.3 29 10.8c0 0 14.9 27 14.9 60.3 0 0-8.8 15-31.6 15.7Z" />
            </svg>
        </button>
        </div>

      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  .card {
    --bg-color:  rgba(220, 220, 255, 0.15); 
    --main-color: rgba(25, 30, 25, 0.9);

    width: 240px;
    height: 240px;
    border-radius: 16px;

    background: linear-gradient(
    135deg,
    rgba(230, 230, 255, 0.12) 0%,
    rgba(200, 210, 255, 0.08) 100%
    );
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow:     0 8px 32px rgba(150, 160, 220, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(12px);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 26px 60px rgba(16, 16, 8, 0.18);
  }

  .card-photo {
    width: 180px;
    height: 180px;
    border-radius: 18px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    border: 2px solid rgba(255, 255, 255, 0.55);
    box-shadow: 0 12px 22px rgba(0,0,0,0.18);

    transition: transform 0.25s ease;
  }

  .card:hover .card-photo {
    transform: translateY(-3px) scale(1.04);
  }

  .card-socials {
    display: flex;
    gap: 16px;
    margin-top: 18px;

    opacity: 0;
    transform: translateY(8px);
    transition: 0.35s ease;
  }

  .card:hover .card-socials {
    opacity: 1;
    transform: translateY(0);
  }

  .card-socials-btn {
    width: 34px;
    height: 34px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.55);
    display: grid;
    place-items: center;
    transition: transform 0.15s ease, background 0.2s ease;
  }


    .card-socials-btn {
    position: relative;
    isolation: isolate;
    }

    .card-socials-btn::before {
    content: "";
    position: absolute;
    inset: -6px;
    border-radius: 14px;
    opacity: 0;
    filter: blur(12px);
    transition: opacity 0.25s ease;
    z-index: -1;
    }

    .card-socials-btn::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 10px;
    background: linear-gradient(
        180deg,
        rgba(255,255,255,0.45),
        rgba(255,255,255,0.1)
    );
    opacity: 0;
    transition: opacity 0.25s ease;
    pointer-events: none;
    }

    .card-socials-btn:hover::before,
    .card-socials-btn:hover::after {
    opacity: 1;
    }

    .card-socials-btn:hover {
    transform: translateY(-4px) scale(1.03);
    }


  .card-socials-btn svg {
    fill: var(--main-color);
  }

  .card-socials-btn:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.75);
  }

  /* X (Twitter) */
.card-socials-btn.x::before {
  background: radial-gradient(circle, rgba(0,0,0,0.6), transparent 70%);
}
.card-socials-btn.x:hover svg {
  fill: #000000;
}

/* Reddit */
.card-socials-btn.reddit::before {
  background: radial-gradient(circle, rgba(255,69,0,0.65), transparent 70%);
}
.card-socials-btn.reddit:hover svg {
  fill: #FF4500;
}

/* Discord */
.card-socials-btn.discord::before {
  background: radial-gradient(circle, rgba(88,101,242,0.7), transparent 70%);
}
.card-socials-btn.discord:hover svg {
  fill: #5865F2;
}

`;

export default ProfileCard;
