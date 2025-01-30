import React, { useEffect, useState } from "react";
import PdfCreator from "./PdfCreator";
import { PDFViewer } from "@react-pdf/renderer";

const CreateQuotationPage = () => {
  const logo = "/logo1.png"; // Make sure this is a correct path for your image
  const [pdfDetails, setPdfDetails] = useState({});

  // Set up the PDF details when the component mounts
  const updatePdfDetails = () => {
    setPdfDetails({
      Title: "Quotation", 
      Logo: logo,
      Author: "Business",
      QuotationNumber: 1234,
      CompanyName: "Company Name",
      Date: new Date().toLocaleDateString(),
      CompanyPhoneNumber: "123-456-7890",
      CompanyEmail: "companyEmail@comapny.com",
      CompanyAddress: "Company Address",
      MakerName: "Maker Name",
      ClientName: "Client Name",
      ClientCompanyName: "Client Company Name",
      ClientPhoneNumber: "098-765-4321",
      ClientEmail: "client@client.com",
      ClientAddress: "Client Address",

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
