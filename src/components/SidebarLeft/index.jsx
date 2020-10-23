import React from "react";
import "./SidebarLeft.css";

const SidebarLeft = (props) => {
    return(
        <aside className="SidebarLeft">
            <section className="container profile">
                <div className="profile-info">
                    <div className="profile-img"><img src={props.img} alt=""/></div>
                    <div className="profile-name-sub">
                        <p><strong>{props.nome}</strong></p>
                        <p>{props.cargo}</p>
                    </div>
                </div>
                <div className="profile-feed">
                    <div>
                        <div><a href="#"><span>Quem viu seu perfil </span>5.513</a></div>
                        <a href="#"><span>Viram sua publicação </span>115.513</a>
                    </div>
                    <div>
                        <a href="">
                            <p>Acesse ferramentas exclusivas</p>
                            <p><strong>1 mês de Premium grátis</strong></p>
                        </a>
                    </div>
                </div>
                <div className="profile-items">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false"><path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1zM5 12V3h6v9l-3-2z"></path></svg>
                    <strong> Itens Salvos</strong>
                </div>
            </section>
            <section className="container tag">
                <ul>
                    <li><h2>Recentes</h2></li>
                    <li>
                        <ul>
                            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false"><path d="M13 7V5h-1.57L12 1h-1.88l-.57 4H7.3l.58-4H6l-.57 4H3v2h2.14l-.28 2H3v2h1.57L4 15h1.88l.57-4H8.7l-.58 4H10l.57-4H13V9h-2.14l.28-2zM9 9H6.73L7 7h2.27z"></path></svg> money</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false"><path d="M13 7V5h-1.57L12 1h-1.88l-.57 4H7.3l.58-4H6l-.57 4H3v2h2.14l-.28 2H3v2h1.57L4 15h1.88l.57-4H8.7l-.58 4H10l.57-4H13V9h-2.14l.28-2zM9 9H6.73L7 7h2.27z"></path></svg> law</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false"><path d="M13 7V5h-1.57L12 1h-1.88l-.57 4H7.3l.58-4H6l-.57 4H3v2h2.14l-.28 2H3v2h1.57L4 15h1.88l.57-4H8.7l-.58 4H10l.57-4H13V9h-2.14l.28-2zM9 9H6.73L7 7h2.27z"></path></svg> cars</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false"><path d="M13 7V5h-1.57L12 1h-1.88l-.57 4H7.3l.58-4H6l-.57 4H3v2h2.14l-.28 2H3v2h1.57L4 15h1.88l.57-4H8.7l-.58 4H10l.57-4H13V9h-2.14l.28-2zM9 9H6.73L7 7h2.27z"></path></svg> data</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false"><path d="M13 7V5h-1.57L12 1h-1.88l-.57 4H7.3l.58-4H6l-.57 4H3v2h2.14l-.28 2H3v2h1.57L4 15h1.88l.57-4H8.7l-.58 4H10l.57-4H13V9h-2.14l.28-2zM9 9H6.73L7 7h2.27z"></path></svg> music</li>
                        </ul>
                    </li>
                    <li><a href="#">Grupos</a></li>
                    <li><a href="#">Eventos <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
    <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5v2z"></path>
    </svg></a></li>
                    <li><a href="#">Hashtags seguidas</a></li>
                    <li>
                        <ul>
                            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false"><path d="M13 7V5h-1.57L12 1h-1.88l-.57 4H7.3l.58-4H6l-.57 4H3v2h2.14l-.28 2H3v2h1.57L4 15h1.88l.57-4H8.7l-.58 4H10l.57-4H13V9h-2.14l.28-2zM9 9H6.73L7 7h2.27z"></path></svg> money</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false"><path d="M13 7V5h-1.57L12 1h-1.88l-.57 4H7.3l.58-4H6l-.57 4H3v2h2.14l-.28 2H3v2h1.57L4 15h1.88l.57-4H8.7l-.58 4H10l.57-4H13V9h-2.14l.28-2zM9 9H6.73L7 7h2.27z"></path></svg> law</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false"><path d="M13 7V5h-1.57L12 1h-1.88l-.57 4H7.3l.58-4H6l-.57 4H3v2h2.14l-.28 2H3v2h1.57L4 15h1.88l.57-4H8.7l-.58 4H10l.57-4H13V9h-2.14l.28-2zM9 9H6.73L7 7h2.27z"></path></svg> cars</li>
                        </ul>
                    </li>

                </ul>
                <a href="#">Descubra mais</a>
            </section>
        </aside>
    )
}
export default SidebarLeft
