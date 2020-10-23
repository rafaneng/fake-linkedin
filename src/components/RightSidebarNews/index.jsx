import React from "react";
import "./RightSidebarNews.css";

export default function RightSidebarNews() {
    return (
        <section className="card-box-section-container">
            <div className="rsn-container">
                <div className="rsn-title-subcontainer">
                    <h2 className="rsn-h2-ul-news">LinkedIn Notícias</h2>
                </div>
                <ul className="rsn-ul-news">
                    <li>
                        <a href="#" className="rsn-li-link-item">
                            <div className="rsn-item-label">
                                <span className="rsn-li-point"></span>
                                Recrutamento inclusivo e seleção especial
                            </div>
                            <span className="rsn-li-info">há 18 h • 274 leitores</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="rsn-li-link-item">
                            <div className="rsn-item-label">
                                <span className="rsn-li-point"></span>
                                Recrutamento inclusivo e seleção especial
                            </div>
                            <span className="rsn-li-info">há 18 h • 274 leitores</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="rsn-li-link-item">
                            <div className="rsn-item-label">
                                <span className="rsn-li-point"></span>
                                Recrutamento inclusivo e seleção especial
                            </div>
                            <span className="rsn-li-info">há 18 h • 274 leitores</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="rsn-li-link-item">
                            <div className="rsn-item-label">
                                <span className="rsn-li-point"></span>
                                Recrutamento inclusivo e seleção especial
                            </div>
                            <span className="rsn-li-info">há 18 h • 274 leitores</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}