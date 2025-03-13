import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
const FeatureList = [
  {
    title: 'Documentation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Access company policies, procedures, and guidelines to help you work effectively within HashStudios.
      </>
    ),
  },
  {
    title: 'Team Resources',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Find information about teams, roles, and responsibilities at HashStudios to better collaborate.
      </>
    ),
  },
  {
    title: 'Security & Best Practices',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Learn about HashStudios security protocols and best practices to maintain our high standards.
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
        <Heading as="h3">{title}</Heading>
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
        <div className="row margin-top--lg">
          <div className="col col--12 text--center">
            <Link
              className="button button--primary button--lg"
              to="/docs/intro/Business-Management/Onboarding-Guide">
              New Employee? Start Here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}