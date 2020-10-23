import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi'
import "./styles.css";
import HeaderNavButton from '../HeaderNavButton';

const Header = () => {
  return (
    <header className="main-header">
      <div className="main-header-content">
      <div className="logo-and-search">
      <img src="https://static-exp1.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" alt="Logo" />
      <div className="header-search-bar-container">
        <span><BiSearchAlt2 height="100%"/></span>
        <input className="header-search-bar-input" placeholder="Pesquisar"/>
      </div>
      </div>
      
      <nav className="header-nav">
        <HeaderNavButton icon={<svg width="24" height="24"><path d="M22 8.45l-9.15-6.19a1.5 1.5 0 00-1.69 0L2 8.45 3.06 10 4 9.37V19a1 1 0 001 1h5v-5h4v5h5a1 1 0 001-1V9.37l.94.63z"></path></svg>} text='Início' highlighted={true} />
        <HeaderNavButton icon={<svg width="24" height="24"><path d="M20.74 14.2L19 13.54v-.68l.25-.41A5 5 0 0020 9.82V9a3 3 0 00-6 0v.82a5 5 0 00.75 2.63l.25.41v.68l-1 .37a4 4 0 00-.58-.28l-2.45-1v-1.8A8 8 0 0012 7V6a4 4 0 00-8 0v1a8 8 0 001 3.86v1.84l-2.45 1A4 4 0 000 17.35V20a1 1 0 001 1h21a1 1 0 001-1v-2.53a3.5 3.5 0 00-2.26-3.27zM16 8.75a1 1 0 012 0v1.44a3 3 0 01-.38 1.46l-.33.6a.25.25 0 01-.22.13h-.14a.25.25 0 01-.22-.13l-.33-.6a3 3 0 01-.38-1.46V8.75zM6 5.85a2 2 0 014 0v1.43a6 6 0 01-.71 2.83l-.29.61a1 1 0 01-.88.53h-.2a1 1 0 01-.92-.53l-.33-.61A6 6 0 016 7.28V5.85zM14 19H2v-1.75a2 2 0 011.26-1.86L7 13.92v-1a3 3 0 001 .18 3 3 0 001-.18v1l3.72 1.42A2 2 0 0114 17.21V19zm7 0h-5v-1.65a4 4 0 00-.55-2l1.05-.4v-.88a2 2 0 00.4.05h.2a2 2 0 00.4-.05v.88l2.53 1a1.5 1.5 0 011 1.4V19z"></path></svg>} text='Minha Rede'  />

        <HeaderNavButton icon={<svg width="24" height="24"><path d="M21 7h-4V6a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H3a1 1 0 00-1 1v11a1 1 0 001 1h18a1 1 0 001-1V8a1 1 0 00-1-1zM9 6a1 1 0 011-1h4a1 1 0 011 1v1H9V6zm11 12H4v-5h16v5zm0-6H4V9h16v3z"></path></svg> } text='Vagas'  />
        <HeaderNavButton icon={<svg width="24" height="24"><path d="M21 8H8a1 1 0 00-1 1v10a1 1 0 001 1h10l4 3V9a1 1 0 00-1-1zm-1 11.11L18.52 18H9v-8h11v9.11zM12 15h5v1h-5v-1zm-8-2h1v2H3a1 1 0 01-1-1V4a1 1 0 011-1h13a1 1 0 011 1v2h-2V5H4v8zm14 0h-7v-1h7v1z"></path></svg>} text='Mensagens'  />
        <HeaderNavButton icon={<svg width="24" height="24"><path d="M20.94 19L19 14.49s-.41-3.06-.8-6.06A6.26 6.26 0 0012 3a6.26 6.26 0 00-6.21 5.44L5 14.49 3.06 19a.71.71 0 00-.06.28.75.75 0 00.75.76H10a2 2 0 104 0h6.27a.74.74 0 00.67-1.04zM12 4.75a4.39 4.39 0 014.35 3.81c.28 2.1.56 4.35.7 5.44H7l.65-5.44A4.39 4.39 0 0112 4.75zM5.52 18l1.3-3h10.36l1.3 3h-13z"></path></svg>} text='Notificações'  />


        <HeaderNavButton icon={
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="Avatar" />
        } text='Eu ▼'  
        className="gray-border-right"/>
        <HeaderNavButton icon={<svg width="24" height="24"><path d="M10 10h4v4h-4v-4zm0 11h4v-4h-4v4zm-7-7h4v-4H3v4zm0 7h4v-4H3v4zM3 7h4V3H3v4zm14 7h4v-4h-4v4zm0-11v4h4V3h-4zm-7 4h4V3h-4v4zm7 14h4v-4h-4v4z"></path></svg>} text='Soluções ▼' />
        <a href="#" className="header-nav-text-link">Experimente premium grátis por 1 mês</a>

      </nav>

      </div>

      

    </header>
  );
};

export default Header;