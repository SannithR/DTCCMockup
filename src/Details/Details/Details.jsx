import React, { useState } from "react";
import { Line52 } from "../Line52/Line52";
import { Line53 } from "../Line53/Line53";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  HelpOutline as HelpOutlineIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import "./style.css";

export default function Details ()  {
  const [expandedAccordions, setExpandedAccordions] = useState({
    accordion1: false,
    accordion2: false,
    accordion3: false,
    accordion4: false,
    accordion5: false
  });

  const handleAccordionChange = (accordionId) => (event, isExpanded) => {
    setExpandedAccordions(prev => ({
      ...prev,
      [accordionId]: isExpanded
    }));
  };

  return (
    <div className="framedetails">
      <div className="divdetails">
        <div className="divdetails-2">
          <div className="detailed-view">DETAILED VIEW</div>

          <div className="detailsgroup">
            <div className="info-icon">
              <HelpOutlineIcon sx={{ color: '#0e5447', fontSize: 16 }} />
            </div>
          </div>
        </div>

        <div className="text-wrapper-details">
          <CloseIcon sx={{ color: '#616161', fontSize: 20 }} />
        </div>
      </div>

      <div className="divdetails-3">
        <div className="divdetails-4">
          <div className="text-wrapper-details-2">Lorem ip:</div>

          <div className="text-wrapper-details-3">User 112215</div>
        </div>

        <div className="divdetails-5">
          <div className="donec-pede">Donec pede:</div>

          <div className="text-wrapper-details-4">User 001</div>
        </div>

        <div className="detailsgroup-2">
          <div className="text-wrapper-details-5"> Aeneanmodo modo :</div>

          <div className="text-wrapper-details-6">GCW 1</div>
        </div>
      </div>

      <div className="detailsgroup-3">
        <div className="text-wrapper-details-7">Tiumquis:</div>

        <p className="p">ABC - DEF - GHI - KLM</p>
      </div>

      <Line52 className="line" />
      <div className="detailsgroup-4">
        <div className="overlap-detailsgroup">
          <p className="underlined">
            <span className="span">Underlined</span>
          </p>

          <div className="text-wrapper-details-8">:</div>
        </div>

        <div className="text-wrapper-details-9">Recent Change</div>

        <div className="text-wrapper-details-10">Legends:</div>
      </div>

      <Line53 className="line" />
      <p className="text-wrapper-details-11">Last Updated: 2025-01-30 02:20:39 AM</p>

      <div className="divdetails-6">
        <Accordion
          expanded={expandedAccordions.accordion1}
          onChange={handleAccordionChange('accordion1')}
          className="custom-accordion"
          disableGutters
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#0e5447' }} />}
            className="accordion-summary"
          >
            <Typography className="accordion-title">
              Nullam dictum felis eu pede
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <div className="accordion-content-details">
              <div className="divdetails-9">
                <div className="text-wrapper-details-14">Cum sociis natoque</div>
                <div className="text-wrapper-details-15">AACCGB21XXX</div>
              </div>

              <div className="divdetails-10">
                <div className="text-wrapper-details-14">Contact Name:</div>
                <div className="text-wrapper-details-15">Stan Smith</div>
              </div>

              <div className="divdetails-11">
                <div className="text-wrapper-details-14">Donec pede justo</div>
                <p className="text-wrapper-details-15">
                  AQ CLEARING AND EXECUTION SERVICES LIMITED
                </p>
              </div>

              <div className="divdetails-12">
                <div className="text-wrapper-details-14">Contact Phone:</div>
                <div className="text-wrapper-details-15">Not Available</div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expandedAccordions.accordion2}
          onChange={handleAccordionChange('accordion2')}
          className="custom-accordion"
          disableGutters
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#0e5447' }} />}
            className="accordion-summary"
          >
            <Typography className="accordion-title">
              Massa Cum sociis natoque
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <div className="accordion-content-details">
              <div className="divdetails-9">
                <div className="text-wrapper-details-14">Delivery Agent BIC</div>
                <div className="text-wrapper-details-15">AACCGB21XXX</div>
              </div>

              <div className="divdetails-10">
                <div className="text-wrapper-details-14">City</div>
                <div className="text-wrapper-details-15">00123</div>
              </div>

              <div className="divdetails-13">
                <div className="text-wrapper-details-14">Post Code</div>
                <div className="text-wrapper-details-15">00123</div>
              </div>

              <div className="divdetails-12">
                <div className="text-wrapper-details-14">State/Province</div>
                <div className="text-wrapper-details-15">00123</div>
              </div>

              <div className="divdetails-14">
                <div className="text-wrapper-details-14">Country</div>
                <div className="text-wrapper-details-15">00123</div>
              </div>

              <div className="divdetails-11">
                <div className="text-wrapper-details-14">Delivery Agent Name</div>
                <div className="text-wrapper-details-15">Not Available</div>
              </div>

              <div className="divdetails-15">
                <div className="text-wrapper-details-14">Delivery Agent Address</div>
                <div className="text-wrapper-details-15">Not Available</div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expandedAccordions.accordion3}
          onChange={handleAccordionChange('accordion3')}
          className="custom-accordion"
          disableGutters
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#0e5447' }} />}
            className="accordion-summary"
          >
            <Typography className="accordion-title">
              Nullam Dictum felis
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <div className="accordion-content-details">
              <div className="text-wrapper-details-16">
                (For Settlement Management clients)
              </div>

              <div className="divdetails-10">
                <div className="text-wrapper-details-14">Donec pede justo</div>
                <div className="text-wrapper-details-15">AACCGB21XXX</div>
              </div>

              <div className="divdetails-12">
                <div className="text-wrapper-details-14">Lorem ipsum dolor sit</div>
                <div className="text-wrapper-details-15">AACCGB21XXX</div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expandedAccordions.accordion4}
          onChange={handleAccordionChange('accordion4')}
          className="custom-accordion"
          disableGutters
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#0e5447' }} />}
            className="accordion-summary"
          >
            <Typography className="accordion-title">
              Aenean Vulputate
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <div className="accordion-content-details">
              <div className="divdetails-9">
                <div className="text-wrapper-details-14">Delivery Agent BIC</div>
                <div className="text-wrapper-details-15">AACCGB21XXX</div>
              </div>

              <div className="divdetails-10">
                <div className="text-wrapper-details-14">City</div>
                <div className="text-wrapper-details-15">00123</div>
              </div>

              <div className="divdetails-13">
                <div className="text-wrapper-details-14">Post Code</div>
                <div className="text-wrapper-details-15">00123</div>
              </div>

              <div className="divdetails-12">
                <div className="text-wrapper-details-14">State/Province</div>
                <div className="text-wrapper-details-15">00123</div>
              </div>

              <div className="divdetails-14">
                <div className="text-wrapper-details-14">Country</div>
                <div className="text-wrapper-details-15">00123</div>
              </div>

              <div className="divdetails-11">
                <div className="text-wrapper-details-14">Delivery Agent Name</div>
                <div className="text-wrapper-details-15">Not Available</div>
              </div>

              <div className="divdetails-15">
                <div className="text-wrapper-details-14">Delivery Agent Address</div>
                <div className="text-wrapper-details-15">Not Available</div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expandedAccordions.accordion5}
          onChange={handleAccordionChange('accordion5')}
          className="custom-accordion"
          disableGutters
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#0e5447' }} />}
            className="accordion-summary"
          >
            <Typography className="accordion-title">
              Aenean Vulputate eleifend
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-details">
            <div className="accordion-content-details">


              <div className="divdetails-9">
                <div className="text-wrapper-details-14">Lorem ipsum dolor sit :</div>
                <div className="text-wrapper-details-15">AACCGB21XXX</div>
              </div>

              <div className="divdetails-10">
                <div className="text-wrapper-details-14">Contact Name:</div>
                <div className="text-wrapper-details-15">Stan Smith</div>
              </div>

              <div className="divdetails-11">
                <div className="text-wrapper-details-14">Aenean vulputate eleifen:</div>
                <p className="text-wrapper-details-15">
                  AQ CLEARING AND EXECUTION SERVICES LIMITED
                </p>
              </div>

              <div className="divdetails-12">
                <div className="text-wrapper-details-14">Contact Phone:</div>
                <div className="text-wrapper-details-15">Not Available</div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
