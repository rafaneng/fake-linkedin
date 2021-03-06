import React from 'react';
import Header from '../../components/Header';
import RightSidebarNews from '../../components/RightSidebarNews';
import SidebarLeft from '../../components/SidebarLeft';
import './styles.css';

const Home = () => {
  return (
    <>
    <Header />
    <main className="main-home-container">
    <SidebarLeft img="https://media-exp1.licdn.com/dms/image/C4D03AQFxS09VBmEr9A/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=by7OTbgoskI3wRNwEHzGpmiKeeQrEax6NwWdaRjxrLk" nome="Sergio Rial" cargo="CEO - Santander Brasil" />

      <div className="home-feed">
        <div className="feed-write"></div>
        <div className="feed-item"></div>
        <div className="feed-item"></div>
        <div className="feed-item"></div>
        <div className="feed-item"></div>

      </div>
      <RightSidebarNews />
    </main>
    </>
  );
};

export default Home;