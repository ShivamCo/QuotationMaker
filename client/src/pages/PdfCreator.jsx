import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import { useEffect, useState } from "react";

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
  page: { backgroundColor: "white" },
  divider: {
    backgroundColor: "black",
    height: 36,
    margin: 14,
    justifyContent: "center",
  },
  section: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: 60,
  },
  bodySection: {
    margin: 20,
    flexDirection: "col",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  logo: { height: "100%", width: "auto", padding: "5" },
  normalText:{fontSize: 12, fontFamily: "Poppins"},
  table: {
    width: '100%',
    margin: 15,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 5,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    padding: 5,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    alignItems: 'center',
    padding: 5,
  },
  cell: {
    fontSize: 10,
    textAlign: 'center',
    padding: 5,
    flexGrow: 1, // Ensures equal width across all columns
    wordBreak: 'break-word',
  },
  columnWidths: {
    siNo: { width: '10%' },
    product: { width: '30%' },
    description: { width: '30%' },
    qty: { width: '10%' },
    price: { width: '20%' },
  },
});

const PdfCreator = ({ Details }) => {
  useEffect(() => {}, [Details]);

  return (
    <Document title={Details.Title} authour={Details.Author}>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View>
            <Image src={`${Details.Logo}`} style={styles.logo} />
          </View>

          <View>
            <Text style={styles.normalText}>
              <Text style={styles.boldNormalText}>Quote No.:</Text>{" "}
              {Details.QuotationNumber}
            </Text>
            <Text style={styles.normalText}>
              <Text style={styles.boldNormalText}>Date:</Text> {Details.Date}
            </Text>
          </View>
        </View>

        <View style={styles.divider}>
          <Text style={styles.headerText}>{Details.Title}</Text>
        </View>

        {/* From  */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.bodySection}>
            <Text style={styles.boldNormalText}>To</Text>
            <Text style={styles.normalText}>{Details.ClientName}</Text>
            <Text style={styles.normalText}>{Details.ClientCompanyName}</Text>
            <Text style={styles.normalText}>
              Phone Number: {Details.ClientPhoneNumber}
            </Text>
            <Text style={styles.normalText}>Email: {Details.ClientEmail}</Text>
            <Text style={styles.normalText}>
              Address: {Details.ClientAddress}
            </Text>
          </View>

          <View style={styles.bodySection}>
            <Text style={styles.boldNormalText}>From</Text>
            <Text style={styles.normalText}>{Details.MakerName}</Text>
            <Text style={styles.normalText}>{Details.CompanyName}</Text>
            <Text style={styles.normalText}>
              Phone Number: {Details.CompanyPhoneNumber}
            </Text>
            <Text style={styles.normalText}>Email: {Details.CompanyEmail}</Text>
            <Text style={styles.normalText}>
              Address: {Details.CompanyAddress}
            </Text>
          </View>
        </View>
        <View style={styles.table}>
        {/* Table Header */}
        <View style={styles.tableHeader}>
          <Text style={[styles.headerText, styles.columnWidths.siNo]}>SI.No.</Text>
          <Text style={[styles.headerText, styles.columnWidths.product]}>Product</Text>
          <Text style={[styles.headerText, styles.columnWidths.description]}>Description</Text>
          <Text style={[styles.headerText, styles.columnWidths.qty]}>Qty</Text>
          <Text style={[styles.headerText, styles.columnWidths.price]}>Price</Text>
        </View>

        {/* Table Rows */}
        {[1, 2, 3].map((index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={[styles.cell, styles.columnWidths.siNo]}>{index}</Text>
            <Text style={[styles.cell, styles.columnWidths.product]}>
              Long product name that wraps correctly
            </Text>
            <Text style={[styles.cell, styles.columnWidths.description]}>
              This is a long product description to check if wrapping works correctly.
            </Text>
            <Text style={[styles.cell, styles.columnWidths.qty]}>10</Text>
            <Text style={[styles.cell, styles.columnWidths.price]}>$100</Text>
          </View>
        ))}
      </View>
      </Page>
    </Document>
  );
};

export default PdfCreator;
