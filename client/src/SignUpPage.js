import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';

function SignUpPage({ setUser }) {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errors, setErrors] = useState([])
  let history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          history.push("/")
        })
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })
  }

  useEffect(() => {
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
  }, [])

  return (
    <>
      <div className="television">
        <div className="tv-border">
          <div className="screen-border"></div>
          <Link to="/signup" style={{ color: "black" }}>
            <div className="channel-dial">Sign Up</div>
          </Link>
          <Link to="/login" style={{ color: "black" }}>
            <div className="volume-dial" >Log In</div>
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
          <form className="signup" onSubmit={handleSubmit}>
            <div className="signup-form-content">
              <h3 className="bold">SIGN UP</h3>
              <br />
              <input className="form-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <br />
              <input className="form-input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <br />
              <input className="form-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
              <br />
              <input className="form-input" type="password" placeholder="Confirm password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} autoComplete="current-password" />
              <br />
              <button className="form-button" type="submit">Sign Up</button>
              <br />
              <p style={{ color: "red", paddingTop:"10px" }}>{errors.length !== 0 ? errors[0] : null}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUpPage