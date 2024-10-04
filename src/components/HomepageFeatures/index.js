import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '¿Qué es el aseguramiento de la calidad del software?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        El aseguramiento de la calidad (QA) es el proceso de garantizar que el software cumpla con
         los requisitos establecidos y esté libre de defectos antes de su lanzamiento.
          Incluye actividades de control de calidad y pruebas.
      </>
    ),
  },
  {
    title: 'Importancia del QA en el desarrollo de software',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Un proceso efectivo de QA minimiza el riesgo de errores costosos, mejora la experiencia del 
        usuario y asegura que el software sea confiable y seguro
      </>
    ),
  },
  {
    title: 'Principales técnicas de aseguramiento de la calidad',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
Algunas de las técnicas clave incluyen pruebas funcionales, pruebas de integración, pruebas unitarias,
 revisiones de código, y pruebas automatizadas.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
