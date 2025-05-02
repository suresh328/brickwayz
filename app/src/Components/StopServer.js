import React from 'react'

const StopServer = () => {
    return (
        <div className="main_container" style={{
            height:"100vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}>
        <div className="server-status">
          <div className="emoji">404 error</div>
          <h2>Server is stopped</h2>
          <p>
            Can't reach the server.<br />
            Please check your connection or renew your hosting plan.
          </p>
         
          <div className="powered-by">
            <span>Powered by </span>
            <a
             
              target="_blank"
              rel="noopener noreferrer"
            >
              Hostinger
            </a>
          </div>
        </div>
      </div>
      

    );
}

export default StopServer
