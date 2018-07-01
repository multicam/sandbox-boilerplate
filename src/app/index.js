import React from "react";
import logo from "../assets/logo.svg";

export default () => (
  <div className="main-container">
    <header className="header header-6">
      <div className="branding">
        <a className="logo-and-title" routerlink="/" href="/">
          <span className="logo">
            {/*} <img src={logo} alt="logo" width='48' /> */}
          </span>
          <span className="title">Project B&W</span>
        </a>
      </div>
      <div className="header-nav">
        <a href="javascript://" className="active nav-link nav-text">
          Dashboard
        </a>
        <a href="javascript://" className="nav-link nav-text">
          Interactive Analytics
        </a>
      </div>
      <div className="header-actions">
        <a href="javascript://" className="nav-link nav-icon">
          <clr-icon shape="cog" />
        </a>
      </div>
    </header>
    <nav className="subnav">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Subnav 1
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Subnav 2
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Subnav 3
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Subnav 4
          </a>
        </li>
      </ul>
    </nav>
    <div className="content-container">
      <div className="content-area">
        <div>Coucou</div>
        <span className="spinner">Loading...</span>
      </div>
      <nav className="sidenav">
        <section className="sidenav-content">
          <a href="#" className="nav-link active">
            Nav Element 1
          </a>
          <a href="#" className="nav-link">
            Nav Element 2
          </a>
          <section className="nav-group collapsible">
            <input id="tabexample1" type="checkbox" />
            <label htmlFor="tabexample1">Collapsible Nav Element</label>
            <ul className="nav-list">
              <li>
                <a className="nav-link">Link 1</a>
              </li>
              <li>
                <a className="nav-link">Link 2</a>
              </li>
            </ul>
          </section>
          <section className="nav-group collapsible">
            <input id="tabexample2" type="checkbox" />
            <label htmlFor="tabexample2">
              <b>Default Nav Element</b>
              <span className="badge badge-info">12</span>
            </label>
            <ul className="nav-list">
              <li>
                <a className="nav-link">Link 1</a>
              </li>
              <li>
                <a className="nav-link">Link 2</a>
              </li>
              <li>
                <a className="nav-link active">Link 3</a>
              </li>
              <li>
                <a className="nav-link">Link 4</a>
              </li>
              <li>
                <a className="nav-link">Link 5</a>
              </li>
              <li>
                <a className="nav-link">Link 6</a>
              </li>
            </ul>
          </section>
        </section>
      </nav>
    </div>
  </div>
);
