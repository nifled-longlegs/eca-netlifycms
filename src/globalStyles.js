import { injectGlobal } from 'styled-components'

import SpartanMBBold from './assets/fonts/SpartanMB-Bold.otf'
import SpartanMBLight from './assets/fonts/SpartanMB-Light.otf'
import SpartanMBRegular from './assets/fonts/SpartanMB-Regular.otf'
import BackgroundImg from './assets/img/background.png'
import * as vars from './styledVars';


export default injectGlobal`
  @font-face {
    font-family: 'SpartanMB Bold';
    src: url(${SpartanMBBold}) format('opentype');
    font-style: normal;
  }

  @font-face {
    font-family: 'SpartanMB Light';
    src: url(${SpartanMBLight}) format('opentype');
    font-style: normal;
  }

  @font-face {
    font-family: 'SpartanMB Regular';
    src: url(${SpartanMBRegular}) format('opentype');
    font-style: normal;
  }

   body {
    background: url(${BackgroundImg}) no-repeat center right;
    background-size: cover;
    overflow-x: hidden;
  }

  .home-container {
    position: relative;
  }

  .parallax-left, .parallax-right, .parallax-left-alt {
    position: absolute;
  }

  .parallax-right {
    right: 0;
    z-index: 1;
  }

  .parallax-left-alt {
    right: 0;
  }

  .mission--vision {
    margin: 0 auto;
    color: ${vars.blue};
    text-transform: uppercase;

    @media (min-width: 768px) { width: 45%; }

    .mission--vision__title {
      display: flex;
      font-family: "SpartanMB Bold";
      font-size: 1.1rem;

      span {
        margin-left: 0.33rem;
        color: ${vars.blueAlt};
      }
    }

    .mission-vission__desc {
      font-family: "SpartanMB Regular";
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spaceing: 0.1rem;
      line-height: 2rem;
      text-align: justify;
    }
  }

  .youtube-video__wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
    overflow: hidden;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .youtube-video__overlay {
      transition: ease 0.4s;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: ${vars.blueOpaque};
      opacity: 1;
    }

    :hover .youtube-video__overlay {
      opacity: 0;
      visibility: hidden;
    }
  }

  .clients-description {
    display: flex;
    margin: 0 auto;
    width: 80%;

    p {
      font-family: "SpartanMB Regular";
      font-size: 0.75rem;
      color: ${vars.darkBlue};
      text-transform: uppercase;
      line-height: 2rem;
      letter-spacing: 0.1rem;
      text-align: justify;

      @media (min-width: 768px) {
        position: absolute;
      }
    }
  }

  /* Normalization */
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }

  .blog {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "SpartanMB Regular";

    .blog-card {
      position: relative;
      width: 100%;
      margin: 1rem 0;
      background: #fdfdfd;
      box-shadow: 11px 13px 40px -9px rgba(0,0,0,0.75);
      border-radius: 0.33em;

      img {
        width: 100%;
      }

      .blog-card__content {
        padding: 1rem;
        text-align: justify;

        .blog-card__title {
          margin: 0;
          display: inline;
          font-size: 2rem;
          text-align: left;
          border-bottom: 2px solid ${vars.blueAlt};

          a {
            color: inherit;
            :hover { text-decoration: none; }
          }
        }

        .blog-card__desc {
          width: 80%;
          margin-top: 1rem;
          color: #b3b3b3;
        }

        .blog-card__extra {
          margin-top: 0.66rem;
          font-size: 0.7rem;

          .blog-card__tag {
            display: inline;
            margin: 0 0.33rem;
            padding: 0.1rem 0.33rem;
            border: 1px solid ${vars.blueAlt};
            border-radius: 15px;
            transition: ease-in-out 0.2s;

            :hover {
              background: ${vars.blueAlt};
              color: white;
            }

            :first-child {
              margin-left: 0;
            }
          }

          .blog-card__date {
            display: inline;
          }
        }
      }
    }

    .sidebar-title {
      margin: 0;
      margin-bottom: 1rem;
      font-size: 1.4rem;
      text-transform: uppercase;
    }

    &.sidebar {
      align-items: flex-start;

      /* No bootstrap col padding */
      .row {
        padding: 0 0.5rem;

        > div {
          padding: 0;
        }
      }

      .blog-card {
        padding: 1rem;

        img {
          width: 100%;
        }
      }

      .blog-social {
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;

        :nth-child(odd) { padding: ; }

        &.facebook { background: #3b5999 }
        &.instagram { background: #e4405f }
        &.youtube { background: #cd201f }
        &.whatsapp { background: #25D366 }
      }
    }

    /* styles for smaller cards */
    &.alt {
      align-items: stretch;

      .blog-card__title { font-size: 1rem !important; }
      .blog-card__date { display: block !important; }
    }
  }

  .contact {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .contact__card {
      position: relative;
      width: 100%;
      margin: 3em 0;
      background: #fdfdfd;
      box-shadow: 11px 13px 40px -9px rgba(0,0,0,0.75);
      border-radius: 0.33em;
      transition: ease-in-out 0.2s;
      
      &:hover {
        box-shadow: 11px 13px 65px -9px rgba(0,0,0,0.75);
      }

      h1 {
        margin-bottom: 1rem;
      }

      .contact__form {
        font-family: "SpartanMB Regular";
        margin-top: 1.5rem;

        textarea:focus, input:focus{
            outline: none;
            box-shadow: 0 0 0 0.1rem ${vars.blue};
        }

        button {
          background: ${vars.blue};
          border: none;
          color: white;
        }
      }
      
      @media screen and (min-width: 1024px) {
        width: 80%;
      }
    }
  }

  .slider__activated {
    min-height: 85vh !important;
  }







  /*.blog-post {
    width: 80%;
    margin: 0 auto;

    img {
      width: 100%;
      height: auto;
    }

    h2 {
      text-align: center;
    }

    h2,h3,h4,h5 {
      margin: 1rem 0;
      text-decoration: underline solid ${vars.blueAlt};
    }

    p:first-child {
      margin-top: 2rem;
    }
  }*/

  .content {
    padding: 1rem;
  }

  .blog-post {
   display: flex;
   flex-direction: column;
  }

  .blog-post__image {
    width: 25%;
    min-width: 250px;
    height: auto;
  }
`
