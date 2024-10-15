import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

function CustomToolbar({ label, onNavigate, onView }) {
  const [activeView, setActiveView] = useState('day');

  const handleViewChange = (view) => {
    setActiveView(view);
    onView(view);
  };

  return (
    <div className="custom-toolbar-v2">
      <div className="navigation-buttons-v2">
        <button className="prev-btn-v2" onClick={() => onNavigate('PREV')}>
          &lt;
        </button>

        <span className="current-date-v2">{label}</span>

        <button className="next-btn-v2" onClick={() => onNavigate('NEXT')}>
          &gt;
        </button>
      </div>

      {/* Tab-like view options */}
      <div className="view-tabs-container-v2">
        <div
          className={`tab-v2 ${activeView === 'day' ? 'active-v2' : ''}`}
          onClick={() => handleViewChange('day')}
        >
          Day
        </div>
        <div
          className={`tab-v2 ${activeView === 'week' ? 'active-v2' : ''}`}
          onClick={() => handleViewChange('week')}
        >
          Week
        </div>
        <div
          className={`tab-v2 ${activeView === 'month' ? 'active-v2' : ''}`}
          onClick={() => handleViewChange('month')}
        >
          Month
        </div>
      </div>

      <button className="schedule-btn-v2">
        <FaPlus className="plus-icon-v2" /> Schedule Session
      </button>
    </div>
  );
}

export default CustomToolbar;
