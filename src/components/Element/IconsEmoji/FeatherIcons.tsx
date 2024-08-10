import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import React from "react";

const FeatherIcons = () => {
  return (
    <div className="element-card theme-card bg-white">
      <div className="card-header">
        <h4>Feather Icon usage</h4>
      </div>
      <div className="card-body">
        <div className="icon-usage">
          <div className="row">
            <div className="col-12">
              <div className="icon-box full-view">
                <div className="icon-group">
                  <DynamicFeatherIcon
                    iconName="Sun"
                    className="icon-theme iw-30 ih-30"
                  />
                  <DynamicFeatherIcon
                    iconName="Sun"
                    className="icon-dark iw-30 ih-30"
                  />
                  <DynamicFeatherIcon
                    iconName="Sun"
                    className="icon-font-color iw-30 ih-30"
                  />
                  <DynamicFeatherIcon
                    iconName="Sun"
                    className="icon-font-light iw-30 ih-30"
                  />
                  <DynamicFeatherIcon
                    iconName="Sun"
                    className="icon-theme stroke-width-3 iw-30 ih-30"
                  />
                </div>
                <p>
                  <code>
                    &lt;DynamicFeatherIcon &nbsp;className="icon-theme iw-30
                    ih-30"&nbsp;iconName="sun"/&gt;
                    <br />
                    &lt;DynamicFeatherIcon className="icon-dark iw-30 ih-30"
                    iconName="sun"/&gt;
                    <br />
                    &lt;DynamicFeatherIcon className="icon-font-color iw-30
                    ih-30" iconName="sun"/&gt;
                    <br />
                    &lt;DynamicFeatherIcon className="icon-font-light iw-30
                    ih-30" iconName="sun"/&gt;
                    <br />
                    &lt;DynamicFeatherIcon &nbsp;className="icon-light iw-30
                    ih-30"&nbsp;iconName="sun"/&gt;
                    <br />&lt;DynamicFeatherIcon &nbsp;className="icon-theme&nbsp;stroke-width-3 iw-30 ih-30"&nbsp;iconName="sun"/&gt;
                  </code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatherIcons;
