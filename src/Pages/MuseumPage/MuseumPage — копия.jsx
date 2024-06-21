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

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/getAllMuseum');
            const data = await response.json();
            if (data.length > 0) {
                setImage_url(data[0].image_url);
                setText(data[0].text);
            }
            const videoResponse = await fetch('http://localhost:4000/api/getMP4Links');
            const videoData = await videoResponse.json();
            setVideoLinks(videoData);
        } catch (error) {
            console.error('Error:', error);
        }
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
              <div style={{position: 'absolute', top: '20px', left: '20px', cursor: 'pointer'}} onClick={closeModal}>
                <div style={{width: '35px', height: '2px', backgroundColor: 'black', transform: 'rotate(45deg)'}}></div>
                <div style={{width: '35px', height: '2px', backgroundColor: 'black', transform: 'rotate(-45deg)'}}></div>
              </div>
              <video src={currentVideo} controls autoPlay className="modal_video" />
            </Modal>
        </div>
    )
}
