import React  from 'react'

 const Navbar= ()=>{
  
    return (
      <div>
         <div class="wrapper">
         <div class="Container">
         <div class="nav">
            <div class="logo">
                LOGO
            </div>
            <div class="menu">
                <ul class="navMenu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Listining</a></li>
                    <li><a href="#">Locations</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Registration</a></li>
                </ul>
            </div>
        </div>
        <div class="header">
            <h1>The Spark Dimond</h1>
            <p>New area / Future City</p>
            <button type="button">View Details</button>
        </div>
    </div>
    </div>
      </div>
    )
  
}

export default Navbar
