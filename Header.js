import React from 'react'
function Header() {
  return (
    <div>
        
    <nav className='navigation'>
<div className='logo'>
   <img className='logoImg' src='../logo3.png' alt='logo'></img>
</div>

<input type="checkbox" id="click"></input>
         <label for="click" class="menu-btn">
         <i class="fas fa-bars"></i>
         </label>
         
    <ul>
    
        <li><a className='active' href='@'>Home</a></li>
        <li><a href='@'>Services</a></li>
        <li><a href='@'>Contact</a></li>
        <li><a href='@'>Projects</a></li>
        </ul>
    </nav>
    
    </div>
  )
}

export default Header