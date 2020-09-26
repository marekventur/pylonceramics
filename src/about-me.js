import React from 'react';
import "./content.css";
import { Loader } from './loader';
import { useTextContent } from './use-text-content';
import { markdown } from './markdown';

export function AboutMe() {
  return (
    <section className="content content--about-me">
      <AboutMeContent />
    </section>
  );
};

function AboutMeContent() {
  const data = useTextContent();
  if (!data) {
    return <Loader />;
  }

  if (data instanceof Error || data.length < 0 || data[0].length < 0) {
    return (<div className="error">
      Sorry, we couldn't load this section. Please try again later!
    </div>);
  }

  const html = markdown.render(data[1][0]);

  return <>
    <div className="picture" />
    <div className="text-content" dangerouslySetInnerHTML={{__html: html}} />
  </>;
}