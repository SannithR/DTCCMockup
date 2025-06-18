import React, { useState } from "react";
import "./style.css";

export default function CopyDialogueBox  ()  {
  const [inputValues, setInputValues] = useState({
    code1: '',
    code2: '',
    code3: '',
    code4: ''
  });

  const handleInputChange = (field, value) => {
    setInputValues(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return (
    <div className="copy-dialogue-box">
      <div className="frame-dialogue">
        <div className="text-wrapper">Look up</div>

        <div className="asset">
          <div className="layer">
            <div className="div">times</div>
          </div>
        </div>
      </div>

      <div className="frame-dialogue-2">
        <div className="frame-dialogue-3">
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

      <div className="frame-dialogue-8">
        <div className="componentdialogue">
          <div className="div-wrapperdialogue">
            <div className="PRIMARYDIALOGUE">LOOKUP</div>
          </div>
        </div>

        <button className="button-dialogue">
          <div className="div-wrapperdialogue">
            <div className="SECONDARY">CANCEL</div>
          </div>
        </button>
      </div>
    </div>
  );
};
