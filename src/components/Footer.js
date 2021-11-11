import React from 'react'

const Footer = () => {
    const year= new Date().getFullYear()
    return (
        
        <div className="container" >
            <p id="footer">copyright © {year}</p>
            
        </div>
    )
}

export default Footer
