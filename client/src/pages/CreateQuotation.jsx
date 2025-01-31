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
      Products: [
        { name: "Product 1", description: "This is a product description", qty: 5, price: 100 },
        { name: "Product 2", description: "This is another product description", qty: 10, price: 200 },
        { name: "Product 3", description: "This is a different product", qty: 2, price: 50 },
        { name: "Product 4", description: "Yet another product", qty: 8, price: 150 },
        { name: "Product 5", description: "This is product number five", qty: 6, price: 120 },
        { name: "Product 6", description: "More product descriptions here", qty: 15, price: 300 },
        { name: "Product 7", description: "Description for product seven", qty: 3, price: 75 },
        { name: "Product 8", description: "A different kind of product", qty: 4, price: 80 },
        { name: "Product 9", description: "Ninth product description", qty: 9, price: 180 },
        { name: "Product 10", description: "Product number ten description", qty: 7, price: 140 },
        { name: "Product 11", description: "Eleventh product in the list", qty: 2, price: 60 },
        { name: "Product 12", description: "This is product twelve", qty: 1, price: 45 },
        { name: "Product 13", description: "A new product description", qty: 12, price: 220 },
        { name: "Product 14", description: "Fourteenth product here", qty: 5, price: 110 },
        { name: "Product 15", description: "Fifteenth product description", qty: 14, price: 280 },
        { name: "Product 16", description: "Sixteenth product details", qty: 11, price: 230 },
        { name: "Product 17", description: "Seventeenth product details", qty: 20, price: 400 },
        { name: "Product 18", description: "Eighteenth product description", qty: 6, price: 150 },
        { name: "Product 19", description: "Nineteenth product details", qty: 9, price: 190 },
        { name: "Product 20", description: "Twentieth product description", qty: 8, price: 160 }
      ]
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
