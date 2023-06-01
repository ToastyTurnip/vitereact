import React from 'react';
import { useState } from 'react';

const ScheduleComponent = ({ data }) => {
    const [selectedWeek, setSelectedWeek] = useState(0);
  
    const handleWeekChange = (event) => {
      setSelectedWeek(parseInt(event.target.value));
    };
  
    return (
      <div>
        <select value={selectedWeek} onChange={handleWeekChange}>
          {data.map((_, index) => (
            <option key={index} value={index}>
              Week {index + 1}
            </option>
          ))}
        </select>
  
        <div>
          <h2>Week {selectedWeek + 1}</h2>
          <p>Total Units: {data[selectedWeek].Total_Units}</p>
          {Object.entries(data[selectedWeek].Days).map(([day, courses]) => (
            <div key={day}>
              <h3>{day}</h3>
              <ul>
                {courses.Courses.map((course, i) => (
                  <li key={i}>
                    Course ID: {course[0]}, Course Name: {course[1]}, Start Time: {course[2]}, End Time: {course[3]}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ScheduleComponent
  
  
  
  