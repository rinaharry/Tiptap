import "./styles.css";

import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import MenuBarTipTap from "./MenuBarTiptap";
import { Underline } from "@tiptap/extension-underline";
const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  //@ts-ignore
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
  Underline,
];

const content = `
<h2>Hi there,</h2>
<p>this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:</p>
<ul>
  <li>
    <p><em><u>That’s</u></em> a bullet <em><u>list</u></em> with one …</p>
  </li>
  <li>
    <p>… <u>or two list items.</u></p>
  </li>
</ul>
<p>Isn’t that great? And all of that is editable. But wait, there’s more. <strong><em><u>Let’s</u></em></strong> try a code block:</p>
<pre><code class="language-css">body {
    display: none;
    }</code></pre>
<p>I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.</p>
<blockquote>
  <p>Wow, that’s amazing. Good work, boy! 👏 <br>— Mom</p>
</blockquote>
    `;

const Tiptap = () => {
  return (
    <EditorProvider
      slotBefore={<MenuBarTipTap />}
      extensions={extensions}
      content={content}
    ></EditorProvider>
  );
};

export default Tiptap;
