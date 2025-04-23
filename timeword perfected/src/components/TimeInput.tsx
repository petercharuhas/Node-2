import React, { useState, ChangeEvent } from 'react';
import { Clock } from 'lucide-react';

interface TimeInputProps {
  value: string;
  onChange: (value: string) => void;
  isValid: boolean;
}

const TimeInput: React.FC<TimeInputProps> = ({ value, onChange, isValid }) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Only allow digits and colon
    if (/^[0-9:]*$/.test(newValue) && newValue.length <= 5) {
      onChange(newValue);
    }
  };

  // Format input as user types
  const formatTimeInput = (input: string): string => {
    // If input has a colon already, don't modify
    if (input.includes(':')) return input;
    
    // If input has 2 or more characters, insert colon after the first 2
    if (input.length >= 2) {
      return `${input.slice(0, 2)}:${input.slice(2)}`;
    }
    
    return input;
  };

  const displayValue = formatTimeInput(value);
  
  return (
    <div className={`relative flex items-center transition-all duration-300 ${isFocused ? 'scale-105' : ''}`}>
      <div className={`absolute left-3 transition-colors duration-300 ${isFocused ? 'text-blue-500' : 'text-gray-400'}`}>
        <Clock size={20} />
      </div>
      <input
        type="text"
        value={displayValue}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="00:00"
        className={`w-full pl-10 pr-4 py-3 rounded-lg bg-white border-2 outline-none focus:shadow-md transition-all duration-300 ${
          isValid ? 'border-gray-200 focus:border-blue-500' : 'border-red-300 focus:border-red-500'
        }`}
        maxLength={5}
      />
    </div>
  );
};

export default TimeInput;