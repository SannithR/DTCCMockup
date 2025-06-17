import React from "react";
import {
  Close as CloseIcon,
  Check as CheckIcon,
  Cancel as CancelIcon
} from '@mui/icons-material';
import { Button } from '@mui/material';
import "./style.css";

export default function ThirdNavigationModel({ onClose, onYes })  {
  return (
    <div className="modals">
      <div className="frame">
        <div className="text-wrapper">Confirm?</div>

        <div className="asset">
          <div className="layer">
            <CloseIcon
              onClick={onClose}
              sx={{ color: '#757575', fontSize: 20, cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>

      <div className="duis-leo-sed-wrapper">
        <p className="duis-leo-sed">
          <span className="span">
            Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
            sagittis:
            <br />
            <br />
          </span>

          <span className="text-wrapper-2">Maecenas tempus: </span>

          <span className="span">0030012</span>

          <span className="text-wrapper-2">
            &nbsp;&nbsp; <br />
            <br />
          </span>

          <span className="span">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </span>
        </p>
      </div>

      <div className="frame-2">
        <Button
          variant="contained"
          startIcon={<CheckIcon />}
          onClick={onYes}
          sx={{
            backgroundColor: '#4caf50',
            color: '#ffffff',
            borderRadius: '4px',
            padding: '8px 16px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            marginRight: '12px',
            '&:hover': {
              backgroundColor: '#45a049',
            }
          }}
        >
          YES
        </Button>

        <Button
          variant="outlined"
          startIcon={<CancelIcon />}
          onClick={onClose}
          sx={{
            borderColor: '#f44336',
            color: '#f44336',
            borderRadius: '4px',
            padding: '8px 16px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            '&:hover': {
              borderColor: '#d32f2f',
              backgroundColor: '#ffebee',
            }
          }}
        >
          NO
        </Button>
      </div>
    </div>
  );
};
