export const ConsiderableClouds = () => {
  return (
    <svg
      className="climacon climacon_cloudMoon"
      id="cloudMoon"
      version="1.1"
      viewBox="15 15 70 70"
    >
      <clipPath id="cloudFillClipfill1">
        <path d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"></path>
      </clipPath>
      <clipPath id="moonCloudFillClipfill">
        <path d="M0,0v100h100V0H0z M60.943,46.641c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C67.922,43.986,64.745,46.641,60.943,46.641z"></path>
      </clipPath>
      <g className="climacon_iconWrap climacon_iconWrap-cloudMoon">
        <g clipPath="url(#cloudFillClip)">
          <g
            className="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud"
            clipPath="url(#moonCloudFillClip)"
          >
            <path
              className="climacon_component climacon_component-stroke climacon_component-stroke_moon"
              d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"
            ></path>
          </g>
        </g>
        <g
          className="climacon_wrapperComponent climacon_wrapperComponent-cloud"
          clipPath="url(#cloudFillClip)"
        >
          <path
            className="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
            d="M44.033,65.641c-8.836,0-15.999-7.162-15.999-15.998c0-8.835,7.163-15.998,15.999-15.998c6.006,0,11.233,3.312,13.969,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.26,65.641,47.23,65.641,44.033,65.641z"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export const CloudSun = () => {
  return (
    <svg
      className="climacon climacon_cloudSun"
      id="cloudSun"
      version="1.1"
      viewBox="15 15 70 70"
    >
      <clipPath id="cloudFillClipfill">
        <path d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"></path>
      </clipPath>
      <clipPath id="sunCloudFillClip">
        <path d="M15,15v70h70V15H15z M57.945,49.641c-4.417,0-8-3.582-8-7.999c0-4.418,3.582-7.999,8-7.999s7.998,3.581,7.998,7.999C65.943,46.059,62.362,49.641,57.945,49.641z"></path>
      </clipPath>
      <g className="climacon_iconWrap climacon_cloudSun-iconWrap">
        <g clipPath="url(#cloudFillClip)">
          <g className="climacon_componentWrap climacon_componentWrap-sun climacon_componentWrap-sun_cloud">
            <g className="climacon_componentWrap climacon_componentWrap_sunSpoke">
              <path
                className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-orth"
                d="M80.029,43.611h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S81.135,43.611,80.029,43.611z"
              ></path>
              <path
                className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                d="M72.174,30.3c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L72.174,30.3z"
              ></path>
              <path
                className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                d="M58.033,25.614c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C60.033,24.718,59.135,25.614,58.033,25.614z"
              ></path>
              <path
                className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                d="M43.892,30.3l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C45.939,31.081,44.673,31.081,43.892,30.3z"
              ></path>
              <path
                className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                d="M42.033,41.612c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C41.139,39.612,42.033,40.509,42.033,41.612z"
              ></path>
              <path
                className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                d="M43.892,52.925c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L43.892,52.925z"
              ></path>
              <path
                className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                d="M58.033,57.61c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C56.033,58.505,56.928,57.61,58.033,57.61z"
              ></path>
              <path
                className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                d="M72.174,52.925l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C70.125,52.144,71.391,52.144,72.174,52.925z"
              ></path>
            </g>
            <g
              className="climacon_wrapperComponent climacon_wrapperComponent-sunBody"
              clipPath="url(#sunCloudFillClip)"
            >
              <circle
                className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
                cx="58.033"
                cy="41.612"
                r="11.999"
              />
            </g>
          </g>
        </g>
        <g
          className="climacon_wrapperComponent climacon_wrapperComponent-cloud"
          clipPath="url(#cloudFillClip)"
        >
          <path
            className="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
            d="M44.033,65.641c-8.836,0-15.999-7.162-15.999-15.998c0-8.835,7.163-15.998,15.999-15.998c6.006,0,11.233,3.312,13.969,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.26,65.641,47.23,65.641,44.033,65.641z"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export const CloudDrizzle = () => {
  return (
    <svg
      className="climacon climacon_cloudDrizzle"
      id="cloudDrizzle"
      version="1.1"
      viewBox="15 15 70 70"
    >
      <g className="climacon_iconWrap climacon_iconWrap-cloudDrizzle">
        <g className="climacon_wrapperComponent climacon_wrapperComponent-drizzle">
          <path
            className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left"
            d="M42.001,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2.001-0.895-2.001-2v-3.998C40,54.538,40.896,53.644,42.001,53.644z"
          ></path>
          <path
            className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle"
            d="M49.999,53.644c1.104,0,2,0.896,2,2v4c0,1.104-0.896,2-2,2s-1.998-0.896-1.998-2v-4C48.001,54.54,48.896,53.644,49.999,53.644z"
          ></path>
          <path
            className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right"
            d="M57.999,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2v-3.998C55.999,54.538,56.894,53.644,57.999,53.644z"
          ></path>
        </g>
        <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud">
          <path
            className="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
            d="M63.999,64.944v-4.381c2.387-1.386,3.998-3.961,3.998-6.92c0-4.418-3.58-8-7.998-8c-1.603,0-3.084,0.481-4.334,1.291c-1.232-5.316-5.973-9.29-11.664-9.29c-6.628,0-11.999,5.372-11.999,12c0,3.549,1.55,6.729,3.998,8.926v4.914c-4.776-2.769-7.998-7.922-7.998-13.84c0-8.836,7.162-15.999,15.999-15.999c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.336-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12C71.997,58.864,68.655,63.296,63.999,64.944z"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export const CloudLightningfill = () => {
  return (
    <svg
      className="climacon climacon_cloudLightning"
      id="cloudLightningfill2"
      version="1.1"
      viewBox="15 15 70 70"
    >
      <g className="climacon_iconWrap climacon_iconWrap-cloudLightning">
        <g className="climacon_wrapperComponent climacon_wrapperComponent-lightning">
          <polygon
            className="climacon_component climacon_component-stroke climacon_component-stroke_lightning"
            points="48.001,51.641 57.999,51.641 52,61.641 58.999,61.641 46.001,77.639 49.601,65.641 43.001,65.641 "
          />
        </g>
        <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud">
          <path
            className="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
            d="M59.999,65.641c-0.28,0-0.649,0-1.062,0l3.584-4.412c3.182-1.057,5.478-4.053,5.478-7.588c0-4.417-3.581-7.998-7.999-7.998c-1.602,0-3.083,0.48-4.333,1.29c-1.231-5.316-5.974-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,12c0,5.446,3.632,10.039,8.604,11.503l-1.349,3.777c-6.52-2.021-11.255-8.098-11.255-15.282c0-8.835,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.114,1.338-0.205,2.033-0.205c6.627,0,11.999,5.371,11.999,11.999C71.999,60.268,66.626,65.641,59.999,65.641z"
          />
        </g>
      </g>
    </svg>
  );
};

export const CloudLightning = () => {
  return (
    <svg
      className="climacon climacon_cloudLightning"
      id="cloudLightningfill2"
      version="1.1"
      viewBox="15 15 70 70"
    >
      <g className="climacon_iconWrap climacon_iconWrap-cloudLightning">
        <g className="climacon_wrapperComponent climacon_wrapperComponent-lightning">
          <polygon
            className="climacon_component climacon_component-stroke climacon_component-stroke_lightning"
            points="48.001,51.641 57.999,51.641 52,61.641 58.999,61.641 46.001,77.639 49.601,65.641 43.001,65.641"
          ></polygon>
        </g>
        <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud">
          <path
            className="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
            d="M59.999,65.641c-0.28,0-0.649,0-1.062,0l3.584-4.412c3.182-1.057,5.478-4.053,5.478-7.588c0-4.417-3.581-7.998-7.999-7.998c-1.602,0-3.083,0.48-4.333,1.29c-1.231-5.316-5.974-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,12c0,5.446,3.632,10.039,8.604,11.503l-1.349,3.777c-6.52-2.021-11.255-8.098-11.255-15.282c0-8.835,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.114,1.338-0.205,2.033-0.205c6.627,0,11.999,5.371,11.999,11.999C71.999,60.268,66.626,65.641,59.999,65.641z"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export const ClimaConMoon = () => {
  return (
    <svg
      className="climacon climacon_moon"
      id="moon"
      version="1.1"
      viewBox="15 15 70 70"
    >
      <clipPath id="moonFillClip">
        <path d="M15,15v70h70V15H15z M50,57.999c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C56.979,55.344,53.802,57.999,50,57.999z"></path>
      </clipPath>
      <g className="climacon_iconWrap climacon_iconWrap-moon">
        <g
          className="climacon_componentWrap climacon_componentWrap-moon"
          clipPath="url(#moonFillClip)"
        >
          <path
            className="climacon_component climacon_component-stroke climacon_component-stroke_moon"
            d="M50,61.998c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C61.998,56.626,56.626,61.998,50,61.998z"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export const CloudDrizzleMoon = () => {
  return (
    <svg
      className="climacon climacon_cloudDrizzleMoon"
      id="cloudDrizzleMoon"
      version="1.1"
      viewBox="15 15 70 70"
    >
      <clipPath id="moonCloudFillClipfill1">
        <path d="M0,0v100h100V0H0z M60.943,46.641c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C67.922,43.986,64.745,46.641,60.943,46.641z" />
      </clipPath>
      <clipPath id="cloudFillClipfill11">
        <path d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z" />
      </clipPath>
      <g className="climacon_iconWrap climacon_iconWrap-cloudDrizzleMoon">
        <g clipPath="url(#cloudFillClip)">
          <g
            className="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud"
            clipPath="url(#moonCloudFillClip)"
          >
            <path
              className="climacon_component climacon_component-stroke climacon_component-stroke_moon"
              d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"
            />
          </g>
        </g>
        <g className="climacon_wrapperComponent climacon_wrapperComponent-drizzle">
          <path
            className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left"
            d="M42.001,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2.001-0.895-2.001-2v-3.998C40,54.538,40.896,53.644,42.001,53.644z"
          />
          <path
            className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle"
            d="M49.999,53.644c1.104,0,2,0.896,2,2v4c0,1.104-0.896,2-2,2s-1.998-0.896-1.998-2v-4C48.001,54.54,48.896,53.644,49.999,53.644z"
          />
          <path
            className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right"
            d="M57.999,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2v-3.998C55.999,54.538,56.894,53.644,57.999,53.644z"
          />
        </g>
        <g
          className="climacon_wrapperComponent climacon_wrapperComponent-cloud"
          clipPath="url(#cloudFillClip)"
        >
          <path
            className="climacon_component climacon_component-stroke climacon_component-stroke_cloud"
            d="M63.999,64.944v-4.381c2.387-1.386,3.998-3.961,3.998-6.92c0-4.418-3.58-8-7.998-8c-1.603,0-3.084,0.481-4.334,1.291c-1.232-5.316-5.973-9.29-11.664-9.29c-6.628,0-11.999,5.372-11.999,12c0,3.549,1.55,6.729,3.998,8.926v4.914c-4.776-2.769-7.998-7.922-7.998-13.84c0-8.836,7.162-15.999,15.999-15.999c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.336-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12C71.997,58.864,68.655,63.296,63.999,64.944z"
          />
        </g>
      </g>
    </svg>
  );
};

export const ClimaSun = () => {
  return (
    <svg
      className="climacon climacon_sun"
      id="sun"
      version="1.1"
      viewBox="15 15 70 70"
    >
      <clipPath id="sunFillClip">
        <path d="M0,0v100h100V0H0z M50.001,57.999c-4.417,0-8-3.582-8-7.999c0-4.418,3.582-7.999,8-7.999s7.998,3.581,7.998,7.999C57.999,54.417,54.418,57.999,50.001,57.999z"></path>
      </clipPath>
      <g className="climacon_iconWrap climacon_iconWrap-sun">
        <g className="climacon_componentWrap climacon_componentWrap-sun">
          <g className="climacon_componentWrap climacon_componentWrap-sunSpoke">
            <path
              className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
              d="M72.03,51.999h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S73.136,51.999,72.03,51.999z"
            ></path>
            <path
              className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northEast"
              d="M64.175,38.688c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L64.175,38.688z"
            ></path>
            <path
              className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
              d="M50.034,34.002c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C52.034,33.106,51.136,34.002,50.034,34.002z"
            ></path>
            <path
              className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northWest"
              d="M35.893,38.688l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C37.94,39.469,36.674,39.469,35.893,38.688z"
            ></path>
            <path
              className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-west"
              d="M34.034,50c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C33.14,48,34.034,48.896,34.034,50z"
            ></path>
            <path
              className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-southWest"
              d="M35.893,61.312c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L35.893,61.312z"
            ></path>
            <path
              className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-south"
              d="M50.034,65.998c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C48.034,66.893,48.929,65.998,50.034,65.998z"
            ></path>
            <path
              className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-southEast"
              d="M64.175,61.312l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C62.126,60.531,63.392,60.531,64.175,61.312z"
            ></path>
          </g>
          <g
            className="climacon_componentWrap climacon_componentWrap_sunBody"
            clipPath="url(#sunFillClip)"
          >
            <circle
              className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody"
              cx="50.034"
              cy={50}
              r="11.999"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const Wind = () => {
  return (
    <svg
      className="climacon climacon_wind"
      id="wind"
      version="1.1"
      viewBox="15 15 70 70"
    >
      <g className="climacon_iconWrap climacon_iconWrap-wind">
        <g className="climacon_wrapperComponent climacon_componentWrap-wind">
          <path
            className="climacon_component climacon_component-stroke climacon_component-wind climacon_component-wind_curl"
            d="M65.999,52L65.999,52h-3c-1.104,0-2-0.895-2-1.999c0-1.104,0.896-2,2-2h3c1.104,0,2-0.896,2-1.999c0-1.105-0.896-2-2-2s-2-0.896-2-2s0.896-2,2-2c0.138,0,0.271,0.014,0.401,0.041c3.121,0.211,5.597,2.783,5.597,5.959C71.997,49.314,69.312,52,65.999,52z"
          ></path>
          <path
            className="climacon_component climacon_component-stroke climacon_component-wind"
            d="M55.999,48.001h-2h-6.998H34.002c-1.104,0-1.999,0.896-1.999,2c0,1.104,0.895,1.999,1.999,1.999h2h3.999h3h4h3h3.998h2c3.313,0,6,2.688,6,6c0,3.176-2.476,5.748-5.597,5.959C56.271,63.986,56.139,64,55.999,64c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2s2-0.896,2-2s-0.896-2-2-2h-2h-3.998h-3h-4h-3h-3.999h-2c-3.313,0-5.999-2.686-5.999-5.999c0-3.175,2.475-5.747,5.596-5.959c0.131-0.026,0.266-0.04,0.403-0.04l0,0h12.999h6.998h2c1.104,0,2-0.896,2-2s-0.896-2-2-2s-2-0.895-2-2c0-1.104,0.896-2,2-2c0.14,0,0.272,0.015,0.403,0.041c3.121,0.211,5.597,2.783,5.597,5.959C61.999,45.314,59.312,48.001,55.999,48.001z"
          ></path>
        </g>
      </g>
    </svg>
  );
};
