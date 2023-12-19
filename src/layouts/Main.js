import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import SideBar from './SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';
import About from '../components/Template/About';
import Resume from '../components/Template/Resume';
import Projects from '../components/Template/Projects';

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
