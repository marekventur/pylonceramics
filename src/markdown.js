import MarkdownIt from "markdown-it";

export const markdown = new MarkdownIt("default", {
  breaks:       true,        // Convert '\n' in paragraphs into <br>
  linkify:      true,        // Autoconvert URL-like text to links
  typographer:  true
});