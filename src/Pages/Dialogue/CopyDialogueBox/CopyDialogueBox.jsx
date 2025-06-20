import React, { useState } from "react";
import "./style.css";

/**
 * CopyDialogueBox Component
 *
 * This component renders a dialogue box with four input fields (Code 1-4) and two action buttons (LOOKUP and CANCEL).
 * It uses React hooks for state management and is styled using the associated CSS file.
 *
 * Usage:
 * <CopyDialogueBox />
 */
export default function CopyDialogueBox() {
  // State to store the values of the four code input fields
  const [inputValues, setInputValues] = useState({
    code1: '',
    code2: '',
    code3: '',
    code4: ''
  });

  /**
   * Handles changes in any of the input fields.
   * @param {string} field - The name of the code field (code1, code2, code3, code4)
   * @param {string} value - The new value for the field
   */
  const handleInputChange = (field, value) => {
    setInputValues(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Optionally, you can add handlers for the LOOKUP and CANCEL buttons here
  // For example:
  // const handleLookup = () => { /* logic for lookup */ };
  // const handleCancel = () => { /* logic for cancel */ };

  return (
    <div className="copy-dialogue-box">
      {/* Header Section */}
      <div className="frame-dialogue">
        <div className="text-wrapper">Look up</div>
        <div className="asset">
          <div className="layer">
            <div className="div">times</div>
          </div>
        </div>
      </div>

      {/* Input Fields Section */}
      <div className="frame-dialogue-2">
        <div className="frame-dialogue-3">
          {/* Code 1 Input */}
          <div className="top-label-dropdown">
            <div className="frame-dialogue-4">
              <div className="label-wrapper">
                <div className="label">
                  <div className="default">Code 1</div>
                </div>
              </div>
              <div className="frame-dialogue-5" />
            </div>
            <div className="frame-dialogue-6">
              <input
                type="text"
                className="select input-field"
                value={inputValues.code1}
                onChange={(e) => handleInputChange('code1', e.target.value)}
                placeholder="Enter code 1"
              />
              <div className="frame-dialogue-7" />
            </div>
          </div>

          {/* Code 2 Input */}
          <div className="top-label-dropdown">
            <div className="frame-dialogue-4">
              <div className="label-wrapper">
                <div className="label">
                  <div className="default">Code 2</div>
                </div>
              </div>
              <div className="frame-dialogue-5" />
            </div>
            <div className="frame-dialogue-6">
              <input
                type="text"
                className="select input-field"
                value={inputValues.code2}
                onChange={(e) => handleInputChange('code2', e.target.value)}
                placeholder="Enter code 2"
              />
              <div className="frame-dialogue-7" />
            </div>
          </div>
        </div>

        <div className="frame-dialogue-3">
          {/* Code 3 Input */}
          <div className="top-label-dropdown">
            <div className="frame-dialogue-4">
              <div className="label-wrapper">
                <div className="label">
                  <div className="default">Code 3</div>
                </div>
              </div>
              <div className="frame-dialogue-5" />
            </div>
            <div className="frame-dialogue-6">
              <input
                type="text"
                className="select input-field"
                value={inputValues.code3}
                onChange={(e) => handleInputChange('code3', e.target.value)}
                placeholder="Enter code 3"
              />
              <div className="frame-dialogue-7" />
            </div>
          </div>

          {/* Code 4 Input */}
          <div className="top-label-dropdown">
            <div className="frame-dialogue-4">
              <div className="label-wrapper">
                <div className="label">
                  <div className="default">Code 4</div>
                </div>
              </div>
              <div className="frame-dialogue-5" />
            </div>
            <div className="frame-dialogue-6">
              <input
                type="text"
                className="select input-field"
                value={inputValues.code4}
                onChange={(e) => handleInputChange('code4', e.target.value)}
                placeholder="Enter code 4"
              />
              <div className="frame-dialogue-7" />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons Section */}
      <div className="frame-dialogue-8">
        {/* LOOKUP Button (styled as a div for now) */}
        <div className="componentdialogue">
          <div className="div-wrapperdialogue">
            <div className="PRIMARYDIALOGUE">LOOKUP</div>
          </div>
        </div>

        {/* CANCEL Button */}
        <button className="button-dialogue">
          <div className="div-wrapperdialogue">
            <div className="SECONDARY">CANCEL</div>
          </div>
        </button>
      </div>
    </div>
  );
}
