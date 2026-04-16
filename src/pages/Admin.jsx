import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import './Admin.css';

export default function Admin() {
  const [editMode, setEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState('homepage');
  const [formData, setFormData] = useState(JSON.parse(JSON.stringify(siteData)));
  const [message, setMessage] = useState('');

  const handleInputChange = (e, path) => {
    const value = e.target.value;
    setFormData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      const keys = path.split('.');
      let obj = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
      }
      obj[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const handleSave = () => {
    // Save to localStorage
    localStorage.setItem('secuurBVData', JSON.stringify(formData));
    setMessage('✓ Data opgeslagen! Herlaad de pagina om wijzigingen te zien.');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'secuurbv-data.json';
    link.click();
    setMessage('✓ JSON geexporteerd!');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleImportJSON = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);
          setFormData(data);
          setMessage('✓ JSON geimporteerd!');
          setTimeout(() => setMessage(''), 3000);
        } catch (err) {
          setMessage('✗ JSON import mislukt!');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <h2>Admin Panel</h2>
        <p className="admin-subtitle">Manage website content</p>
        
        <div className="admin-tabs">
          <button 
            className={`admin-tab ${activeTab === 'homepage' ? 'active' : ''}`}
            onClick={() => setActiveTab('homepage')}
          >
            Homepage
          </button>
          <button 
            className={`admin-tab ${activeTab === 'company' ? 'active' : ''}`}
            onClick={() => setActiveTab('company')}
          >
            Company Info
          </button>
          <button 
            className={`admin-tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projecten
          </button>
          <button 
            className={`admin-tab ${activeTab === 'export' ? 'active' : ''}`}
            onClick={() => setActiveTab('export')}
          >
            Import/Export
          </button>
        </div>

        <div className="admin-actions">
          <button 
            className={`btn ${editMode ? 'btn-secondary' : 'btn-primary'}`}
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? 'Cancel' : 'Edit Mode'}
          </button>
          {editMode && (
            <button className="btn btn-success" onClick={handleSave}>
              Save Changes
            </button>
          )}
        </div>

        {message && <div className="admin-message">{message}</div>}
      </div>

      <div className="admin-content">
        {activeTab === 'homepage' && (
          <div className="admin-section">
            <h3>Homepage Content</h3>
            
            <div className="admin-group">
              <label>Hero Title</label>
              <input
                type="text"
                value={formData.homepage.hero.title}
                onChange={(e) => handleInputChange(e, 'homepage.hero.title')}
                disabled={!editMode}
              />
            </div>

            <div className="admin-group">
              <label>Hero Subtitle</label>
              <textarea
                value={formData.homepage.hero.subtitle}
                onChange={(e) => handleInputChange(e, 'homepage.hero.subtitle')}
                disabled={!editMode}
                rows="2"
              />
            </div>

            <div className="admin-group">
              <label>Intro Text</label>
              <textarea
                value={formData.homepage.intro.content}
                onChange={(e) => handleInputChange(e, 'homepage.intro.content')}
                disabled={!editMode}
                rows="4"
              />
            </div>

            <div className="admin-group">
              <label>News Title</label>
              <input
                type="text"
                value={formData.homepage.news.title}
                onChange={(e) => handleInputChange(e, 'homepage.news.title')}
                disabled={!editMode}
              />
            </div>

            <div className="admin-group">
              <label>Safety Section Title</label>
              <input
                type="text"
                value={formData.homepage.safetySection.title}
                onChange={(e) => handleInputChange(e, 'homepage.safetySection.title')}
                disabled={!editMode}
              />
            </div>

            <div className="admin-group">
              <label>Safety Section Content</label>
              <textarea
                value={formData.homepage.safetySection.content}
                onChange={(e) => handleInputChange(e, 'homepage.safetySection.content')}
                disabled={!editMode}
                rows="5"
              />
            </div>
          </div>
        )}

        {activeTab === 'company' && (
          <div className="admin-section">
            <h3>Company Information</h3>
            
            <div className="admin-group">
              <label>Company Name</label>
              <input
                type="text"
                value={formData.company.name}
                onChange={(e) => handleInputChange(e, 'company.name')}
                disabled={!editMode}
              />
            </div>

            <div className="admin-group">
              <label>Phone</label>
              <input
                type="text"
                value={formData.company.contact.phone}
                onChange={(e) => handleInputChange(e, 'company.contact.phone')}
                disabled={!editMode}
              />
            </div>

            <div className="admin-group">
              <label>Email</label>
              <input
                type="text"
                value={formData.company.contact.email}
                onChange={(e) => handleInputChange(e, 'company.contact.email')}
                disabled={!editMode}
              />
            </div>

            <div className="admin-group">
              <label>Street</label>
              <input
                type="text"
                value={formData.company.location.street}
                onChange={(e) => handleInputChange(e, 'company.location.street')}
                disabled={!editMode}
              />
            </div>

            <div className="admin-group">
              <label>City</label>
              <input
                type="text"
                value={formData.company.location.city}
                onChange={(e) => handleInputChange(e, 'company.location.city')}
                disabled={!editMode}
              />
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="admin-section">
            <h3>Projecten</h3>
            {formData.projects.map((project, idx) => (
              <div key={idx} className="admin-subsection">
                <h4>Project {idx + 1}: {project.title}</h4>
                
                <div className="admin-group">
                  <label>Title</label>
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => {
                      const newData = JSON.parse(JSON.stringify(formData));
                      newData.projects[idx].title = e.target.value;
                      setFormData(newData);
                    }}
                    disabled={!editMode}
                  />
                </div>

                <div className="admin-group">
                  <label>Excerpt</label>
                  <textarea
                    value={project.excerpt}
                    onChange={(e) => {
                      const newData = JSON.parse(JSON.stringify(formData));
                      newData.projects[idx].excerpt = e.target.value;
                      setFormData(newData);
                    }}
                    disabled={!editMode}
                    rows="2"
                  />
                </div>

                <div className="admin-group">
                  <label>Full Content</label>
                  <textarea
                    value={project.content}
                    onChange={(e) => {
                      const newData = JSON.parse(JSON.stringify(formData));
                      newData.projects[idx].content = e.target.value;
                      setFormData(newData);
                    }}
                    disabled={!editMode}
                    rows="4"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'export' && (
          <div className="admin-section">
            <h3>Import / Export</h3>
            
            <div className="admin-group">
              <h4>Export Data</h4>
              <p>Download al je content als JSON file voor backup of transfer:</p>
              <button className="btn btn-primary" onClick={handleExportJSON}>
                📥 Download JSON
              </button>
            </div>

            <div className="admin-group">
              <h4>Import Data</h4>
              <p>Upload een JSON file om content in te importeren:</p>
              <input
                type="file"
                accept=".json"
                onChange={handleImportJSON}
              />
            </div>

            <div className="admin-group">
              <h4>Browser Storage</h4>
              <p>Je wijzigingen worden automatisch opgeslagen in localStorage.</p>
              <button 
                className="btn btn-secondary" 
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                🗑️ Clear Local Storage
              </button>
            </div>

            <div className="admin-group">
              <h4>Current Data Preview</h4>
              <pre>{JSON.stringify(formData, null, 2).substring(0, 500)}...</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
