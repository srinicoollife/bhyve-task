import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const history = useHistory();

  const [showMenu, setshowMenu] = useState(false);

  useEffect(() => {
    if (location.pathname == "/profile" || location.pathname == "/basicinfo") {
      setshowMenu(true);
    } else {
      setshowMenu(false);
    }
  }, [location.pathname]);

  const handleLogoutClick = () => {
    window.localStorage.clear();
    history.push(`/login`);
  };

  return (
    <div className="text-center py-4">
      <img
        src="https://bhyve.io/wp-content/uploads/2019/04/logo-b.png"
        height="48"
        alt="logo"
      />
      {showMenu && (
        <div
          class="dropdown"
          style={{ display: "inline-block", float: "right" }}
        >
          <button
            class="btn btn-info dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Profile
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#" onClick={handleLogoutClick}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
