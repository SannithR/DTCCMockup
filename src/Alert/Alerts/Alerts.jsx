import React from "react";
import {
  CheckCircle as CheckCircleIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import "./style.css";

export default function Alerts ({ onClose })  {
  return (
    <div className="alerts">
      <div className="page-level-alert">
        <div className="frame">
          <div className="success-title">Success</div>

          <div className="a-simple-primary">
            Account details saved successfully.
          </div>

          <div className="group-wrapper">
            <div className="group">
              <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 24 }} />
            </div>
          </div>
        </div>

        <div className="asset">
          <div className="layer">
            <CloseIcon
              onClick={onClose}
              sx={{ color: '#757575', fontSize: 20, cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
