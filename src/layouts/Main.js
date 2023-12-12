import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

import About from './About';
import Resume from './Resume';
import Projects from './Projects';

const Main = (props) => (

    <HelmetProvider>
    <ScrollToTop />
    <Helmet titleTemplate="%s | Julie Gip" defaultTitle="Julie Gip" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>

    <div id="wrapper">
      <div id="main">
        <Projects />
        <About />
        <Resume />
      </div>
      {props.fullPage ? null : <SideBar />}
    </div>

  </HelmetProvider>

  )

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Julie Gip's personal website.",
};

export default Main;
