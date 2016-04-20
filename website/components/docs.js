/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";

import Overview from "../../docs/overview.md";


const DOCS = {
  overview: Overview
};


export default class Docs extends React.Component {
  render() {
    const {doc} = this.props.params;
    return (
      <div dangerouslySetInnerHTML={{__html: DOCS[doc]}}></div>
    );
  }
}
