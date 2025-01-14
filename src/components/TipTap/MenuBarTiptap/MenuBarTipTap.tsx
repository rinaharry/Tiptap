import React from "react";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
const MenuBarTipTap = () => {
  const { editor } = useCurrentEditor();

  // Function to download the JSON file
  const downloadJsonFile = (content: string) => {
    const blob = new Blob([JSON.stringify(content, null, 2)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "html_content.json";
    link.click();
    URL.revokeObjectURL(link.href); // Clean up the URL object
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="control-group">
      <div className="button-group">
        {/* Button to toggle bold formatting */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()} // Chains commands: focuses the editor and toggles bold formatting
          disabled={!editor.can().chain().focus().toggleBold().run()} // Disables the button if the bold command cannot run
          className={editor.isActive("bold") ? "is-active" : ""} // Adds an "is-active" class if the editor is currently in bold mode
        >
          Bold
        </button>
        {/* Button to toggle italic formatting */}
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()} // Chains commands: focuses the editor and toggles italic formatting
          disabled={!editor.can().chain().focus().toggleItalic().run()} // Disables the button if the italic command cannot run
          className={editor.isActive("italic") ? "is-active" : ""} // Adds an "is-active" class if the editor is currently in italic mode
        >
          Italic
        </button>

        {/* Button to toggle Underline formatting */}
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()} // Trigger the toggle function for Underline
          disabled={!editor.can().chain().focus().toggleUnderline().run()} // Disable if the action can't run
          className={editor.isActive("underline") ? "is-active" : ""} // Add "is-active" class if underline is active
        >
          Underline
        </button>

        {/* Button to toggle strike-through formatting */}
        {/* <button
          onClick={() => editor.chain().focus().toggleStrike().run()} // Chains commands: focuses the editor and toggles strike-through formatting
          disabled={!editor.can().chain().focus().toggleStrike().run()} // Disables the button if the strike-through command cannot run
          className={editor.isActive("strike") ? "is-active" : ""} // Adds an "is-active" class if the editor is currently in strike-through mode
        >
          Strike
        </button> */}

        <button
          onClick={() =>
            console.log(
              "editor.getJSON()",
              downloadJsonFile(
                JSON.stringify({ rawHtml: editor.getHTML() }, null, 2)
              )
            )
          }
          // disabled={!editor.can().chain().focus().redo().run()}
        >
          Exporter
        </button>
      </div>
    </div>
  );
};

export default MenuBarTipTap;
