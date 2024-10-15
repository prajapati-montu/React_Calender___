import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-calendar/dist/Calendar.css';
import CustomToolbar from './CustomToolbar';
import {
  FaHome, FaCog, FaUser, FaMusic, FaChartBar, FaChevronDown, FaPlay,
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTiktok, FaTrash,
  FaChevronRight, FaShare, FaBars, FaTimes, FaSearch, FaDownload, FaBell, FaLock
} from 'react-icons/fa';
import Calendar from 'react-calendar';

const EventModal = ({ event, onClose }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <div className="modal-header-top-img-text">
        <div className="modal-header-top-img">
          <img src="/assets/images/Frame 427320639.png" alt="Kesariya" className="playlist-image" />
        </div>
        <div className="modal-header">
          <h3>15 November</h3>
          <p>10:00 - 11:00 AM</p>
        </div>

        {/* X button at top-right corner */}
        <div className="modal-close" onClick={onClose}>
          &#10005; {/* HTML entity for "X" sign */}
        </div>
      </div>

      <div className="modal-body">
        <h4>Upcoming song for morning prayers</h4>
        <p>Lorem Ipsum Dolor Sit Amet Consectetur. Ultrices Consecutetur Est Orci Elementum Commodo Velit Nec At Egestas.</p>
        <p>To be played in <span style={{ color: 'green' }}>(15 min)</span></p>

        <h5>Playlist</h5>
        <div className="playlist-item">
          <img src="/assets/images/10 3.png" alt="Kesariya" className="playlist-image" />
          <div className="playlist-details">
            <p>Kesariya</p>
            <p>Pritam Chakraborty - Kesariya (from "Brahmastra")</p>
          </div>
        </div>
        <div className="playlist-item">
          <img src="/assets/images/10 3.png" alt="Kesariya" className="playlist-image" />
          <div className="playlist-details">
            <p>Kesariya</p>
            <p>Pritam Chakraborty - Kesariya (from "Brahmastra")</p>
          </div>
        </div>
      </div>
      <button className="show-more">Show More</button>
    </div>

    {/* CSS styles */}
    <style>{`
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        position: relative;
        width: 400px;
      }
      .modal-header-top-img-text {
        display: flex;
        align-items: center;
      }
      .modal-header {
        flex: 1;
        margin-left: 15px;
      }
      .modal-close {
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 20px;
        cursor: pointer;
      }
      .modal-body {
        margin-top: 20px;
      }
      .playlist-item {
        display: flex;
        align-items: center;
        margin-top: 10px;
      }
      .playlist-image {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      .playlist-details p {
        margin: 0;
      }
      .show-more {
    font-weight: 400;
    font-size: 14px;
    margin-top: 10px;
    padding: 10px;
    cursor: pointer;
    /* background-color: #007bff; */
    color: white;
    border: none;
    border-radius: 5px;
    float: right;
    color: #F1B942;
    line-height: 19.07px;

    
      }
    `}</style>
  </div>
);

function Demo() {
  const location = useLocation();

  const handleDelete = () => {
    console.log("Delete button clicked!");
  };

  const [isPlaylistOn, setIsPlaylistOn] = useState(true);
  const togglePlaylist = () => {
    setIsPlaylistOn(!isPlaylistOn);
  };

  const [showCollection, setShowCollection] = useState(false);
  const [showStations, setShowStations] = useState(false);
  const [showPerformance, setShowPerformance] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [value, setValue] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toggleCollection = () => setShowCollection(!showCollection);
  const toggleStations = () => setShowStations(!showStations);
  const togglePerformance = () => setShowPerformance(!showPerformance);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const localizer = momentLocalizer(moment);

  const events = [
    {
      title: 'Jai Shree Ram',
      start: new Date(2024, 9, 15, 8, 0),
      end: new Date(2024, 9, 15, 9, 0),
    },
    {
      title: 'Radha 2024',
      start: new Date(2024, 9, 15, 9, 0),
      end: new Date(2024, 9, 15, 10, 0),
    },
    {
      title: 'Jacob Jones',
      start: new Date(2024, 9, 15, 10, 0),
      end: new Date(2024, 9, 15, 11, 0),
    },
    {
      title: 'Jai Shree Ram',
      start: new Date(2024, 9, 16, 5, 0),
      end: new Date(2024, 9, 16, 6, 0),
    },
    {
      title: 'Radha 2024',
      start: new Date(2024, 9, 16, 6, 0),
      end: new Date(2024, 9, 16, 7, 0),
    },
    {
      title: 'Jacob Jones',
      start: new Date(2024, 9, 16, 7, 0),
      end: new Date(2024, 9, 16, 8, 0),
    },
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="container">
      {/* Toggle Button for Mobile View */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        {/* Close Icon for Sidebar */}
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>

        <ul>
          <li onClick={toggleSidebar}>
            <a
              href="#home"
              className={location.hash === "#home" ? "active" : ""}
            >
              <img src="/assets/images/home-icon.png" alt="Home" className="nav-icon" /> Home
            </a>
          </li>

          <li onClick={toggleSidebar}>
            <a
              href="#profile"
              className={location.hash === "#profile" ? "active" : ""}
            >
              <img src="/assets/images/person_FILL0_wght400_GRAD0_opsz24 (1) 1.png" alt="Profile" className="nav-icon" /> Profile
            </a>
          </li>

          <li onClick={toggleSidebar}>
            <a
              href="#library"
              className={location.hash === "#library" ? "active" : ""}
            >
              <img src="/assets/images/library_music_FILL0_wght400_GRAD0_opsz24 1.png" alt="Library" className="nav-icon" /> Library
            </a>
          </li>

          {/* Collection Dropdown */}
          <li onClick={toggleCollection}>
            <a href="#collection" className={showCollection ? "active" : ""}>
              <img src="/assets/images/Vector.png" alt="Collection" className="nav-icon" />
              Collection <i className={`fas ${showCollection ? "fa-chevron-down" : "fa-chevron-right"}`}></i>
            </a>
          </li>
          {showCollection && (
            <ul className="dropdown">
              <li>
                <a href="#playlists">
                  <img src="/assets/images/Vector.png" alt="Collection" className="nav-icon" />
                  Playlists
                </a>
              </li>
              <li>
                <a href="#tracks">
                  <img src="/assets/images/Vector.png" alt="Collection" className="nav-icon" />
                  Tracks
                </a>
              </li>
              <li>
                <a href="#artists">
                  <img src="/assets/images/Vector.png" alt="Collection" className="nav-icon" />
                  Artists
                </a>
              </li>
              <li>
                <a href="#albums">
                  <img src="/assets/images/Vector.png" alt="Collection" className="nav-icon" />
                  Albums
                </a>
              </li>
              <li>
                <a href="#genres">
                  <img src="/assets/images/Vector.png" alt="Collection" className="nav-icon" />
                  Genres
                </a>
              </li>
              <li>
                <a href="#decades">
                  <img src="/assets/images/Vector.png" alt="Collection" className="nav-icon" />
                  Decades
                </a>
              </li>
              <li>
                <a href="#geos">
                  <img src="/assets/images/Vector.png" alt="Collection" className="nav-icon" />
                  Geos
                </a>
              </li>
            </ul>
          )}

          <li onClick={toggleSidebar}>
            <a href="#community" className={location.hash === "#community" ? "active" : ""}>
              <img src="/assets/images/Vector (2).png" alt="Community" className="nav-icon" /> Community
            </a>
          </li>

          {/* Stations Dropdown */}
          <li onClick={toggleStations}>
            <a href="#stations" className={showStations ? "active" : ""}>
              <img src="/assets/images/radio_FILL0_wght400_GRAD0_opsz24 1.png" alt="Stations" className="nav-icon" />
              Stations <i className={`fas ${showStations ? "fa-chevron-down" : "fa-chevron-right"}`}></i>
            </a>
          </li>
          {showStations && (
            <ul className="dropdown">
              <li>
                <a href="#scheduled">
                  <img src="/assets/images/Vector.png" alt="Collection" className="nav-icon" />
                  Scheduled listening
                </a>
              </li>
              <li>
                <a href="#discovery">
                  <img src="/assets/images/Vector.png" alt="Collection" className="nav-icon" />
                  Music discovery
                </a>
              </li>
              <li>
                <a href="#positive">
                  <img src="/assets/images/Vector.png" alt="Collection" className="nav-icon" />
                  Positive music
                </a>
              </li>
              <li>
                <a href="#mood">
                  <img src="/assets/images/Vector.png" alt="Collection" className="nav-icon" />
                  Mood regulation
                </a>
              </li>
            </ul>
          )}

          {/* Performance Dropdown */}
          <li onClick={togglePerformance}>
            <a href="#performance" className={showPerformance ? "active" : ""}>
              <img src="/assets/images/trophy_FILL0_wght400_GRAD0_opsz24 1.png" alt="Performance" className="nav-icon" />
              Performance  <i className={`fas ${showPerformance ? "fa-chevron-down" : "fa-chevron-right"}`}></i>
            </a>
          </li>
          {showPerformance && (
            <ul className="dropdown">
              <li>
                <a href="#calendar">
                  <img src="/assets/images/Vector.png" alt="Collection" className="nav-icon" />
                  Calendar
                </a>
              </li>
              <li>
                <a href="#groups">
                  <img src="/assets/images/Vector.png" alt="Collection" className="nav-icon" />
                  Groups
                </a>
              </li>
              <li>
                <a href="#analysis">
                  <img src="/assets/images/Vector.png" alt="Collection" className="nav-icon" />
                  Music analysis
                </a>
              </li>
            </ul>
          )}
        </ul>
      </div>

      <div className="main-content">
        <div className="header-section">
          {/* Top Navigation */}
          <div className="top-nav">
            {/* Search bar */}
            <div className="search-bar">
              <FaSearch className="search-icon" />
            </div>

            {/* Premium and App Section */}
            <div className="top-nav-right">
              <span className="premium">Premium</span>

              {/* Get App Button with Download Icon */}
              <button className="get-app-btn">
                <FaDownload className="download-icon" /> Get App
              </button>

              {/* Icons for Notifications and Profile */}
              <div className="icons">
                <img src="/assets/images/Group 427319705.png" alt="Collection" className="nav-icon" />
              </div>
              <div className="icons">
                <img src="/assets/images/Vector (3).png" alt="Collection" className="nav-icon" />
              </div>
            </div>
          </div>

          {/* Back to Library */}
          <div className="back-to-library">
            <a href="#">← Back to Library</a>
          </div>

          {/* Category Tabs */}
          <div className="tabs">
            <button className="tab active">All</button>
            <button className="tab">Listening</button>
            <button className="tab">Learning</button>
            <button className="tab">Rehearsal</button>
            <button className="tab">Perform</button>
          </div>


        </div>
        <div className="calender-hole-section">
          <div className="calendar-header">
            <h2>Calendar</h2>
            <div className="google-calendar-toggle">
              <FaLock className="lock-icon" />
              <span>Google Calendar</span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className="calender-hole-section2">
            <div className="calendar-container">
              <BigCalendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: '20px' }}
                onSelectEvent={handleEventClick}
                defaultView="day"
                components={{ toolbar: CustomToolbar }}
              />
              {isModalOpen && selectedEvent && (
                <EventModal event={selectedEvent} onClose={closeModal} />
              )}
            </div>

            {/* Second Calendar (React Calendar) */}
            <div className='cdce'>
              <div className='react-calendar-container'>

                <Calendar onChange={setValue} value={value} />
              </div>

              <div className="schedule-music-container">
                {/* Schedule Section */}
                <div className="schedule-section">
                  <h3>Schedule</h3>
                  <ul className="schedule-list">
                    <li className="schedule-item listen">Listen</li>
                    <li className="schedule-item learn">Learn</li>
                    <li className="schedule-item work-out">Work-Out</li>
                    <li className="schedule-item study">Study</li>
                    <li className="schedule-item practice">Practice</li>
                    <li className="schedule-item other">Other</li>
                    <li className="schedule-item listen">Listen</li>
                    <li className="schedule-item learn">Learn</li>
                    <li className="schedule-item work-out">Work-Out</li>
                    <li className="schedule-item study">Study</li>
                    <li className="schedule-item practice">Practice</li>

                    {/* Previous and Next buttons */}
                    <div className="navigation-buttons">
                      <button className="nav-button">&lt;</button> {/* Previous button */}
                      <button className="nav-button">&gt;</button> {/* Next button */}
                    </div>

                  </ul>
                </div>

                {/* Music Section */}
                <div className="music-section">
                  <div className="music-header">
                    <h3>Music</h3>
                    <FaCog className="settings-icon" /> {/* Settings Icon */}
                  </div>

                  <div className="music-playlist">
                    <p>Ronald rich playlist</p>
                    <div className="playlist-toggle">
                      <input
                        type="checkbox"
                        id="playlistToggle2"
                        className="switch-input"
                        checked={isPlaylistOn}
                        onChange={togglePlaylist}
                      />
                      <label htmlFor="playlistToggle2" className="switch-label">
                        <span className={`switch-button ${isPlaylistOn ? 'play' : 'play'}`}>
                          {isPlaylistOn ? <FaPlay /> : <FaPlay />}
                        </span>
                      </label>

                      {/* Dustbin icon for delete */}
                      <button className="delete-button" onClick={handleDelete}>
                        <FaTrash />
                      </button>
                    </div>
                  </div>

                </div>

                {/* Share Button */}
                <div className="share-section">
                  <button className="share-btn">
                    <FaShare /> Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-links">
            <a href="#">About</a> |
            <a href="#">Help</a> |
            <a href="#">Terms & Conditions</a> |
            <a href="#">Privacy</a> |
            <a href="#">Copyright Policy</a> |
            <a href="#">Contact Us</a>
          </div>

          <div className="footer-copyright-icon">
            <div className="footer-links">

              | <a href="#">©Curioushit 2023 - All Rights Reserved</a> |
            </div>

            <div className="footer-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
