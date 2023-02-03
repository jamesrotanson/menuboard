import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = (props) => {
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <ReactQuill value={content} placeholder={props.content} onChange={handleChange} />
  );
};

export default RichTextEditor;
