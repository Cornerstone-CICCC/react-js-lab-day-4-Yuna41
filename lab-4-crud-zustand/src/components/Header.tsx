import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <div className="logo">LOGO</div>
      <nav>
        <menu>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">Posts List</Link></li>
          <li><Link to="/trash">Trash List</Link></li>
        </menu>
      </nav>
    </header>
  )
}

export default Header