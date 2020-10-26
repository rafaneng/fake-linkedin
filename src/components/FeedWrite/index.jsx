import React from "react";
import './FeedWrite.css';

const FeedWrite = () => {
    return (
        <section className="feed-write">
            <div className="container-write">
                <i class="fas fa-edit"></i>
                <span>Começar uma publicação</span>
            </div>
            <div className="container-options">
                <div>
                    <i class="fas fa-camera photo"></i>
                    <span>Foto</span>
                </div>
                <div>
                    <i class="fas fa-video video"></i>
                    <span>Vídeo</span>
                </div>
                <div>
                    <i class="far fa-calendar event"></i>
                    <span>Evento</span>
                </div>
                <div>
                    <i class="far fa-newspaper news"></i>
                    <span>Escrever Artigo</span>
                </div>
            </div>
        </section>
    );
}

export default FeedWrite;