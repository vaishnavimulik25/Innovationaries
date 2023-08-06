import React, { useState } from 'react';
import userimage1 from '../images/userimage1.jpg';
import userimage2 from '../images/userimage2.jpg';
import userimage3 from '../images/userimage3.jpg';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  // Sample data for user stories
  const userStories = [
    {
    id: 1,
    username: 'John Doe',
    image: userimage1,
    experience: 'My donation experience with this platform has been incredible. It feels rewarding to be able to contribute and make a difference in the lives of children in orphanages.',
  },
  {
    id: 2,
    username: 'Jane Smith',
    image: userimage2,
    experience: 'Visiting the orphanage through this platform was an unforgettable experience. The childrens smiles and laughter filled my heart with joy and happiness.',
  },
  {
    id: 3,
    username: 'Bob Johnson',
    image: userimage3,
    experience: 'Being part of the orphanage events and activities has brought me so much happiness. The interactions and bonding with the children have been truly heartwarming.',
  },

  ];

  const handleUserStoryClick = (id) => {
    setSelectedUser(id);
  };

  return (
    <section className="testimonials" id="testimonials">
      <h2>User Stories</h2>
      <div className="user-story-container">
        {userStories.map((story) => (
          <div
            key={story.id}
            className={`testimonial-card ${selectedUser === story.id ? 'active' : ''}`}
            onClick={() => handleUserStoryClick(story.id)}
          >
            <img src={story.image} alt={`User ${story.id}`} />
            <div className="user-info">
              <h3>{story.username}</h3>
              <p>{story.experience}<import React, { useState } from 'react';
import userimage1 from '../images/userimage1.jpg';
import userimage2 from '../images/userimage2.jpg';
import userimage3 from '../images/userimage3.jpg';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  // Sample data for user stories
  const userStories = [
    {
    id: 1,
    username: 'John Doe',
    image: userimage1,
    experience: 'My donation experience with this platform has been incredible. It feels rewarding to be able to contribute and make a difference in the lives of children in orphanages.',
  },
  {
    id: 2,
    username: 'Jane Smith',
    image: userimage2,
    experience: 'Visiting the orphanage through this platform was an unforgettable experience. The childrens smiles and laughter filled my heart with joy and happiness.',
  },
  {
    id: 3,
    username: 'Bob Johnson',
    image: userimage3,
    experience: 'Being part of the orphanage events and activities has brought me so much happiness. The interactions and bonding with the children have been truly heartwarming.',
  },

  ];

  const handleUserStoryClick = (id) => {
    setSelectedUser(id);
  };

  return (
    <section className="testimonials" id="testimonials">
      <h2>User Stories</h2>
      <div className="user-story-container">
        {userStories.map((story) => (
          <div
            key={story.id}
            className={`testimonial-card ${selectedUser === story.id ? 'active' : ''}`}
            onClick={() => handleUserStoryClick(story.id)}
          >
            <img src={story.image} alt={`User ${story.id}`} />
            <div className="user-info">
              <h3>{story.username}</h3>
              <p>{story.experience}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Other Stories */}
      <div className="other-stories">
        {userStories.map((story) => (
          <img
            key={story.id}
            src={story.image}
            alt={`User ${story.id}`}
            className={`circle-image ${selectedUser === story.id ? 'active' : ''}`}
            onClick={() => handleUserStoryClick(story.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
