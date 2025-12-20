import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import FuturisticRoboticsSVG from '@site/static/img/futuristic-robotics.svg';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--8">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/modules/week-01-02-fundamentals/physical-ai-principles">
                Start Learning - 5min ⏱️
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.futuristicImageContainer}>
              <FuturisticRoboticsSVG className={styles.futuristicImage} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Educational resource for Physical AI & Humanoid Robotics">
      <HomepageHeader />
      <main>
        <section className={styles.aboutSection}>
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <h2>About This Book</h2>
                <p>
                  Welcome to the comprehensive educational resource for <strong>Physical AI & Humanoid Robotics</strong>. This book bridges the gap between digital AI and physical systems, focusing on <strong>Embodied Intelligence</strong>—AI that understands physics, perception, motion, and interaction rather than existing purely in digital environments.
                </p>

                <h3>🎯 Learning Objectives</h3>
                <p>
                  By the end of this 13-week curriculum, you will be able to:
                </p>
                <ul>
                  <li>Design Physical AI systems</li>
                  <li>Simulate humanoid robots</li>
                  <li>Deploy AI-driven robotic behavior</li>
                  <li>Integrate perception, planning, and action pipelines</li>
                </ul>

                <h3>🧰 Technology Stack</h3>
                <p>
                  This book covers the following core technologies:
                </p>
                <ul>
                  <li><strong>ROS 2</strong> (Robot Operating System)</li>
                  <li><strong>Gazebo</strong> (Physics Simulation)</li>
                  <li><strong>Unity</strong> (High-fidelity visualization)</li>
                  <li><strong>NVIDIA Isaac Sim & Isaac ROS</strong></li>
                  <li><strong>Vision–Language–Action (VLA) pipelines</strong></li>
                </ul>

                <h3>📚 Course Structure</h3>
                <p>
                  The book follows a progressive complexity structure:
                </p>
                <ul>
                  <li><strong>Weeks 1–2</strong>: Fundamentals</li>
                  <li><strong>Weeks 3–10</strong>: Core skills</li>
                  <li><strong>Weeks 11–13</strong>: Advanced integration</li>
                </ul>
                <p>
                  Each module builds upon the previous ones, ensuring you develop a solid foundation before advancing to more complex topics.
                </p>

                <h3>🤖 Capstone Project</h3>
                <p>
                  The course culminates in "The Autonomous Humanoid" project where you'll implement a complete system that can:
                </p>
                <ol>
                  <li>Receive a voice command</li>
                  <li>Interpret intent via language model</li>
                  <li>Plan a sequence of actions</li>
                  <li>Navigate obstacles</li>
                  <li>Identify an object using computer vision</li>
                  <li>Manipulate or interact with the object</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}