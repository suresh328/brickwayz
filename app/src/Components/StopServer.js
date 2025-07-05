import React from 'react'

const StopServer = () => {
  const containerStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    flexDirection: 'column' ,
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '100px',
    margin: 0,
    color: '#dc3545',
  };

  const subHeadingStyle = {
    fontSize: '28px',
    margin: '10px 0',
  };

  const paragraphStyle = {
    fontSize: '16px',
    color: '#666',
    marginBottom: '30px',
  };

  const buttonStyle = {
    textDecoration: 'none',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '4px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>404</h1>
      <h2 style={subHeadingStyle}>Oops! Page not found</h2>
      <p style={paragraphStyle}>
        The page you're looking for might have been removed, or is temporarily unavailable.
      </p>
      <a href="/" style={buttonStyle}>Go to Homepage</a>
    </div>


  );
}

export default StopServer
