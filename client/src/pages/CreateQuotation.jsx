import React, { useEffect, useState } from "react";
import PdfCreator from "./PdfCreator";
import { PDFViewer } from "@react-pdf/renderer";

const CreateQuotationPage = () => {
  const logo = "/logo.png"; // Make sure this is a correct path for your image
  const [pdfDetails, setPdfDetails] = useState({});

  // Set up the PDF details when the component mounts
  const updatePdfDetails = () => {
    setPdfDetails({
      Title: "Quotation", 
      Logo: logo,
      Author: "Business",
    });
  };

  // Call updatePdfDetails when the component mounts
  useEffect(() => {
    updatePdfDetails();
  }, []);

  return (
    <PDFViewer width="400" height="600">
      <PdfCreator Details={pdfDetails} />
    </PDFViewer>
  );
};

export default CreateQuotationPage;
