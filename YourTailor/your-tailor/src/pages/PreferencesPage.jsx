import React, { useState } from 'react';

const PreferencesPage = ({ onSubmit }) => {
  const [gender, setGender] = useState('');
  const [clothingPreference, setClothingPreference] = useState('');
  const [tags, setTags] = useState('');

  return (
    <div className="preferences-page">
      <h1 className="page-title">Preferences</h1>
      <div className="gender-selection">
        <h2>What is your gender?</h2>
        <button onClick={() => setGender('Male')} className={gender === 'Male' ? 'selected' : ''}>Male</button>
        <button onClick={() => setGender('Female')} className={gender === 'Female' ? 'selected' : ''}>Female</button>
        <button onClick={() => setGender('Other')} className={gender === 'Other' ? 'selected' : ''}>Other</button>
        <p>Your gender will impact generations</p>
      </div>
      <div className="clothing-preference">
        <h2>What are you searching for in your clothes?</h2>
        <input 
          type="text" 
          placeholder="Example: Dark clothing that depicts nature" 
          value={clothingPreference}
          onChange={(e) => setClothingPreference(e.target.value)}
        />
      </div>
      <div className="tags">
        <h2>Add any tags that describe your preferences</h2>
        <input 
          type="text" 
          placeholder="Example: dark, simple, trees" 
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <button onClick={() => onSubmit({ gender, clothingPreference, tags })} className="submit-button">
        Generate me some clothes!
      </button>
    </div>
  );
};

export default PreferencesPage;