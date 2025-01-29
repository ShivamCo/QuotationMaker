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
  family: "Poppins-Regular",
  src: "https://fonts.google.com/share?selection.family=Poppins:ital,wght@0,400",
});

const styles = StyleSheet.create({
  page: { backgroundColor: "white" },
  headerSection: { TextAlign: "center", margin: 30 },
  section: { margin: 30, flexDirection: "col", alignItems: "baseline" },
  logo: { width: "10%", height: "auto" },
  textHeading: {
    color: "black",
    fontSize: 40,
    fontWeight: 600,
    textDecoration: "underline",
    textAlign: "center",
  },

  companyName: {
    textAlign: "left",
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    textDecoration: "underline",
    marginTop: 10
  },
});

const PdfCreator = ({ Details }) => {
  useEffect(() => {}, [Details]);

  return (
    <Document title={Details.Title} authour={Details.Author}>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerSection}>
          <Text style={styles.textHeading}>{Details.Title}</Text>
        </View>
        <View style={styles.section}>
          <Image src={`${Details.Logo}`} style={styles.logo} />
          <Text style={styles.companyName}>Company Name</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfCreator;
