import { Col } from "react-bootstrap";

const MySideBar = () => {
  return (
    <Col xs={4} className="sidebar-bg">
      <a href="index.html">
        <div className="sidebar-logo mt-2">
          <span>
            <i className="bi bi-spotify"></i>
          </span>
          <span className="ml-2 sidebar-logo-text">Spotify</span>
        </div>
      </a>
      <div className="sidebar-top mt-3">
        <a className="sidebar-inside" href="./index.html">
          <div className="search-item-a">
            <span>
              <i className="bi bi-house-door-fill"></i>
            </span>
            <span className="sidebar-span">Home</span>
          </div>
        </a>
        <a className="sidebar-inside" href="./search.html">
          <div className="search-item-a">
            <span>
              <i className="bi bi-search"></i>
            </span>
            <span className="sidebar-span">Search</span>
          </div>
        </a>
        <div className="sidebar-divider"></div>
        <div>
          <span>
            <i className="bi bi-plus-square-fill"></i>
          </span>
          <span>Create Playlist</span>
        </div>
        <div>
          <span>
            <img src="Assests/liked-icon.png" alt="" />
          </span>
          <span>Liked Songs</span>
        </div>
      </div>
      <div className="sidebar-line-divider ">
        <hr className="my-2" />
      </div>
      <div className="sidebar-bottom mt-2">
        <div className="sidebar-bottom-content">
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>
            June19{" "}
            <span className="float-right">
              <i className="bi bi-people"></i>
            </span>{" "}
          </div>
          <div>
            Party{" "}
            <span className="float-right">
              <i className="bi bi-people"></i>
            </span>{" "}
          </div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
          <div>FRANCHISE ft. Young Thug something</div>
        </div>

        <div className="sidebar-instal my-3">
          <span>
            <i className="bi bi-arrow-down-circle"></i>
          </span>
          <span className="ml-2">Install App</span>
        </div>
      </div>
    </Col>
  );
};
export default MySideBar;
