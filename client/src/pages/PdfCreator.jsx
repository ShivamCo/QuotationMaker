import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import { useEffect } from "react";

// Register the font
Font.register({
  family: "Poppins",
  fonts: [
    {
      src: "http://fonts.gstatic.com/s/poppins/v1/TDTjCH39JjVycIF24TlO-Q.ttf",
      fontWeight: 400,
      fontStyle: "normal",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    paddingBottom: 100, // Ensure enough space for footer
    paddingHorizontal: 20,
    flexDirection: "column",
    justifyContent: "flex-start", // Aligns the content at the top
  },
  section: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: { height: "100%", width: "auto", padding: 5 },
  normalText: { fontSize: 12, fontFamily: "Poppins" },
  table: {
    marginTop: 10,
    flexGrow: 1, // Allows table to expand while keeping footer at the bottom
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "black",
    padding: 5,
  },
  headerText: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
    padding: 5,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    padding: 5,
    alignItems: "center",
    flexWrap: "wrap",
  },
  cell: {
    fontSize: 10,
    textAlign: "center",
    padding: 5,
    flexGrow: 1,
    wordBreak: "break-word",
  },
  columnWidths: {
    siNo: { width: "8%" },
    product: { width: "25%" },
    description: { width: "25%" },
    qty: { width: "10%" },
    price: { width: "15%" },
    unitPrice: { width: "17%" },
  },
  termsBox: {
    marginTop: 20,
    border: "1 solid #000",
    padding: 10,
    fontSize: 10,
    textAlign: "center",
    marginBottom: 20, // Ensures there is enough space below it
  },
  footer: {
    padding: 5,
    textAlign: "center",
    fontSize: 10,
    borderTop: "1 solid #ccc",
  },
  footerContainer: {
    position: "relative",
    bottom: 0,
    width: "100%",
    marginTop: "auto", // Ensures the footer is pushed to the bottom of the page
  },
  totalsSection: {
    marginTop: 20,
    alignContent: "flex-start",
    alignSelf: "flex-end",
    width: "50%",
    borderTop: "1 solid #000",
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalText: {
    fontSize: 12,
    fontFamily: "Poppins",
  },
  totalAmount: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
});

const PdfCreator = ({ Details }) => {
  useEffect(() => {}, [Details]);

  // Calculations for subtotal, discount, tax, and total
  const calculateSubtotal = () => {
    return Details.Products?.reduce((total, product) => total + product.qty * product.price, 0);
  };

  const calculateDiscount = (subtotal) => {
    // Example: 10% discount
    return subtotal * 0.1;
  };

  const calculateTax = (subtotalAfterDiscount) => {
    // Example: 5% tax
    return subtotalAfterDiscount * 0.05;
  };

  const calculateTotal = (subtotal, discount, tax) => {
    return subtotal - discount + tax;
  };

  const subtotal = calculateSubtotal();
  const discount = calculateDiscount(subtotal);
  const subtotalAfterDiscount = subtotal - discount;
  const tax = calculateTax(subtotalAfterDiscount);
  const total = calculateTotal(subtotal, discount, tax);

  return (
    <Document title={Details.Title} author={Details.Author}>
      <Page size="A4" style={styles.page} wrap>
        {/* HEADER */}
        <View style={styles.section}>
          <Image src={Details.Logo} style={styles.logo} />
          <View>
            <Text style={styles.normalText}>Quote No.: {Details.QuotationNumber}</Text>
            <Text style={styles.normalText}>Date: {Details.Date}</Text>
          </View>
        </View>

        {/* Divider */}
        <View style={[styles.tableHeader, { justifyContent: "center" }]}>
          <Text style={styles.headerText}>{Details.Title}</Text>
        </View>

        {/* From & To Sections */}
        <View style={styles.section}>
          <View>
            <Text style={styles.normalText}>To:</Text>
            <Text style={styles.normalText}>{Details.ClientName}</Text>
            <Text style={styles.normalText}>{Details.ClientCompanyName}</Text>
            <Text style={styles.normalText}>Phone: {Details.ClientPhoneNumber}</Text>
            <Text style={styles.normalText}>Email: {Details.ClientEmail}</Text>
            <Text style={styles.normalText}>Address: {Details.ClientAddress}</Text>
          </View>

          <View>
            <Text style={styles.normalText}>From:</Text>
            <Text style={styles.normalText}>{Details.MakerName}</Text>
            <Text style={styles.normalText}>{Details.CompanyName}</Text>
            <Text style={styles.normalText}>Phone: {Details.CompanyPhoneNumber}</Text>
            <Text style={styles.normalText}>Email: {Details.CompanyEmail}</Text>
            <Text style={styles.normalText}>Address: {Details.CompanyAddress}</Text>
          </View>
        </View>

        {/* Table */}
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={[styles.headerText, styles.columnWidths.siNo]}>SI.No.</Text>
            <Text style={[styles.headerText, styles.columnWidths.product]}>Product</Text>
            <Text style={[styles.headerText, styles.columnWidths.description]}>Description</Text>
            <Text style={[styles.headerText, styles.columnWidths.qty]}>Qty</Text>
            <Text style={[styles.headerText, styles.columnWidths.price]}>Price</Text>
            <Text style={[styles.headerText, styles.columnWidths.unitPrice]}>Unit Price</Text>
          </View>

          {/* Table Rows */}
          {Details.Products?.map((product, index) => (
            <View key={index} style={styles.tableRow} wrap>
              <Text style={[styles.cell, styles.columnWidths.siNo]}>{index + 1}</Text>
              <Text style={[styles.cell, styles.columnWidths.product]}>{product.name}</Text>
              <Text style={[styles.cell, styles.columnWidths.description]}>{product.description}</Text>
              <Text style={[styles.cell, styles.columnWidths.qty]}>{product.qty}</Text>
              <Text style={[styles.cell, styles.columnWidths.price]}>${product.price}</Text>
              <Text style={[styles.cell, styles.columnWidths.unitPrice]}>${(product.price / product.qty)?.toFixed(2)}</Text>
            </View>
          ))}
        </View>

        {/* Totals Section */}
        <View style={styles.totalsSection}>
          <Text style={styles.totalText}>Subtotal:</Text>
          <Text style={styles.totalAmount}>${subtotal?.toFixed(2)}</Text>
        </View>
        <View style={styles.totalsSection}>
          <Text style={styles.totalText}>Discount (10%):</Text>
          <Text style={styles.totalAmount}>-${discount?.toFixed(2)}</Text>
        </View>
        <View style={styles.totalsSection}>
          <Text style={styles.totalText}>Tax (5%):</Text>
          <Text style={styles.totalAmount}>+${tax?.toFixed(2)}</Text>
        </View>
        <View style={styles.totalsSection}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalAmount}>${total?.toFixed(2)}</Text>
        </View>

        {/* Terms & Conditions */}
        <View style={styles.termsBox}>
          <Text>Terms & Conditions: This document is confidential and intended only for the recipient.</Text>
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <View style={styles.footer}>
            <Text>Page Footer - © 2025 My Company</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfCreator;
