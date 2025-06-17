import React from "react";
import { Line52 } from "../Line52/Line52";
import { Line53 } from "../Line53/Line53";
import "./style.css";

export default function ThirdNavigation(){
  return (
    <div className="frame">
      <div className="div">
        <div className="page-title">PAGE TITLE 00A23</div>

        <div className="group">
          <div className="info-icon">
            <div className="info-circle">question-circle</div>
          </div>
        </div>
      </div>

      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="top-label-dropdown">
            <div className="div-2">
              <div className="label-wrapper">
                <div className="label">
                  <div className="text-wrapper">Priority</div>

                  <div className="text-wrapper-2">*</div>
                </div>
              </div>

              <div className="div-3" />
            </div>

            <div className="div-4">
              <div className="select">Low</div>

              <div className="div-5">
                <div className="text-wrapper-3">Chevron-down</div>
              </div>
            </div>
          </div>

          <div className="date-input">
            <div className="date-input-default">
              <div className="date-input-top-label">
                <div className="div-6">
                  <div className="label-component">
                    <p className="p">
                      <span className="span">Start date </span>

                      <span className="text-wrapper-4">*</span>
                    </p>
                  </div>
                </div>

                <div className="div-7">
                  <div className="date">
                    <div className="text-wrapper-5">Select Date</div>
                  </div>

                  <div className="text-wrapper-6">Calendar-alt</div>
                </div>
              </div>
            </div>
          </div>

          <div className="date-input-default-wrapper">
            <div className="date-input-default">
              <div className="date-input-top-label">
                <div className="div-6">
                  <div className="label-component">
                    <p className="p">
                      <span className="span">End Date </span>

                      <span className="text-wrapper-4">*</span>
                    </p>
                  </div>
                </div>

                <div className="div-7">
                  <div className="date">
                    <div className="text-wrapper-5">Select Date</div>
                  </div>

                  <div className="text-wrapper-6">Calendar-alt</div>
                </div>
              </div>
            </div>
          </div>

          <div className="group-2">
            <div className="text-wrapper-7">Message Recipients:</div>

            <div className="text-wrapper-8">(Select at least one)</div>

            <div className="group-3">
              <div className="check-box">
                <div className="unchecked-combined">
                  <div className="div-2">
                    <div className="rectangle" />
                  </div>

                  <div className="div-wrapper">
                    <div className="text-wrapper">Recipient A</div>
                  </div>
                </div>
              </div>

              <div className="unchecked-combined-wrapper">
                <div className="unchecked-combined">
                  <div className="div-2">
                    <div className="rectangle" />
                  </div>

                  <div className="div-wrapper">
                    <div className="text-wrapper">Recipient B</div>
                  </div>
                </div>
              </div>

              <div className="check-box-2">
                <div className="unchecked-combined">
                  <div className="div-2">
                    <div className="rectangle" />
                  </div>

                  <div className="div-wrapper">
                    <div className="text-wrapper">Recipient C</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="required-fields">
            <span className="text-wrapper-9">*</span>

            <span className="text-wrapper-10"> Required Fields</span>
          </p>

          <div className="group-4">
            <div className="text-wrapper-11">Create New Item</div>
          </div>

          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="group-5">
                <div className="overlap-group">
                  <div className="top-label-dropdown-2">
                    <div className="div-2">
                      <div className="label-wrapper">
                        <div className="default-wrapper">
                          <p className="p">
                            <span className="span">Message </span>

                            <span className="text-wrapper-4">*</span>
                          </p>
                        </div>
                      </div>

                      <div className="div-3" />
                    </div>

                    <div className="div-4">
                      <div className="select-2">In Retrieval</div>

                      <div className="div-5" />
                    </div>
                  </div>

                  <div className="div-8">
                    <div className="select-3">In Retrieval</div>

                    <div className="div-5" />
                  </div>
                </div>
              </div>

              <div className="group-6">
                <div className="overlap-2">
                  <Line52 className="line" />
                  <Line53 className="line-53" />
                </div>
              </div>
            </div>
          </div>

          <div className="top-label-dropdown-3">
            <div className="div-2">
              <div className="label-wrapper">
                <div className="label-2">
                  <p className="p">
                    <span className="span">Header </span>

                    <span className="text-wrapper-4">*</span>
                  </p>
                </div>
              </div>

              <div className="div-3" />
            </div>

            <div className="div-4">
              <div className="select-2">In Retrieval</div>

              <div className="div-5" />
            </div>
          </div>

          <button className="button">
            <div className="div-wrapper">
              <div className="PRIMARY">PUBLISH</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
