import React, { useState } from 'react';
import PersonalDetails from './components/PersonalDetails';
import EducationDetail from './components/EducationDetail';
import ExtraDetails from './components/ExtraDetails';
import ProjectDetails from './components/ProjectDetails';
import ResumePdfDownloadLink from './components/ResumePdf';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalDetails: {},
    educationDetail: {},
    extraDetails: {},
    projectDetails: {}
  });

  const handlePersonalDetailsSubmit = (data) => {
    setFormData({ ...formData, personalDetails: data });
    setStep(2);
  };

  const handleEducationDetailsSubmit = (data) => {
    setFormData({ ...formData, educationDetail: data });
    setStep(3);
  };

  const handleExtraDetailsSubmit = (data) => {
    setFormData({ ...formData, extraDetails: data });
    setStep(4);
  };

  const handleProjectDetailsSubmit = (data) => {
    setFormData({ ...formData, projectDetails: data });
    setStep(5);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Resume Auto Generator</h1>
        {step === 1 && (
          <PersonalDetails 
            onSubmit={handlePersonalDetailsSubmit}
            initialValues={formData.personalDetails}
          />
        )}
        {step === 2 && (
          <EducationDetail 
            onSubmit={handleEducationDetailsSubmit}
            initialValues={formData.educationDetail}
          />
        )}
        {step === 3 && (
          <ExtraDetails 
            onSubmit={handleExtraDetailsSubmit}
            initialValues={formData.extraDetails}
          />
        )}
        {step === 4 && (
          <ProjectDetails 
            onSubmit={handleProjectDetailsSubmit}
            initialValues={formData.projectDetails}
          />
        )}
        {step === 5 && (
          <div className="mt-4">
            <ResumePdfDownloadLink formData={formData} />
          </div>
        )}
        {step > 1 && (
          <button
            onClick={handleBack}
            className="mt-4 w-full bg-gray-500 text-white py-2 px-4 rounded-md"
          >
            Back
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
