import React from 'react';
import Header from '../../components/Header';
import RightSidebarNews from '../../components/RightSidebarNews';
import SidebarLeft from '../../components/SidebarLeft';
import './styles.css';

import Card from '../../components/Card';
import FeedWrite from '../../components/FeedWrite';

import dados from '../../dados.json'

const Home = () => {
  return (
    <>
    <Header />
    <main className="main-home-container">
    <SidebarLeft img="https://media-exp1.licdn.com/dms/image/C4D03AQFxS09VBmEr9A/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=by7OTbgoskI3wRNwEHzGpmiKeeQrEax6NwWdaRjxrLk" nome="Sergio Rial" cargo="CEO - Santander Brasil" />

      <div className="home-feed">
        <FeedWrite />
        {dados.map((dados)=>{
            return <Card  key={dados.id} foto={dados.foto} nome={dados.nome} subTitle={dados.subTitle} url={dados.url} text={dados.text} />;
          })
        }
      </div>
      <RightSidebarNews />
    </main>
    </>
  );
};

export default Home;