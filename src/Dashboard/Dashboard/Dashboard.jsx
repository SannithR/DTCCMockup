import React, { useState } from "react";
import { Ellipse2 } from "../Ellipse2/Ellipse2";
import { Ellipse3 } from "../Ellipse3/Ellipse3";
import { Ellipse3_1 } from "../Ellipse31/Ellipse3_1";
import { Ellipse3_2 } from "../Ellipse32/Ellipse3_2";
import { IconComponentNode } from "../IconComponentNode/IconComponentNode";
import { Line1 } from "../Line1/Line1";
import { Line1_1 } from "../Line11/Line1_1";
import { Line33 } from "../Line33/Line33";
import { Line36 } from "../Line36/Line36";
import { Line37 } from "../Line37/Line37";
import { Polygon1 } from "../Polygon1/Polygon1";
import img from "../../assets/Group 21.png";
import image from "../../assets/Group 18.png";
import {
  HelpOutline as HelpIcon,
  Menu as MenuIcon,
  AccountCircle as AccountIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';
import "./style.css";
import "../../styleguide.css";
import ContentUpdated from "../../Page3Upadted/ContentUpdated/ContentUpdated";
import ThirdNavigation from "../../ThirdNavigation/ThirdNavigation/ThirdNavigation";

export default function Content () {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedView, setSelectedView] = useState("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("NAVIGATION ONE");
  return (
    <div className="content">
    

      {/* Conditional rendering based on active tab */}
      {activeTab === "NAVIGATION ONE" && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' ,padding: '20px' }}>
          <div className="simple-alerts">
        <div className="a-simple-info-alert-wrapper">
          <div className="a-simple-info-alert">Latest Updates</div>
        </div>

        <div className="asset" />
      </div>

      <div className="KP-is">
        <div className="test-DASH">TEST DASH</div>

        <div className="cards">
          <div className="group" onClick={() => alert('Card 1 clicked!')}>
            <div className="group-2">
              <div className="total-alerts">Aleifend tellus.</div>

              <div className="element">50</div>
            </div>
          </div>

          <div className="group" onClick={() => alert('Card 2 clicked!')}>
            <div className="group-2">
              <div className="total-alerts">Aenean imperdiet</div>

              <div className="element-2">200</div>
            </div>
          </div>

          <div className="group" onClick={() => alert('Card 3 clicked!')}>
            <div className="group-2">
              <div className="total-alerts">Cras dapibus</div>

              <div className="element-2">100</div>
            </div>
          </div>

          <div className="group" onClick={() => alert('Card 4 clicked!')}>
            <div className="group-2">
              <div className="total-alerts">Luctus pulvinar</div>

              <div className="element">50</div>
            </div>
          </div>

          <div className="group" onClick={() => alert('Card 5 clicked!')}>
            <div className="group-2">
              <div className="total-alerts">Integer tincidunt</div>

              <div className="element">20</div>
            </div>
          </div>

          <div className="group-wrapper" onClick={() => alert('Card 6 clicked!')}>
            <div className="group-2">
              <div className="total-alerts">Vivamus elementum</div>

              <div className="element-2">100</div>
            </div>
          </div>
        </div>
      </div>

      <div className="chartrow">
        <div className="chart">
          <div className="title">
            <div className="heading">
              <div className="text-wrapper-4">Curabitur ullamcorper</div>
            </div>
          </div>

          <div className="dropdowns">
            <div className="box-header-wrapper">
              <div className="box-header">
                <div className="default">View</div>
              </div>
            </div>

            <select
              className="interactive-dropdown"
              value={selectedView}
              onChange={(e) => setSelectedView(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Today">Today</option>
              <option value="Week">This Week</option>
              <option value="Month">This Month</option>
            </select>
          </div>

          <div className="group-3">
            <div className="group-4">
              <div className="group-5">
                <div className="overlap-group">
                  <div className="ellipse" />

                  <Ellipse3 className="ellipse-3" />
                </div>
              </div>
            </div>
          </div>

          <div className="text">
            <div className="text-2">
              <p className="quisque-rutrum">
                <span className="span">Quisque rutrum: </span>

                <span className="text-wrapper-6">50</span>
              </p>

              <p className="aenean-imperdiet">
                <span className="span">Aenean imperdiet: </span>

                <span className="text-wrapper-6">150</span>
              </p>
            </div>

            <div className="key">
              <div className="frame-4">
                <div className="ellipse-2" />

                <div className="text-wrapper-7">Aba</div>
              </div>

              <div className="frame-4">
                <div className="ellipse-4" />

                <div className="text-wrapper-7">Aerw</div>
              </div>
            </div>
          </div>
        </div>

        <div className="chart">
          <div className="title">
            <div className="heading">
              <div className="text-wrapper-4">Curabitur ullamcorper</div>
            </div>
          </div>

              <div className="dropdowns">
            <div className="box-header-wrapper">
              <div className="box-header">
                <div className="default">View</div>
              </div>
            </div>

            <select
              className="interactive-dropdown"
              value={selectedView}
              onChange={(e) => setSelectedView(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Today">Today</option>
              <option value="Week">This Week</option>
              <option value="Month">This Month</option>
            </select>
          </div>

          <div className="group-3">
            <div className="group-4">
              <div className="group-5">
                <div className="overlap-group-2">
                  <div className="ellipse-5" />

                  <IconComponentNode className="ellipse-3-instance" />
                </div>
              </div>
            </div>
          </div>

          <div className="text">
            <div className="text-2">
              <p className="quisque-rutrum">
                <span className="span">Quisque rutrum: </span>

                <span className="text-wrapper-6">50</span>
              </p>

              <p className="aenean-imperdiet">
                <span className="span">Aenean imperdiet: </span>

                <span className="text-wrapper-6">150</span>
              </p>
            </div>

            <div className="frame-5">
              <div className="frame-4">
                <div className="ellipse-6" />

                <div className="text-wrapper-7">GA</div>
              </div>

              <div className="frame-6">
                <div className="ellipse-7" />

                <div className="text-wrapper-7">AS</div>
              </div>
            </div>
          </div>
        </div>

        <div className="chart">
          <div className="title">
            <div className="heading">
              <div className="text-wrapper-4">Aenean imperdiet</div>
            </div>
          </div>

              <div className="dropdowns">
            <div className="box-header-wrapper">
              <div className="box-header">
                <div className="default">View</div>
              </div>
            </div>

            <select
              className="interactive-dropdown"
              value={selectedView}
              onChange={(e) => setSelectedView(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Today">Today</option>
              <option value="Week">This Week</option>
              <option value="Month">This Month</option>
            </select>
          </div>

          <div className="group-3">
            <div className="group-4">
              <div className="group-5">
                
                <img src={image} alt="Group 21" />
               
              </div>
            </div>
          </div>

          <div className="text">
            <div className="text-2">
              <p className="quisque-rutrum">
                <span className="span">Quisque rutrum: </span>

                <span className="text-wrapper-6">50</span>
              </p>

              <p className="aenean-imperdiet">
                <span className="span">Aenean imperdiet: </span>

                <span className="text-wrapper-6">150</span>
              </p>
            </div>

            <div className="frame-7">
              <div className="frame-4">
                <div className="ellipse-8" />

                <div className="text-wrapper-7">SSH</div>
              </div>

              <div className="frame-4">
                <div className="ellipse-9" />

                <div className="text-wrapper-7">AAB</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="chart-2">
            <div className="cards-2" />

            <div className="frame-8">
              <div className="the-quick-brown-fox-wrapper">
                <div className="the-quick-brown-fox">Vivamus elementum</div>
              </div>

                 <div className="dropdowns">
            <div className="box-header-wrapper">
              <div className="box-header">
                <div className="default">View</div>
              </div>
            </div>

            <select
              className="interactive-dropdown"
              value={selectedView}
              onChange={(e) => setSelectedView(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Today">Today</option>
              <option value="Week">This Week</option>
              <option value="Month">This Month</option>
            </select>
          </div>
            </div>

            <div className="frame-11">
              <div className="frame-12">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-4">
                    <Line36 className="line-36" />
                    <Line36 className="line-36-instance" />
                    <Line36 className="line-2" />
                    <Line36 className="line-3" />
                    <Line36 className="line-4" />
                    <Line37 className="line-37" />
                    <Line33 className="line-33" />
                    <div className="group-7">
                      <div className="group-8">
                        <div className="group-9">
                          <div className="rectangle" />

                          <div className="rectangle-2" />

                          <div className="rectangle-3" />
                        </div>
                      </div>

                      <div className="text-wrapper-8">BB</div>

                      <div className="text-wrapper-9">AA</div>

                      <div className="text-wrapper-10">CC</div>
                    </div>

                    <div className="group-10">
                      <div className="group-11">
                        <div className="group-12">
                          <div className="rectangle-4" />

                          <div className="text-wrapper-11">BB</div>

                          <div className="text-wrapper-12">AA</div>

                          <div className="text-wrapper-13">CC</div>

                          <div className="rectangle-5" />

                          <div className="rectangle-6" />
                        </div>
                      </div>
                    </div>

                    <div className="group-13">
                      <div className="group-14">
                        <div className="group-15">
                          <div className="rectangle-7" />

                          <div className="rectangle-8" />

                          <div className="text-wrapper-14">BB</div>

                          <div className="text-wrapper-15">AA</div>

                          <div className="text-wrapper-16">CC</div>

                          <div className="rectangle-9" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tooltips">
                  <div className="customized">
                    <div className="frame-13">
                      <div className="label-wrapper">
                        <div className="label">Count :61</div>
                      </div>
                    </div>

                    <Polygon1 className="polygon" />
                  </div>
                </div>
              </div>

              <div className="group-16">
                <div className="group-17">
                  <div className="group-18">
                    <div className="ellipse-10" />

                    <div className="ellipse-11" />

                    <div className="ellipse-12" />

                    <div className="text-wrapper-17">Status 2</div>

                    <div className="group-19">
                      <div className="ellipse-13" />

                      <div className="ellipse-14" />

                      <div className="ellipse-15" />

                      <div className="text-wrapper-18">Status 1</div>
                    </div>
                  </div>

                  <div className="group-20">
                    <div className="ellipse-16" />

                    <div className="ellipse-17" />

                    <div className="ellipse-18" />

                    <div className="text-wrapper-18">Status 3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="chart">
            <div className="title">
              <div className="heading">
                <div className="text-wrapper-4">Curabitur ullamcorper</div>
              </div>
            </div>

            <div className="group-21">
              <div className="group-4">
                <div className="group-5">
                  <div className="group-4">
                   
                    <img src={img} alt="Group 21" />
                    
                 
                  </div>
                </div>
              </div>
            </div>

            <div className="text-3">
              <div className="text-2">
                <p className="quisque-rutrum">
                  <span className="span">Quisque rutrum: </span>

                  <span className="text-wrapper-6">50</span>
                </p>

                <p className="aenean-imperdiet">
                  <span className="span">Aenean imperdiet: </span>

                  <span className="text-wrapper-6">150</span>
                </p>
              </div>

              <div className="frame-14">
                <div className="frame-4">
                  <div className="ellipse-21" />

                  <div className="text-wrapper-7">Etiam sit amet orci</div>
                </div>

                <div className="frame-4">
                  <div className="ellipse-22" />

                  <div className="text-wrapper-7">Etiam sit amet A</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="widget-col">
          <div className="widget-card">
            <div className="frame-15">
              <div className="frame-16">
                <div className="text-wrapper-19">Etiam sit amet orci</div>

                <p className="AWQ">
                  <span className="text-wrapper-20">AWQ</span>
                </p>

                <div className="text-wrapper-21">Hendrerit</div>

                <div className="text-wrapper-21">Etiam sit amet</div>

                <div className="text-wrapper-21">Leo eget bibendum</div>
              </div>

              <div className="frame-17">
                <p className="totals">
                  <span className="text-wrapper-20">TWQs</span>
                </p>

                <p className="p">
                  <span className="text-wrapper-22">&nbsp;</span>

                  <span className="text-wrapper-23">5</span>
                </p>

                <p className="p">
                  <span className="text-wrapper-22">&nbsp;</span>

                  <span className="text-wrapper-23">2</span>
                </p>

                <p className="p">
                  <span className="text-wrapper-22">&nbsp;</span>

                  <span className="text-wrapper-23">7</span>
                </p>
              </div>
            </div>
          </div>

          <div className="widget-card">
            <div className="text-wrapper-4">Donec sodales sagittis</div>

            <div className="frame-18">
              <div className="frame-19">
                <p className="span-wrapper">
                  <span className="text-wrapper-24">MAS</span>
                </p>

                <div className="text-wrapper-21">Etiam sit amet</div>

                <div className="text-wrapper-21">Etiam sit amet</div>
              </div>

              <div className="frame-17">
                <p className="span-wrapper">
                  <span className="text-wrapper-24">HUE</span>
                </p>

                <p className="p">
                  <span className="text-wrapper-22">&nbsp;</span>

                  <span className="text-wrapper-23">5</span>
                </p>

                <p className="p">
                  <span className="text-wrapper-22">&nbsp;</span>

                  <span className="text-wrapper-23">2</span>
                </p>
              </div>
            </div>
          </div>

          <div className="widget-card">
            <div className="text-wrapper-19">Sem quam semper</div>

            <div className="frame-18">
              <div className="frame-19">
                <p className="span-wrapper">
                  <span className="text-wrapper-24">SQE</span>
                </p>

                <div className="text-wrapper-21">Leo egb ibendum</div>

                <div className="text-wrapper-21">Etiam sit amet</div>
              </div>

              <div className="frame-17">
                <p className="span-wrapper">
                  <span className="text-wrapper-24">AQY</span>
                </p>

                <div className="element-3"> 61</div>

                <div className="element-3"> 48</div>
              </div>
            </div>
          </div>
        </div>
      </div>

        </div>
      )}

      {/* Content for NAVIGATION TWO */}
      {activeTab === "NAVIGATION TWO" && (
        <ContentUpdated />
      )}

      {/* Content for NAVIGATION THREE */}
      {activeTab === "NAVIGATION THREE" && (
        <ThirdNavigation />
      )}

     
    </div>
  );
};
