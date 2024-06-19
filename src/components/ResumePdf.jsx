import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 5,
    textDecoration: 'underline',
  },
  text: {
    marginBottom: 3,
  },
  table: {
    display: "table",
    width: "auto",
    margin: 10,
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  tableRow: {
    flexDirection: "row"
  },
  tableColHeader: {
    width: "25%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderBottomColor: "#000",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: "#f0f0f0"
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 12,
    fontWeight: 'bold'
  },
  tableCell: {
    margin: 5,
    fontSize: 10
  }
});

const ResumePdf = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>{formData.personalDetails.name}</Text>
        <Text style={styles.text}>Email: {formData.personalDetails.email}</Text>
        <Text style={styles.text}>Phone: {formData.personalDetails.phone}</Text>
        <Text style={styles.text}>Address: {formData.personalDetails.address}</Text>
        <Text style={styles.text}>Date of Birth: {formData.personalDetails.dob}</Text>
        <Text style={styles.text}>Marital Status: {formData.personalDetails.maritalStatus}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Education</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Institution</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Major</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Start Date</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>End Date</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{formData.educationDetail.collegeName}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{formData.educationDetail.collegeMajor}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{formData.educationDetail.collegeStartDate}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{formData.educationDetail.collegeEndDate}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{formData.educationDetail.highSchoolName}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{formData.educationDetail.highSchoolMajor}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{formData.educationDetail.highSchoolStartDate}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{formData.educationDetail.highSchoolEndDate}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{formData.educationDetail.secondarySchoolName}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{formData.educationDetail.secondarySchoolMajor}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{formData.educationDetail.secondarySchoolStartDate}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{formData.educationDetail.secondarySchoolEndDate}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Skills</Text>
        <Text style={styles.text}>{formData.extraDetails.skills}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Career Objective</Text>
        <Text style={styles.text}>{formData.extraDetails.careerObjective}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Project</Text>
        <Text style={styles.text}>Title: {formData.projectDetails.projectTitle}</Text>
        <Text style={styles.text}>{formData.projectDetails.description}</Text>
      </View>
    </Page>
  </Document>
);

const ResumePdfDownloadLink = ({ formData }) => (
  <PDFDownloadLink document={<ResumePdf formData={formData} />} fileName="resume.pdf">
    {({ loading }) => (loading ? 'Loading document...' : 'Download Resume')}
  </PDFDownloadLink>
);

export default ResumePdfDownloadLink;
