import React, { useState, useEffect } from 'react';
import { timeToWords } from '../lib/timeword';
import TimeInput from './TimeInput';

const TimeConverter: React.FC = () => {
  const [timeInput, setTimeInput] = useState('');
  const [convertedTime, setConvertedTime] = useState<string>('');
  const [isValid, setIsValid] = useState(true);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (timeInput.match(/^([01][0-9]|2[0-3]):[0-5][0-9]$/)) {
      try {
        const words = timeToWords(timeInput);
        setConvertedTime(words);
        setIsValid(true);
        setShowResult(true);
      } catch (error) {
        setIsValid(false);
        setShowResult(false);
      }
    } else {
      if (timeInput.length === 5) {
        setIsValid(false);
      }
      setShowResult(false);
    }
  }, [timeInput]);

  const handleTimeChange = (value: string) => {
    setTimeInput(value);
  };

  return (
    <div className="max-w-md w-full mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Time to Words</h2>
      <p className="text-gray-600 mb-6">Enter a 24-hour time (HH:MM) to convert it to words</p>
      
      <div className="mb-6">
        <TimeInput 
          value={timeInput} 
          onChange={handleTimeChange} 
          isValid={isValid} 
        />
        {!isValid && timeInput.length === 5 && (
          <p className="text-red-500 mt-2 text-sm">
            Please enter a valid time (00-23:00-59)
          </p>
        )}
      </div>
      
      <div className={`bg-gray-50 p-6 rounded-lg border border-gray-200 transition-all duration-500 transform ${
        showResult 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <h3 className="text-sm uppercase font-medium text-gray-500 mb-2">In Words</h3>
        <p className="text-xl font-medium text-blue-600 first-letter:uppercase">
          {convertedTime}
        </p>
      </div>
    </div>
  );
};

export default TimeConverter;