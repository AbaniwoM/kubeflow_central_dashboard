import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Loader} from './Loader';

export interface IContentsProps {
}

export function Contents (props: IContentsProps) {
  const url = "https://kubenow.free.beeceptor.com/";
  const [content, setContent] = useState({
    loading: false,
    data: null,
    error: false
  })

  useEffect(() => {
    setContent({
      loading: true,
      data: null,
      error: false
    })
    axios.get(url).then((response) => {
      setContent({
        loading: false,
        data: response.data,
        error: false
      })
    });
  }, [url]);

  if(content.loading){
    return <div><Loader /></div>;
  }

  return (
    <div>{content.data}</div>
  )
  
}
