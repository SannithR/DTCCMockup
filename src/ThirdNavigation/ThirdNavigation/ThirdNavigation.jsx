import React, { useState } from "react";
import { Line52 } from "../Line52/Line52";
import { Line53 } from "../Line53/Line53";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  Typography,
  Box,
  Modal
} from '@mui/material';
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  CalendarToday as CalendarTodayIcon,
  HelpOutline as HelpOutlineIcon,
  Publish as PublishIcon
} from '@mui/icons-material';
import "./style.css";
import ThirdNavigationModel from "../../ThirdNavigationModel/ThirdNavigationModel/ThirdNavigationModel";
import Alerts from "../../Alert/Alerts/Alerts";

/**
 * ThirdNavigation component allows users to create a new item with priority, date, recipients, message, and header fields.
 * It provides form validation, modal confirmation, and alert feedback.
 */
export default function ThirdNavigation() {
  // State for priority dropdown
  const [priority, setPriority] = useState('Low');
  // State for start date input
  const [startDate, setStartDate] = useState('');
  // State for end date input
  const [endDate, setEndDate] = useState('');
  // State for message recipients checkboxes
  const [recipients, setRecipients] = useState({
    recipientA: false,
    recipientB: false,
    recipientC: false
  });
  // State for message textarea
  const [message, setMessage] = useState('In Retrieval');
  // State for header input
  const [header, setHeader] = useState('In Retrieval');
  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State for alert visibility
  const [showAlert, setShowAlert] = useState(false);

  /**
   * Handles checkbox changes for recipients.
   * @param {object} event - Checkbox change event
   */
  const handleRecipientChange = (event) => {
    setRecipients({
      ...recipients,
      [event.target.name]: event.target.checked,
    });
  };

  /**
   * Handles the publish button click, opens the confirmation modal.
   */
  const handlePublishClick = () => {
    setIsModalOpen(true);
  };

  /**
   * Closes the confirmation modal.
   */
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  /**
   * Handles the confirmation (Yes) in the modal, closes modal and shows alert.
   */
  const handleYesClick = () => {
    setIsModalOpen(false);
    setShowAlert(true);
  };

  // Render the ThirdNavigation form UI
  return (
    <div className="frame-thirdnavigation">
      {/* Header section with page title and help icon */}
      <div className="thirdnavigation">
        <div className="page-title">PAGE TITLE 00A23</div>
        <div className="group-new">
          <div className="info-icon">
            <HelpOutlineIcon sx={{ color: '#0e5447', fontSize: 16 }} />
          </div>
        </div>
      </div>

      {/* Main form section */}
      <div className="overlap-wrapper">
        <div className="overlap">
          {/* Priority dropdown */}
          <div className="top-label-dropdown">
            <FormControl fullWidth size="small" sx={{ width: '368px' }}>
              <InputLabel
                id="priority-label"
                sx={{
                  color: '#212121',
                  '&.Mui-focused': { color: '#0e5447' }
                }}
              >
                Priority *
              </InputLabel>
              <Select
                labelId="priority-label"
                value={priority}
                label="Priority *"
                onChange={(e) => setPriority(e.target.value)}
                IconComponent={KeyboardArrowDownIcon}
                sx={{
                  backgroundColor: '#ffffff',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#bdbdbd',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#0e5447',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#0e5447',
                  },
                  '& .MuiSvgIcon-root': {
                    color: '#0e5447',
                  },
                  '& .MuiSelect-select': {
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                    color: '#9E9E9E',
                  }
                }}
              >
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Critical">Critical</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Start date input */}
          <div className="date-input">
            <TextField
              label="Start date *"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
                sx: {
                  color: '#212121',
                  '&.Mui-focused': { color: '#0e5447' }
                }
              }}
              InputProps={{
                endAdornment: <CalendarTodayIcon sx={{ color: '#0e5447' }} />
              }}
              sx={{
                width: '368px',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#ffffff',
                  '& fieldset': {
                    borderColor: '#bdbdbd',
                  },
                  '&:hover fieldset': {
                    borderColor: '#0e5447',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#0e5447',
                  },
                },
                '& .MuiOutlinedInput-input': {
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: '#9E9E9E',
                }
              }}
              size="small"
            />
          </div>

          {/* End date input */}
          <div className="date-input-default-wrapper">
            <TextField
              label="End Date *"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
                sx: {
                  color: '#212121',
                  '&.Mui-focused': { color: '#0e5447' }
                }
              }}
              InputProps={{
                endAdornment: <CalendarTodayIcon sx={{ color: '#0e5447' }} />
              }}
              sx={{
                width: '368px',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#ffffff',
                  '& fieldset': {
                    borderColor: '#bdbdbd',
                  },
                  '&:hover fieldset': {
                    borderColor: '#0e5447',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#0e5447',
                  },
                },
                '& .MuiOutlinedInput-input': {
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: '#9E9E9E',
                }
              }}
              size="small"
            />
          </div>

          {/* Recipients checkboxes */}
          <div className="group-2">
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
              <Typography
                variant="body1"
                sx={{
                  color: '#212121',
                  fontFamily: 'var(--general-form-elements-medium-font-family)',
                  fontSize: 'var(--general-form-elements-medium-font-size)',
                  fontWeight: 'var(--general-form-elements-medium-font-weight)',
                  marginBottom: '8px'
                }}
              >
                Message Recipients:
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#616161',
                  fontFamily: 'var(--notification-date-font-family)',
                  fontSize: 'var(--notification-date-font-size)',
                  marginBottom: '16px'
                }}
              >
                (Select at least one)
              </Typography>
            </div>
            <FormGroup row sx={{ gap: '20px' }}>
              {/* Checkbox for Recipient A */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={recipients.recipientA}
                    onChange={handleRecipientChange}
                    name="recipientA"
                    sx={{
                      color: '#bdbdbd',
                      '&.Mui-checked': {
                        color: '#0e5447',
                      },
                    }}
                  />
                }
                label="Recipient A"
                sx={{
                  '& .MuiFormControlLabel-label': {
                    color: '#212121',
                    fontFamily: 'var(--general-form-elements-medium-font-family)',
                  }
                }}
              />
              {/* Checkbox for Recipient B */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={recipients.recipientB}
                    onChange={handleRecipientChange}
                    name="recipientB"
                    sx={{
                      color: '#bdbdbd',
                      '&.Mui-checked': {
                        color: '#0e5447',
                      },
                    }}
                  />
                }
                label="Recipient B"
                sx={{
                  '& .MuiFormControlLabel-label': {
                    color: '#212121',
                    fontFamily: 'var(--general-form-elements-medium-font-family)',
                  }
                }}
              />
              {/* Checkbox for Recipient C */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={recipients.recipientC}
                    onChange={handleRecipientChange}
                    name="recipientC"
                    sx={{
                      color: '#bdbdbd',
                      '&.Mui-checked': {
                        color: '#0e5447',
                      },
                    }}
                  />
                }
                label="Recipient C"
                sx={{
                  '& .MuiFormControlLabel-label': {
                    color: '#212121',
                    fontFamily: 'var(--general-form-elements-medium-font-family)',
                  }
                }}
              />
            </FormGroup>
          </div>

          {/* Required fields note */}
          <Box sx={{ position: 'absolute', right: '20px', top: '9px' }}>
            <Typography
              variant="body2"
              sx={{
                color: '#616161',
                fontFamily: 'var(--notification-date-font-family)',
                fontSize: 'var(--notification-date-font-size)'
              }}
            >
              <span style={{ color: '#b71c1c' }}>*</span> Required Fields
            </Typography>
          </Box>

          {/* Section label */}
          <Box sx={{ position: 'absolute', left: '19px', top: '19px' }}>
            <Typography
              variant="h6"
              sx={{
                color: '#0e5447',
                fontFamily: 'var(--group-label-font-family)',
                fontSize: 'var(--group-label-font-size)',
                fontWeight: 'var(--group-label-font-weight)'
              }}
            >
              Create New Item
            </Typography>
          </Box>

          {/* Message textarea */}
          <div className="overlap-group-wrapper-new">
            <div className="overlap-group-new">
              <div className="group-5">
                <div className="overlap-group-new">
                  <Box sx={{ position: 'absolute', left: '0px', top: '24px', width: '1144px' }}>
                    <TextField
                      label="Message *"
                      multiline
                      rows={8}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      fullWidth
                      sx={{
                        '& .MuiInputLabel-root': {
                          color: '#212121',
                          '&.Mui-focused': { color: '#0e5447' }
                        },
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#ffffff',
                          '& fieldset': {
                            borderColor: '#bdbdbd',
                          },
                          '&:hover fieldset': {
                            borderColor: '#0e5447',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#0e5447',
                          },
                        },
                        '& .MuiOutlinedInput-input': {
                          fontFamily: 'Roboto',
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          verticalAlign: 'middle',
                          color: '#9E9E9E',
                        }
                      }}
                    />
                  </Box>
                </div>
              </div>
              {/* Decorative lines */}
              <div className="group-6">
                <div className="overlap-2">
                  <Line52 className="line" />
                  <Line53 className="line-53" />
                </div>
              </div>
            </div>
          </div>

          {/* Header input */}
          <Box sx={{ position: 'absolute', left: '19px', top: '316px', width: '1144px' }}>
            <TextField
              label="Header *"
              value={header}
              onChange={(e) => setHeader(e.target.value)}
              fullWidth
              size="small"
              sx={{
                '& .MuiInputLabel-root': {
                  color: '#212121',
                  '&.Mui-focused': { color: '#0e5447' }
                },
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#ffffff',
                  '& fieldset': {
                    borderColor: '#bdbdbd',
                  },
                  '&:hover fieldset': {
                    borderColor: '#0e5447',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#0e5447',
                  },
                },
                '& .MuiOutlinedInput-input': {
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: '#9E9E9E',
                }
              }}
            />
          </Box>

          {/* Publish button */}
          <Box sx={{ position: 'absolute', left: '19px', top: '700px' }}>
            <Button
              variant="contained"
              startIcon={<PublishIcon />}
              onClick={handlePublishClick}
              sx={{
                backgroundColor: '#0e5447',
                color: '#ffffff',
                borderRadius: '20px',
                padding: '8px 18px',
                height: '36px',
                textTransform: 'uppercase',
                fontFamily: 'var(--button-medium-font-family)',
                fontSize: 'var(--button-medium-font-size)',
                fontWeight: 'var(--button-medium-font-weight)',
                '&:hover': {
                  backgroundColor: '#0a3d33',
                },
                '&:disabled': {
                  backgroundColor: '#e0e0e0',
                  color: '#9e9e9e',
                }
              }}
              disabled={!recipients.recipientA && !recipients.recipientB && !recipients.recipientC}
            >
              PUBLISH
            </Button>
          </Box>
        </div>
      </div>

      {/* Confirmation modal for publishing */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ outline: 'none' }}>
          <ThirdNavigationModel onClose={handleCloseModal} onYes={handleYesClick} />
        </Box>
      </Modal>

      {/* Alert modal after publishing */}
      {showAlert && (
        <Modal
          open={showAlert}
          onClose={() => setShowAlert(false)}
          aria-labelledby="alert-modal-title"
          aria-describedby="alert-modal-description"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ outline: 'none' }}>
            <Alerts onClose={() => setShowAlert(false)} />
          </Box>
        </Modal>
      )}
    </div>
  );
}
