import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import './MarksheetPdf.css'
import LoadingSpinner from "../assists/LoadingSpinner";
import { Document,Page,pdfjs } from 'react-pdf'
 const MarksheetPdf=(props)=> {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    const [note,setNotes]=useState([])
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading,setIsLoading]=useState(true);
    const[data,setData]=useState('')
    let txt='';
  


    console.log(props.data)

       useEffect(()=>{
          
         if(props.data)
        {
            const bytes=(new Uint8Array(props.data.data))
        // const str=String.fromCharCode(...arr);
    
         var binaryText = '';
    
            for (var index = 0; index < bytes.byteLength; index++) {
                binaryText += String.fromCharCode( bytes[index] );
             }
    
             console.log("byt",bytes)
        //   Base64.encode(binaryText) should not include
            let dt=btoa(binaryText)
         txt="data:application/jpeg;base64,"+ dt;
             setData(txt)
             setIsLoading(false)
           
        // console.log(txt)
        }
            
       },[props.data])
      
    

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
 
      const handleDownload=()=>{
        var blob = new Blob([new Uint8Array(props.data.data)], {type: "application/jpeg"});
        var objectUrl = URL.createObjectURL(blob);
        window.open(objectUrl);
      }
    if(!isLoading)
    return (
       
        <div id="ResumeContainer" >
          
              <Document
               className={"PDFDocument"}
        file={data}
        onLoadSuccess={onDocumentLoadSuccess}
        
      >
         <br></br>
        
        <Page pageNumber={pageNumber} className={"PDFPage PDFPageOne"}   />
      </Document>

      <br></br>
        
        
       <button onClick={handleDownload}>Download</button>
       </div>

    )
    else if(props.load)
    return(<LoadingSpinner/>)
    else
    return(<h6>Choose..</h6>)
}
export default MarksheetPdf