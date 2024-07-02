import React, { useEffect, useState } from 'react';
import { MarkdownContext } from '../lib/context/MarkdownProvider';
import axios from 'axios';
import Spinner from "./tube-spinner.svg"

export default function MDPreview() {
  const { markdown } = React.useContext(MarkdownContext);
  const [html, setHtml] = useState<any>();
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMsg] = useState(null);
  const convertMarkdown = async () => {
    setLoader(true);
    setErrorMsg(null)
    if (!markdown) {
      setHtml(null);
      setLoader(false);
      return
    }
    try {
      const response = await axios.post('https://markdown-backend-so7f.onrender.com/convert', { markdown });
      setHtml(response.data);
      setLoader(false);
    } catch (error) {
      console.error('Error converting markdown:', error?.message);
      setErrorMsg(error?.message);
      setLoader(false);
    }
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      convertMarkdown()
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [markdown])

  if (loader) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh' }}>
        <img src={Spinner} alt='icon' loading='lazy' height={"100px"} width={"100px"} />
      </div>
    )
  }

  if (errorMessage) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh' }}>
        <h5>Error while fecting : {errorMessage}</h5>
      </div>
    )
  }

  return <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-5" dangerouslySetInnerHTML={{ __html: html }} />
}