import logo from './logo.svg';
import './App.css';
import PdfFile from './Component/PDFFile';
import {PDFDownloadLink} from "@react-pdf/renderer"

function App() {
  return (
    <div className="App">
      <PDFDownloadLink document={<PdfFile />} fileName="FORM" >
        {({loading}) =>(loading ?
        <button>loading.....</button> :<button>Download</button>)}
      </PDFDownloadLink>
      
  </div>
  );
}

export default App;
