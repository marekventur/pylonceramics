import React from 'react';
import "./content.css";
import { markdown } from './markdown';
import content from './content.json';

const { aboutMe } = content;

export function AboutMe() {
  return (
    <section className="content content--about-me">
      <AboutMeContent />
    </section>
  );
};

function AboutMeContent() {
  const html = markdown.render(aboutMe);
  return <>
    <div className="picture" />
    <div className="text-content" dangerouslySetInnerHTML={{__html: html}} />
  </>;
}