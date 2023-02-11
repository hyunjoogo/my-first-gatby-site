import * as React from 'react';
import useSiteMetadata from "./hooks/useSiteMetadata";

const Seo = ({title}) => (
  <title>{title} | {useSiteMetadata().title}</title>
);


export default Seo;
