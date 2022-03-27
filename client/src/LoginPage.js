import React, { useEffect } from 'react'
import { Link } from "react-router-dom"

function LoginPage() {
  useEffect(async () => {
    let play = false;
    let ii = null;
    let colors = ['rgba(0,0,0,0.35)'
      , 'rgba(255,255,255,.35)'
      , 'rgba(0,0,0,0.35)'
      , 'rgba(0,0,0,0.35)'
    ];

    function getRender(pdx, pdy, pcolors) {
      let cvs = document.getElementById("tv-screen");
      let ctx = cvs.getContext('2d');
      let wt = cvs.width;
      let ht = cvs.height;
      let dx = pdx;
      let dy = pdy;
      let colors = pcolors;
      return function () {
        for (let x = 0; x < wt; x += dx)
          for (let y = 0; y < ht; y += dy) {
            let idx = Math.floor(Math.random() * colors.length);
            ctx.fillStyle = colors[idx];
            ctx.fillRect(x, y, dx, dy);
          }
      }
    };

    let render = getRender(1, 2, colors);

    function doSwitch(e) {
      play = !play;
      if (play)
        ii = setInterval(render, 0);
      else
        clearInterval(ii);
    };

    doSwitch();
    document.body.addEventListener('keydown', doSwitch);
  })

  return (
    <>
      <div className="television">
        <div className="tv-border">
          <div className="screen-border"></div>
          <Link to="/signup" style={{ color: "black" }}>
            <div className="channel-dial">Sign Up</div>
          </Link>
          <Link to="/login" style={{ color: "black" }}>
            <div className="volume-dial" >Login</div>
          </Link>
          <div className="sockets">
            <span className="socket-1"></span>
            <span className="socket-2"></span>
            <span className="socket-3"></span>
          </div>
          <div className="speakers">
            <span className="speaker"></span>
            <span className="speaker-2"></span>
            <span className="speaker-3"></span>
          </div>
          <div className="power-button">
            <span className="make"></span>
          </div>
          <div className="screen-border-2"></div>
          <canvas id="tv-screen" />
          <form className="login">
            <input placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage