import React, {Component} from 'react';
import './App.css';
import {Document, Page} from "react-pdf";

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          numPages: null,
          pageNumber: 1
      };
  }
  onDocumentLoad({numPages}) {
      this.setState({numPages});
  }
  render() {
  const {pageNumber, numPages} = this.setState;
      return (
          <div>
              <Document
                  file={{url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'}}
                  onLoadSuccess={this.onDocumentLoad}>
                  <Page pageNumber={pageNumber}/>
              </Document>
              <p>Page {pageNumber} of {numPages}</p>
          </div>
      );
  }
}

export default App;
