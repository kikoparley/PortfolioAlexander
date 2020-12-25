import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Sobre Mí',
    paragraph: 'Gerencia industrial 8vo Semestre. Con mas de tres años de experiencia trabajando en distintos proyectos de programación web, en los cuales he manejado frameworks de Javascript como React y Angular 4+, preprocesadores de CSS y HTML 5 como lo son SaSS. Desarrollo de Api Rest con Node.js + Express.Js'
  };
  const sectionHeader2 = {
    title: 'Tecnologías manejadas',
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <SectionHeader data={sectionHeader2} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div >
                    <Image
                      src={require('./../../assets/images/react.svg')}
                      alt="REACT"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    REACT
                    </h4>
                  <p className="m-0 text-sm">

                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div>
                    <Image
                      src={require('./../../assets/images/angular-icon-1.svg')}
                      alt="ANGULAR "
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    ANGULAR
                    </h4>
                  <p className="m-0 text-sm">

                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div>
                    <Image
                      src={require('./../../assets/images/node-js-logo.svg')}
                      alt="Features tile icon 03"
                      width={96}
                      height={96} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    NODE JS
                    </h4>
                  <p className="m-0 text-sm">
 
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div>
                    <Image
                      src={require('./../../assets/images/512px-Ionic_Logo.svg.png')}
                      alt="Ionic_Logo.svg.png"
                      width={124}
                      height={124} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    IONIC 
                    </h4>
                  <p className="m-0 text-sm">

                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div >
                    <Image
                      src={require('./../../assets/images/microsoft-sql-server.svg')}
                      alt="SQL SERVER"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    SQL SERVER
                    </h4>
                  <p className="m-0 text-sm">

                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div >
                    <Image
                      src={require('./../../assets/images/firebase-1.svg')}
                      alt="firebase-1.svg"
                      width={32}
                      height={32} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    FIREBASE
                    </h4>
                  <p className="m-0 text-sm">

                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;