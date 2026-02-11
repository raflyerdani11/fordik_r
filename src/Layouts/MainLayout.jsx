import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="containerMainLayout1">
      <header>
        <p>
          <Link to={'/'}>FORDIK-R</Link>
        </p>
      </header>
      <div className="containerMainLayout2">
        <Outlet />
      </div>
      <div className="bottomNav">
        <nav>
          <ul>
            <li>
              <button
                style={{
                  color: 'white',
                  backgroundColor: 'black',
                  borderRadius: '5px',
                  border: '0px',
                  padding: '5px 10px',
                }}
              >
                <Link
                  to={'/'}
                  style={{
                    color: 'white',
                  }}
                >
                  Thread
                </Link>
              </button>
            </li>
            {!localStorage.getItem('token') && (
              <li>
                <button
                  style={{
                    color: 'black',
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    border: '0px',
                    padding: '5px 10px',
                  }}
                >
                  <Link
                    to={'/login'}
                    style={{
                      color: 'black',
                    }}
                  >
                    Login
                  </Link>
                </button>
              </li>
            )}
            {localStorage.getItem('token') && (
              <li>
                <button
                  style={{
                    color: 'black',
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    border: '0px',
                    padding: '5px 10px',
                  }}
                >
                  <Link
                    to={'/add-thread'}
                    style={{
                      color: 'black',
                    }}
                  >
                    Add Thread
                  </Link>
                </button>
              </li>
            )}
            {localStorage.getItem('token') && (
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    localStorage.removeItem('token');
                    window.location.reload();
                  }}
                  style={{
                    color: 'white',
                    backgroundColor: 'red',
                    borderRadius: '5px',
                    border: '0px',
                    padding: '5px 10px',
                    cursor: 'pointer',
                  }}
                >
                  Log Out
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MainLayout;
