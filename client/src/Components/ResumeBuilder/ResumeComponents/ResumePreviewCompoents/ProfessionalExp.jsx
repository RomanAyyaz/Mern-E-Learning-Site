import React from 'react';

function ProfessionalExp({ resumeInfo }) {
  // Ensure resumeInfo and experience are available before rendering
  if (!resumeInfo || !resumeInfo.experience) {
    return <p>Loading experience...</p>;
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };
  return (
    <div className='my-6'>
      <h2 className='text-center font-bold text-sm mb-2' style={{ color: resumeInfo.themeColor }}>
        Professional Experience
      </h2>
      <hr style={{ borderColor: resumeInfo.themeColor }} />

      {resumeInfo.experience.map((experience, index) => (
        <div key={index} className="my-5">
          <h3 className="font-bold text-sm" style={{color:resumeInfo.themeColor}}>{experience.positionTitle}</h3>
          <h2 className='mt-1 text-xs flex justify-between'>
            {experience.companyName}, {experience.city}, {experience.state}
            <span>{formatDate(experience.startDate)} {experience.currentlyWorking ? ' - Present' : ` - ${formatDate(experience.endDate)}`}</span>
          </h2>
          <p className="my-2 text-sm">{experience.workSummery}</p>
        </div>
      ))}
    </div>
  );
}

export default ProfessionalExp;
