import React from "react";
import './Card.css';

const Card = (props) => {
    return (
        <section className="feed-item">
            <div class="card-profile">
                <div class="profile-img">
                    <img src={ props.foto } alt="" />
                </div>
                <div class="profile-name-sub">
                    <p><strong>{props.nome}</strong></p>
                    <p>{ props.subTitle }</p>
                </div>
            </div>
            <div className="card-text">
                <p>{ props.text }</p>
            </div>
            <div className="card-img">
                <img src={ props.url } alt="" srcset=""/>
            </div>

            <div className="card-interaction">   
                <div>
                    <i class="far fa-thumbs-up"></i>
                    <span>Gostei</span>
                </div>
                <div>
                    <i class="far fa-comment-dots"></i>
                    <span>Comentar</span>
                </div>
                <div>
                    <i class="fas fa-share"></i>
                    <span>Compartilhar</span>
                </div>
                <div>
                    <i class="far fa-paper-plane"></i>
                    <span>Enviar</span>
                </div>
            </div> 
        </section>
    );
};

export default Card;