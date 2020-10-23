import React from 'react';
import './PostBox.css';

function PostBox(){
    return(
        <>
            <div className="post">
                <form className="postingForm">
                    <div className="logoPost"><img src="../images/escrever.svg"/></div>
                    <input className="publishing" placeholder="Começar uma publicação!"></input>
                    <div className="buttonBox">
                        <button className="publishingButton"><img className="ButtonLogo" src="../images/video.svg"/>Foto</button>
                        <button className="publishingButton"><img className="ButtonLogo" src="../images/video.svg"/>Video</button>
                        <button className="publishingButton"><img className="ButtonLogo" src="../images/agenda.svg"/>Evento</button>
                        <button className="publishingButton"><img className="ButtonLogo" src="../images/article.svg"/>Artigo</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default PostBox