import React, { useState, useEffect } from "react";
import { Header } from "../../Component/Header/Header";
import { Footer } from "../../Component/Footer/Footer";
import { LeftPanel } from "../../Component/LeftPanel/LeftPanel";
import Modal from 'react-modal';
import './MuseumPage.scss';

Modal.setAppElement('#root'); // Это нужно для доступности модального окна

export function MuseumPage() {
  const [text, setText] = useState('');
  const [image_url, setImage_url] = useState('');
  const [videoLinks, setVideoLinks] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const videos = ['/Data/Museum/Военные_атташе_и _лены_их_семей_в_Александрии.mp4', '/Data/Museum/Гуканне_вясны_Музейное_занятие.mp4', '/Data/Museum/Делегация_Министерства_спорта_РФ_в_Александрии.mp4', '/Data/Museum/Дожинки_История_и_современность.mp4', '/Data/Museum/Международный_день_памяти_жертв_холокоста.mp4', '/Data/Museum/Патриотическое_воспитание_школьников_в_музее.mp4', '/Data/Museum/Петров_день_в_д.Кривель_Туристический_проект.mp4', '/Data/Museum/Проект_по_гражданско-патриотическому_воспитанию_дошкольников,_детский_сад.mp4'];
  useEffect(() => {
    const fetchData = async () => {
      // try {
      //     // const response = await fetch('http://backend:4000/api/getAllMuseum');
      //     // const data = await response.json();
      //     // if (data.length > 0) {
      //     //     setImage_url(data[0].image_url);
      //     //     setText(data[0].text);
      //     // }

      //     const videoResponse = await fetch('http://backend:4000/api/getMP4Links');
      //     const videoData = await videoResponse.json();
      //     setVideoLinks(videoData);
      // } catch (error) {
      //     console.error('Error:', error);
      // }
      setVideoLinks(videos)

    };
    fetchData();
  }, []);

  const openModal = (videoLink) => {
    setCurrentVideo(videoLink);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div className="museumPage">
      <Header></Header>
      <div className="museumPage__container">
        <div className="museumPage__informationBlock">
          <div className="museumPage__informationBlock__name">Музей</div>
          <div className="videos">
            {videoLinks.map((link, index) => (
              <video key={index} src={link} width='100%' height='100%' onClick={() => openModal(link)} />
            ))}
          </div>

        </div>
        <LeftPanel activeButton="museum"></LeftPanel>
      </div>
      <Footer></Footer>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
      >
        <div style={{ position: 'absolute', top: '20px', left: '20px', cursor: 'pointer' }} onClick={closeModal}>
          <div style={{ width: '35px', height: '2px', backgroundColor: 'black', transform: 'rotate(45deg)' }}></div>
          <div style={{ width: '35px', height: '2px', backgroundColor: 'black', transform: 'rotate(-45deg)' }}></div>
        </div>
        <video src={currentVideo} controls autoPlay className="modal_video" />
      </Modal>
    </div>
  )
}
