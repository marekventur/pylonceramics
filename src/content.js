import React from 'react';
import "./content.css";
import { useInstagram } from './use-instagram';
import { Loader } from './loader';
import { useTextContent } from './use-text-content';
import { SignupForm } from './signup-form';
import MarkdownIt from "markdown-it";

const markdown = new MarkdownIt("default", {
  breaks:       true,        // Convert '\n' in paragraphs into <br>
  linkify:      true,        // Autoconvert URL-like text to links
  typographer:  true
});

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
  const posts = useInstagram();

  if (!posts) {
    return <Loader />;
  }

  if (posts instanceof Error) {
    return (<div className="error">
      Sorry, we couldn't load the images. Please try again later!
    </div>);
  }

  return <>
    {posts.map((data) => 
      <InstagramBlock key={data.id} {...data} />)
    }
    <div className="blocks blocks--ig-more"> 
      <a 
        href="https://www.instagram.com/pylon_ceramics/"
        target="_blank"
        rel="noopener noreferrer"
      >More...</a>
    </div>
  </>;
};

const InstagramBlock = ({display_url, shortcode, ...rest}) => {
  if (!display_url) {
    return null;
  }
  console.log(rest);
  let caption = "";
  try {

  } catch (e) {}

  return <a 
    href={`https://www.instagram.com/p/${shortcode}/`} 
    className="block block--ig" style={{
      backgroundImage: `url(${display_url})` 
    }}
    target="_blank"
    rel="noopener noreferrer"
  >{caption}</a>
};

const TextBlock = () => {
  const data = useTextContent();
  if (!data) {
    return <div className="block block--wide block--loading">
      <Loader />
    </div>;
  }

  if (data instanceof Error || data.length < 0 || data[0].length < 0) {
    return (<div className="block block--wide">
      <div className="error">
        Sorry, we couldn't load this section. Please try again later!
      </div>
    </div>);
  }

  const html = markdown.render(data[0][0]);

  return <div className="block block--wide block--text">
  <div className="block__scroll-content">
    <span dangerouslySetInnerHTML={{__html: html}} />
  </div>
</div>
}