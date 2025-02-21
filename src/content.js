import React, { useState, useMemo, useCallback } from 'react';
import "./content.css";
import { SignupForm } from './signup-form';
import { markdown } from './markdown';
import content from "./content.json";
import instagramImages from "./instagram-data.json";

const { events } = content;
export function Content() {

  return (
    <section className="content">
      <h1>Handmade pottery inspired by Hackney Marshes</h1>

      <div className="blocks">
        <SignupForm />
        <TextBlock />
        <InstagramBlocks />
      </div>
    </section>
  );
}

const InstagramBlocks = () => {
  const [maxPosts, setMaxPosts] = useState(Math.min(30, instagramImages.length));
  const posts = useMemo(() => instagramImages.slice(0, maxPosts), [maxPosts]);
  const showMore = useCallback((e) => {
    if (maxPosts < instagramImages.length) {
      e.preventDefault();
      setMaxPosts(Math.min(30 + maxPosts, instagramImages.length));
    }
  }, [maxPosts]);

  return <>
    {posts.map((data) =>
      <InstagramBlock key={data.id} {...data} />)
    }
    <div className="blocks blocks--ig-more">
      <a
        onClick={showMore}
        href="https://www.instagram.com/pylon_ceramics/"
        target="_blank"
        rel="noopener noreferrer"
      >More...</a>
    </div>
  </>;
};

const InstagramBlock = ({ media_url, permalink, caption }) => (
  <a
    href={permalink}
    className="block block--ig" style={{
      backgroundImage: `url(${media_url})`
    }}
    target="_blank"
    rel="noopener noreferrer"
  >{caption}</a>
);

const TextBlock = () => {
  const html = markdown.render(events);
  return <div className="block block--wide block--text">
    <div className="block__scroll-content">
      <span dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </div>
}