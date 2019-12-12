import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ReportsDataService {
  // private reportsData: any = [
  //   {
  //     name: "Luke Skywalker",
  //     count: "001",
  //     commitment: "$323,000.00",
  //     balance: "$434,990.00",
  //     comments: "comments example"
  //   },
  //   {
  //     name: "Dart Vader",
  //     count: "002",
  //     commitment: "$1,000.00",
  //     balance: "$434,990.00",
  //     comments: "comments example"
  //   },
  //   {
  //     name: "Han Solo",
  //     count: "003",
  //     commitment: "$4,000.00",
  //     balance: "$434,990.00",
  //     comments: "comments example"
  //   }
  // ];

  private reportsData: any = [
    {
      Relationshipid: "1343400",
      relationshipName: "Jaime , Mall",
      strategy: "Retain",
      status: "Deteriorating",
      covenantCompliance: "Not Applicable",
      covenantComplianceComment: "",
      finReportingCurrent: "Not Applicable",
      finReportingComment: "",
      CollateralComments:
        "1st position secured by primary residence which was appraised for $10MM in 12/2011 and current zillow is $11M.",
      PropertyTax: "Current",
      ReasonforAdverseClassification: "4/2019: Extended payment delinquency.",
      LineofBusiness: "",
      CurrentComments:
        "Update on 12/1/2019: 2nd loan has paid off and the property on 123 School Ave is set at a sales price of $9MM.",
      ActionPlan: "Follow up on the sale of the first loans property",
      Triggers:
        "None, with the interest reserve, borrower will not be delinquent. Need to monitor for loan payoff.",
      GradeRecommendation:
        "Recommending 0% reserves as LTV is roughly 50% due to current listing price of just under $12MM.",
      PreviousComments: [
        {
          id: "123123123",
          date: "6/30/2019",
          Comments:
            "Divorce situation and loan was placed on 3 months I/O to provide sufficient time to sell property."
        },
        {
          id: "123123124",
          date: "7/30/2019",
          Comments:
            "No changes at this time. Working with the client to determine next course of action."
        },
        {
          id: "123123124",
          date: "7/30/2019",
          Comments:
            "No changes at this time. Working with the client to determine next course of action."
        },
        {
          id: "123123124",
          date: "7/30/2019",
          Comments:
            "No changes at this time. Working with the client to determine next course of action."
        }
      ],
      loans: [
        {
          Borrower_Name: "Sergio,al-Gad",
          Account_NBR: "7721194",
          Balance_Sheet_Category: "Consumer",
          Current_Balance: "158043.9801",
          Commitment_AMT: "1966046.031",
          Risk_Rating: "8",
          Interest_Rate: "0.122886945",
          Commercial_Consumer: "Consumer",
          Collateral_Type: "Residential",
          Collateral_Address: "2339 BLAKE ST ",
          Collateral_City: "BERKELEY",
          Collateral_State: "CA",
          Collateral_Zip: "94704",
          Collateral_Latitude: "37.8641268",
          Collateral_Longitude: "-122.261146",
          Lein: "1",
          Orig_Appraisal_Date: "40918",
          Orig_Appraisal_Value: "884286.4883",
          Loan_Type: "ODLOC",
          Loan_Officer: "Albrow Brooke",
          Loan_Officer_Region: "New York",
          Origination_Date: "40939",
          Maturity_Date: "44178",
          Avg_12_Month_Dep: "142239.5821",
          Current_Dep: "158043.9801",
          Past_Due: "No",
          Orig_LTV: "0.882211393",
          Current_LTV: "0.169146095"
        },
        {
          RelationshipID: "328",
          Borrower_Name: "Perla,Meeker",
          Account_NBR: "1370862",
          Balance_Sheet_Category: "Commercial",
          Current_Balance: "430441.0783",
          Commitment_AMT: "2588157.397",
          Risk_Rating: "4",
          Interest_Rate: "0.047819461",
          Commercial_Consumer: "Commercial",
          Collateral_Type: "Residential",
          Collateral_Address: "18720 BUREN PL ",
          Collateral_City: "CASTRO VALLEY",
          Collateral_State: "CA",
          Collateral_Zip: "94552",
          Collateral_Latitude: "37.721609",
          Collateral_Longitude: "-122.0282593",
          Lein: "2",
          Orig_Appraisal_Date: "37786",
          Orig_Appraisal_Value: "1197045.22",
          Loan_Type: "CRE",
          Loan_Officer: "Karman Rion",
          Loan_Officer_Region: "San Jose",
          Origination_Date: "37807",
          Maturity_Date: "45726",
          Avg_12_Month_Dep: "344352.8626",
          Current_Dep: "430441.0783",
          Past_Due: "No",
          Orig_LTV: "0.799690215",
          Current_LTV: "0.499763729"
        },
        {
          Borrower_Name: "Sergio,al-Gad",
          Account_NBR: "7721194",
          Balance_Sheet_Category: "Consumer",
          Current_Balance: "158043.9801",
          Commitment_AMT: "1966046.031",
          Risk_Rating: "8",
          Interest_Rate: "0.122886945",
          Commercial_Consumer: "Consumer",
          Collateral_Type: "Residential",
          Collateral_Address: "2339 BLAKE ST ",
          Collateral_City: "BERKELEY",
          Collateral_State: "CA",
          Collateral_Zip: "94704",
          Collateral_Latitude: "37.8641268",
          Collateral_Longitude: "-122.261146",
          Lein: "1",
          Orig_Appraisal_Date: "40918",
          Orig_Appraisal_Value: "884286.4883",
          Loan_Type: "ODLOC",
          Loan_Officer: "Albrow Brooke",
          Loan_Officer_Region: "New York",
          Origination_Date: "40939",
          Maturity_Date: "44178",
          Avg_12_Month_Dep: "142239.5821",
          Current_Dep: "158043.9801",
          Past_Due: "No",
          Orig_LTV: "0.882211393",
          Current_LTV: "0.169146095"
        },
        {
          Borrower_Name: "Sergio,al-Gad",
          Account_NBR: "7721194",
          Balance_Sheet_Category: "Consumer",
          Current_Balance: "158043.9801",
          Commitment_AMT: "1966046.031",
          Risk_Rating: "8",
          Interest_Rate: "0.122886945",
          Commercial_Consumer: "Consumer",
          Collateral_Type: "Residential",
          Collateral_Address: "2339 BLAKE ST ",
          Collateral_City: "BERKELEY",
          Collateral_State: "CA",
          Collateral_Zip: "94704",
          Collateral_Latitude: "37.8641268",
          Collateral_Longitude: "-122.261146",
          Lein: "1",
          Orig_Appraisal_Date: "40918",
          Orig_Appraisal_Value: "884286.4883",
          Loan_Type: "ODLOC",
          Loan_Officer: "Albrow Brooke",
          Loan_Officer_Region: "New York",
          Origination_Date: "40939",
          Maturity_Date: "44178",
          Avg_12_Month_Dep: "142239.5821",
          Current_Dep: "158043.9801",
          Past_Due: "No",
          Orig_LTV: "0.882211393",
          Current_LTV: "0.169146095"
        }
      ]
    },
    {
      Relationshipid: "93424",
      relationshipName: "Sai ,James",
      strategy: "Retain",
      status: "Deteriorating",
      covenantCompliance: "Not Applicable",
      covenantComplianceComment: "",
      finReportingCurrent: "Not Applicable",
      finReportingComment: "",
      CollateralComments:
        "1st position secured by primary residence which was appraised for $10MM in 12/2011 and current zillow is $11M.",
      PropertyTax: "Current",
      ReasonforAdverseClassification: "4/2019: Extended payment delinquency.",
      LineofBusiness: "",
      CurrentComments:
        "Update on 12/1/2019: 2nd loan has paid off and the property on 123 School Ave is set at a sales price of $9MM.",
      ActionPlan: "Follow up on the sale of the first loans property",
      Triggers:
        "None, with the interest reserve, borrower will not be delinquent. Need to monitor for loan payoff.",
      GradeRecommendation:
        "Recommending 0% reserves as LTV is roughly 50% due to current listing price of just under $12MM.",
      PreviousComments: [
        {
          id: "123123123",
          date: "6/30/2019",
          Comments:
            "Divorce situation and loan was placed on 3 months I/O to provide sufficient time to sell property."
        },
        {
          id: "123123124",
          date: "7/30/2019",
          Comments:
            "No changes at this time. Working with the client to determine next course of action."
        }
      ],
      loans: [
        {
          Borrower_Name: "Sergio,al-Gad",
          Account_NBR: "7721194",
          Balance_Sheet_Category: "Consumer",
          Current_Balance: "158043.9801",
          Commitment_AMT: "1966046.031",
          Risk_Rating: "8",
          Interest_Rate: "0.122886945",
          Commercial_Consumer: "Consumer",
          Collateral_Type: "Residential",
          Collateral_Address: "2339 BLAKE ST ",
          Collateral_City: "BERKELEY",
          Collateral_State: "CA",
          Collateral_Zip: "94704",
          Collateral_Latitude: "37.8641268",
          Collateral_Longitude: "-122.261146",
          Lein: "1",
          Orig_Appraisal_Date: "40918",
          Orig_Appraisal_Value: "884286.4883",
          Loan_Type: "ODLOC",
          Loan_Officer: "Albrow Brooke",
          Loan_Officer_Region: "New York",
          Origination_Date: "40939",
          Maturity_Date: "44178",
          Avg_12_Month_Dep: "142239.5821",
          Current_Dep: "158043.9801",
          Past_Due: "No",
          Orig_LTV: "0.882211393",
          Current_LTV: "0.169146095"
        },
        {
          RelationshipID: "328",
          Borrower_Name: "Perla,Meeker",
          Account_NBR: "1370862",
          Balance_Sheet_Category: "Commercial",
          Current_Balance: "430441.0783",
          Commitment_AMT: "2588157.397",
          Risk_Rating: "4",
          Interest_Rate: "0.047819461",
          Commercial_Consumer: "Commercial",
          Collateral_Type: "Residential",
          Collateral_Address: "18720 BUREN PL ",
          Collateral_City: "CASTRO VALLEY",
          Collateral_State: "CA",
          Collateral_Zip: "94552",
          Collateral_Latitude: "37.721609",
          Collateral_Longitude: "-122.0282593",
          Lein: "2",
          Orig_Appraisal_Date: "37786",
          Orig_Appraisal_Value: "1197045.22",
          Loan_Type: "CRE",
          Loan_Officer: "Karman Rion",
          Loan_Officer_Region: "San Jose",
          Origination_Date: "37807",
          Maturity_Date: "45726",
          Avg_12_Month_Dep: "344352.8626",
          Current_Dep: "430441.0783",
          Past_Due: "No",
          Orig_LTV: "0.799690215",
          Current_LTV: "0.499763729"
        }
      ]
    },
    {
      Relationshipid: "3453453",
      relationshipName: "Carl´s , Johns",
      strategy: "Retain",
      status: "Deteriorating",
      covenantCompliance: "Not Applicable",
      covenantComplianceComment: "",
      finReportingCurrent: "Not Applicable",
      finReportingComment: "",
      CollateralComments:
        "1st position secured by primary residence which was appraised for $10MM in 12/2011 and current zillow is $11M.",
      PropertyTax: "Current",
      ReasonforAdverseClassification: "4/2019: Extended payment delinquency.",
      LineofBusiness: "",
      CurrentComments:
        "Update on 12/1/2019: 2nd loan has paid off and the property on 123 School Ave is set at a sales price of $9MM.",
      ActionPlan: "Follow up on the sale of the first loans property",
      Triggers:
        "None, with the interest reserve, borrower will not be delinquent. Need to monitor for loan payoff.",
      GradeRecommendation:
        "Recommending 0% reserves as LTV is roughly 50% due to current listing price of just under $12MM.",
      PreviousComments: [
        {
          id: "123123123",
          date: "6/30/2019",
          Comments:
            "Divorce situation and loan was placed on 3 months I/O to provide sufficient time to sell property."
        },
        {
          id: "123123124",
          date: "7/30/2019",
          Comments:
            "No changes at this time. Working with the client to determine next course of action."
        },
        {
          id: "123123123",
          date: "6/30/2019",
          Comments:
            "Divorce situation and loan was placed on 3 months I/O to provide sufficient time to sell property."
        },
        {
          id: "123123124",
          date: "7/30/2019",
          Comments:
            "No changes at this time. Working with the client to determine next course of action."
        },
        {
          id: "123123123",
          date: "6/30/2019",
          Comments:
            "Divorce situation and loan was placed on 3 months I/O to provide sufficient time to sell property."
        },
        {
          id: "123123124",
          date: "7/30/2019",
          Comments:
            "No changes at this time. Working with the client to determine next course of action."
        }
      ],
      loans: [
        {
          Borrower_Name: "Sergio,al-Gad",
          Account_NBR: "7721194",
          Balance_Sheet_Category: "Consumer",
          Current_Balance: "158043.9801",
          Commitment_AMT: "1966046.031",
          Risk_Rating: "8",
          Interest_Rate: "0.122886945",
          Commercial_Consumer: "Consumer",
          Collateral_Type: "Residential",
          Collateral_Address: "2339 BLAKE ST ",
          Collateral_City: "BERKELEY",
          Collateral_State: "CA",
          Collateral_Zip: "94704",
          Collateral_Latitude: "37.8641268",
          Collateral_Longitude: "-122.261146",
          Lein: "1",
          Orig_Appraisal_Date: "40918",
          Orig_Appraisal_Value: "884286.4883",
          Loan_Type: "ODLOC",
          Loan_Officer: "Albrow Brooke",
          Loan_Officer_Region: "New York",
          Origination_Date: "40939",
          Maturity_Date: "44178",
          Avg_12_Month_Dep: "142239.5821",
          Current_Dep: "158043.9801",
          Past_Due: "No",
          Orig_LTV: "0.882211393",
          Current_LTV: "0.169146095"
        },
        {
          RelationshipID: "328",
          Borrower_Name: "Perla,Meeker",
          Account_NBR: "1370862",
          Balance_Sheet_Category: "Commercial",
          Current_Balance: "430441.0783",
          Commitment_AMT: "2588157.397",
          Risk_Rating: "4",
          Interest_Rate: "0.047819461",
          Commercial_Consumer: "Commercial",
          Collateral_Type: "Residential",
          Collateral_Address: "18720 BUREN PL ",
          Collateral_City: "CASTRO VALLEY",
          Collateral_State: "CA",
          Collateral_Zip: "94552",
          Collateral_Latitude: "37.721609",
          Collateral_Longitude: "-122.0282593",
          Lein: "2",
          Orig_Appraisal_Date: "37786",
          Orig_Appraisal_Value: "1197045.22",
          Loan_Type: "CRE",
          Loan_Officer: "Karman Rion",
          Loan_Officer_Region: "San Jose",
          Origination_Date: "37807",
          Maturity_Date: "45726",
          Avg_12_Month_Dep: "344352.8626",
          Current_Dep: "430441.0783",
          Past_Due: "No",
          Orig_LTV: "0.799690215",
          Current_LTV: "0.499763729"
        },
        {
          Borrower_Name: "Sergio,al-Gad",
          Account_NBR: "7721194",
          Balance_Sheet_Category: "Consumer",
          Current_Balance: "158043.9801",
          Commitment_AMT: "1966046.031",
          Risk_Rating: "8",
          Interest_Rate: "0.122886945",
          Commercial_Consumer: "Consumer",
          Collateral_Type: "Residential",
          Collateral_Address: "2339 BLAKE ST ",
          Collateral_City: "BERKELEY",
          Collateral_State: "CA",
          Collateral_Zip: "94704",
          Collateral_Latitude: "37.8641268",
          Collateral_Longitude: "-122.261146",
          Lein: "1",
          Orig_Appraisal_Date: "40918",
          Orig_Appraisal_Value: "884286.4883",
          Loan_Type: "ODLOC",
          Loan_Officer: "Albrow Brooke",
          Loan_Officer_Region: "New York",
          Origination_Date: "40939",
          Maturity_Date: "44178",
          Avg_12_Month_Dep: "142239.5821",
          Current_Dep: "158043.9801",
          Past_Due: "No",
          Orig_LTV: "0.882211393",
          Current_LTV: "0.169146095"
        },
        {
          Borrower_Name: "Sergio,al-Gad",
          Account_NBR: "7721194",
          Balance_Sheet_Category: "Consumer",
          Current_Balance: "158043.9801",
          Commitment_AMT: "1966046.031",
          Risk_Rating: "8",
          Interest_Rate: "0.122886945",
          Commercial_Consumer: "Consumer",
          Collateral_Type: "Residential",
          Collateral_Address: "2339 BLAKE ST ",
          Collateral_City: "BERKELEY",
          Collateral_State: "CA",
          Collateral_Zip: "94704",
          Collateral_Latitude: "37.8641268",
          Collateral_Longitude: "-122.261146",
          Lein: "1",
          Orig_Appraisal_Date: "40918",
          Orig_Appraisal_Value: "884286.4883",
          Loan_Type: "ODLOC",
          Loan_Officer: "Albrow Brooke",
          Loan_Officer_Region: "New York",
          Origination_Date: "40939",
          Maturity_Date: "44178",
          Avg_12_Month_Dep: "142239.5821",
          Current_Dep: "158043.9801",
          Past_Due: "No",
          Orig_LTV: "0.882211393",
          Current_LTV: "0.169146095"
        }
      ]
    },
    {
      Relationshipid: "3424234",
      relationshipName: "Norma ,al-Gad",
      strategy: "Retain",
      status: "Deteriorating",
      covenantCompliance: "Not Applicable",
      covenantComplianceComment: "",
      finReportingCurrent: "Not Applicable",
      finReportingComment: "",
      CollateralComments:
        "1st position secured by primary residence which was appraised for $10MM in 12/2011 and current zillow is $11M.",
      PropertyTax: "Current",
      ReasonforAdverseClassification: "4/2019: Extended payment delinquency.",
      LineofBusiness: "",
      CurrentComments:
        "Update on 12/1/2019: 2nd loan has paid off and the property on 123 School Ave is set at a sales price of $9MM.",
      ActionPlan: "Follow up on the sale of the first loans property",
      Triggers:
        "None, with the interest reserve, borrower will not be delinquent. Need to monitor for loan payoff.",
      GradeRecommendation:
        "Recommending 0% reserves as LTV is roughly 50% due to current listing price of just under $12MM.",
      PreviousComments: [
        {
          id: "123123123",
          date: "6/30/2019",
          Comments:
            "Divorce situation and loan was placed on 3 months I/O to provide sufficient time to sell property."
        },
        {
          id: "123123124",
          date: "7/30/2019",
          Comments:
            "No changes at this time. Working with the client to determine next course of action."
        },
        {
          id: "123123123",
          date: "6/30/2019",
          Comments:
            "Divorce situation and loan was placed on 3 months I/O to provide sufficient time to sell property."
        },
        {
          id: "123123124",
          date: "7/30/2019",
          Comments:
            "No changes at this time. Working with the client to determine next course of action."
        }
      ],
      loans: [
        {
          Borrower_Name: "Sergio,al-Gad",
          Account_NBR: "7721194",
          Balance_Sheet_Category: "Consumer",
          Current_Balance: "158043.9801",
          Commitment_AMT: "1966046.031",
          Risk_Rating: "8",
          Interest_Rate: "0.122886945",
          Commercial_Consumer: "Consumer",
          Collateral_Type: "Residential",
          Collateral_Address: "2339 BLAKE ST ",
          Collateral_City: "BERKELEY",
          Collateral_State: "CA",
          Collateral_Zip: "94704",
          Collateral_Latitude: "37.8641268",
          Collateral_Longitude: "-122.261146",
          Lein: "1",
          Orig_Appraisal_Date: "40918",
          Orig_Appraisal_Value: "884286.4883",
          Loan_Type: "ODLOC",
          Loan_Officer: "Albrow Brooke",
          Loan_Officer_Region: "New York",
          Origination_Date: "40939",
          Maturity_Date: "44178",
          Avg_12_Month_Dep: "142239.5821",
          Current_Dep: "158043.9801",
          Past_Due: "No",
          Orig_LTV: "0.882211393",
          Current_LTV: "0.169146095"
        },
        {
          Borrower_Name: "Sergio,al-Gad",
          Account_NBR: "7721194",
          Balance_Sheet_Category: "Consumer",
          Current_Balance: "158043.9801",
          Commitment_AMT: "1966046.031",
          Risk_Rating: "8",
          Interest_Rate: "0.122886945",
          Commercial_Consumer: "Consumer",
          Collateral_Type: "Residential",
          Collateral_Address: "2339 BLAKE ST ",
          Collateral_City: "BERKELEY",
          Collateral_State: "CA",
          Collateral_Zip: "94704",
          Collateral_Latitude: "37.8641268",
          Collateral_Longitude: "-122.261146",
          Lein: "1",
          Orig_Appraisal_Date: "40918",
          Orig_Appraisal_Value: "884286.4883",
          Loan_Type: "ODLOC",
          Loan_Officer: "Albrow Brooke",
          Loan_Officer_Region: "New York",
          Origination_Date: "40939",
          Maturity_Date: "44178",
          Avg_12_Month_Dep: "142239.5821",
          Current_Dep: "158043.9801",
          Past_Due: "No",
          Orig_LTV: "0.882211393",
          Current_LTV: "0.169146095"
        },
        {
          Borrower_Name: "Sergio,al-Gad",
          Account_NBR: "7721194",
          Balance_Sheet_Category: "Consumer",
          Current_Balance: "158043.9801",
          Commitment_AMT: "1966046.031",
          Risk_Rating: "8",
          Interest_Rate: "0.122886945",
          Commercial_Consumer: "Consumer",
          Collateral_Type: "Residential",
          Collateral_Address: "2339 BLAKE ST ",
          Collateral_City: "BERKELEY",
          Collateral_State: "CA",
          Collateral_Zip: "94704",
          Collateral_Latitude: "37.8641268",
          Collateral_Longitude: "-122.261146",
          Lein: "1",
          Orig_Appraisal_Date: "40918",
          Orig_Appraisal_Value: "884286.4883",
          Loan_Type: "ODLOC",
          Loan_Officer: "Albrow Brooke",
          Loan_Officer_Region: "New York",
          Origination_Date: "40939",
          Maturity_Date: "44178",
          Avg_12_Month_Dep: "142239.5821",
          Current_Dep: "158043.9801",
          Past_Due: "No",
          Orig_LTV: "0.882211393",
          Current_LTV: "0.169146095"
        },
        {
          RelationshipID: "328",
          Borrower_Name: "Perla,Meeker",
          Account_NBR: "1370862",
          Balance_Sheet_Category: "Commercial",
          Current_Balance: "430441.0783",
          Commitment_AMT: "2588157.397",
          Risk_Rating: "4",
          Interest_Rate: "0.047819461",
          Commercial_Consumer: "Commercial",
          Collateral_Type: "Residential",
          Collateral_Address: "18720 BUREN PL ",
          Collateral_City: "CASTRO VALLEY",
          Collateral_State: "CA",
          Collateral_Zip: "94552",
          Collateral_Latitude: "37.721609",
          Collateral_Longitude: "-122.0282593",
          Lein: "2",
          Orig_Appraisal_Date: "37786",
          Orig_Appraisal_Value: "1197045.22",
          Loan_Type: "CRE",
          Loan_Officer: "Karman Rion",
          Loan_Officer_Region: "San Jose",
          Origination_Date: "37807",
          Maturity_Date: "45726",
          Avg_12_Month_Dep: "344352.8626",
          Current_Dep: "430441.0783",
          Past_Due: "No",
          Orig_LTV: "0.799690215",
          Current_LTV: "0.499763729"
        }
      ]
    },
    {
      Relationshipid: "4433",
      relationshipName: "Jane ,Gal",
      strategy: "Retain",
      status: "Deteriorating",
      covenantCompliance: "Not Applicable",
      covenantComplianceComment: "",
      finReportingCurrent: "Not Applicable",
      finReportingComment: "",
      CollateralComments:
        "1st position secured by primary residence which was appraised for $10MM in 12/2011 and current zillow is $11M.",
      PropertyTax: "Current",
      ReasonforAdverseClassification: "4/2019: Extended payment delinquency.",
      LineofBusiness: "",
      CurrentComments:
        "Update on 12/1/2019: 2nd loan has paid off and the property on 123 School Ave is set at a sales price of $9MM.",
      ActionPlan: "Follow up on the sale of the first loans property",
      Triggers:
        "None, with the interest reserve, borrower will not be delinquent. Need to monitor for loan payoff.",
      GradeRecommendation:
        "Recommending 0% reserves as LTV is roughly 50% due to current listing price of just under $12MM.",
      PreviousComments: [
        {
          id: "123123123",
          date: "6/30/2019",
          Comments:
            "Divorce situation and loan was placed on 3 months I/O to provide sufficient time to sell property."
        },
        {
          id: "123123124",
          date: "7/30/2019",
          Comments:
            "No changes at this time. Working with the client to determine next course of action."
        }
      ],
      loans: [
        {
          Borrower_Name: "Sergio,al-Gad",
          Account_NBR: "7721194",
          Balance_Sheet_Category: "Consumer",
          Current_Balance: "158043.9801",
          Commitment_AMT: "1966046.031",
          Risk_Rating: "8",
          Interest_Rate: "0.122886945",
          Commercial_Consumer: "Consumer",
          Collateral_Type: "Residential",
          Collateral_Address: "2339 BLAKE ST ",
          Collateral_City: "BERKELEY",
          Collateral_State: "CA",
          Collateral_Zip: "94704",
          Collateral_Latitude: "37.8641268",
          Collateral_Longitude: "-122.261146",
          Lein: "1",
          Orig_Appraisal_Date: "40918",
          Orig_Appraisal_Value: "884286.4883",
          Loan_Type: "ODLOC",
          Loan_Officer: "Albrow Brooke",
          Loan_Officer_Region: "New York",
          Origination_Date: "40939",
          Maturity_Date: "44178",
          Avg_12_Month_Dep: "142239.5821",
          Current_Dep: "158043.9801",
          Past_Due: "No",
          Orig_LTV: "0.882211393",
          Current_LTV: "0.169146095"
        },
        {
          Borrower_Name: "Sergio,al-Gad",
          Account_NBR: "7721194",
          Balance_Sheet_Category: "Consumer",
          Current_Balance: "158043.9801",
          Commitment_AMT: "1966046.031",
          Risk_Rating: "8",
          Interest_Rate: "0.122886945",
          Commercial_Consumer: "Consumer",
          Collateral_Type: "Residential",
          Collateral_Address: "2339 BLAKE ST ",
          Collateral_City: "BERKELEY",
          Collateral_State: "CA",
          Collateral_Zip: "94704",
          Collateral_Latitude: "37.8641268",
          Collateral_Longitude: "-122.261146",
          Lein: "1",
          Orig_Appraisal_Date: "40918",
          Orig_Appraisal_Value: "884286.4883",
          Loan_Type: "ODLOC",
          Loan_Officer: "Albrow Brooke",
          Loan_Officer_Region: "New York",
          Origination_Date: "40939",
          Maturity_Date: "44178",
          Avg_12_Month_Dep: "142239.5821",
          Current_Dep: "158043.9801",
          Past_Due: "No",
          Orig_LTV: "0.882211393",
          Current_LTV: "0.169146095"
        },
        {
          RelationshipID: "328",
          Borrower_Name: "Perla,Meeker",
          Account_NBR: "1370862",
          Balance_Sheet_Category: "Commercial",
          Current_Balance: "430441.0783",
          Commitment_AMT: "2588157.397",
          Risk_Rating: "4",
          Interest_Rate: "0.047819461",
          Commercial_Consumer: "Commercial",
          Collateral_Type: "Residential",
          Collateral_Address: "18720 BUREN PL ",
          Collateral_City: "CASTRO VALLEY",
          Collateral_State: "CA",
          Collateral_Zip: "94552",
          Collateral_Latitude: "37.721609",
          Collateral_Longitude: "-122.0282593",
          Lein: "2",
          Orig_Appraisal_Date: "37786",
          Orig_Appraisal_Value: "1197045.22",
          Loan_Type: "CRE",
          Loan_Officer: "Karman Rion",
          Loan_Officer_Region: "San Jose",
          Origination_Date: "37807",
          Maturity_Date: "45726",
          Avg_12_Month_Dep: "344352.8626",
          Current_Dep: "430441.0783",
          Past_Due: "No",
          Orig_LTV: "0.799690215",
          Current_LTV: "0.499763729"
        }
      ]
    },
    {
      Relationshipid: "6644",
      relationshipName: "Kelly , Marks",
      strategy: "Retain",
      status: "Deteriorating",
      covenantCompliance: "Not Applicable",
      covenantComplianceComment: "",
      finReportingCurrent: "Not Applicable",
      finReportingComment: "",
      CollateralComments:
        "1st position secured by primary residence which was appraised for $10MM in 12/2011 and current zillow is $11M.",
      PropertyTax: "Current",
      ReasonforAdverseClassification: "4/2019: Extended payment delinquency.",
      LineofBusiness: "",
      CurrentComments:
        "Update on 12/1/2019: 2nd loan has paid off and the property on 123 School Ave is set at a sales price of $9MM.",
      ActionPlan: "Follow up on the sale of the first loans property",
      Triggers:
        "None, with the interest reserve, borrower will not be delinquent. Need to monitor for loan payoff.",
      GradeRecommendation:
        "Recommending 0% reserves as LTV is roughly 50% due to current listing price of just under $12MM.",
      PreviousComments: [
        {
          id: "123123123",
          date: "6/30/2019",
          Comments:
            "Divorce situation and loan was placed on 3 months I/O to provide sufficient time to sell property."
        },
        {
          id: "123123124",
          date: "7/30/2019",
          Comments:
            "No changes at this time. Working with the client to determine next course of action."
        },
        {
          id: "123123123",
          date: "6/30/2019",
          Comments:
            "Divorce situation and loan was placed on 3 months I/O to provide sufficient time to sell property."
        },
        {
          id: "123123123",
          date: "6/30/2019",
          Comments:
            "Divorce situation and loan was placed on 3 months I/O to provide sufficient time to sell property."
        }
      ],
      loans: [
        {
          Borrower_Name: "Sergio,al-Gad",
          Account_NBR: "7721194",
          Balance_Sheet_Category: "Consumer",
          Current_Balance: "158043.9801",
          Commitment_AMT: "1966046.031",
          Risk_Rating: "8",
          Interest_Rate: "0.122886945",
          Commercial_Consumer: "Consumer",
          Collateral_Type: "Residential",
          Collateral_Address: "2339 BLAKE ST ",
          Collateral_City: "BERKELEY",
          Collateral_State: "CA",
          Collateral_Zip: "94704",
          Collateral_Latitude: "37.8641268",
          Collateral_Longitude: "-122.261146",
          Lein: "1",
          Orig_Appraisal_Date: "40918",
          Orig_Appraisal_Value: "884286.4883",
          Loan_Type: "ODLOC",
          Loan_Officer: "Albrow Brooke",
          Loan_Officer_Region: "New York",
          Origination_Date: "40939",
          Maturity_Date: "44178",
          Avg_12_Month_Dep: "142239.5821",
          Current_Dep: "158043.9801",
          Past_Due: "No",
          Orig_LTV: "0.882211393",
          Current_LTV: "0.169146095"
        },
        {
          Borrower_Name: "Sergio,al-Gad",
          Account_NBR: "7721194",
          Balance_Sheet_Category: "Consumer",
          Current_Balance: "158043.9801",
          Commitment_AMT: "1966046.031",
          Risk_Rating: "8",
          Interest_Rate: "0.122886945",
          Commercial_Consumer: "Consumer",
          Collateral_Type: "Residential",
          Collateral_Address: "2339 BLAKE ST ",
          Collateral_City: "BERKELEY",
          Collateral_State: "CA",
          Collateral_Zip: "94704",
          Collateral_Latitude: "37.8641268",
          Collateral_Longitude: "-122.261146",
          Lein: "1",
          Orig_Appraisal_Date: "40918",
          Orig_Appraisal_Value: "884286.4883",
          Loan_Type: "ODLOC",
          Loan_Officer: "Albrow Brooke",
          Loan_Officer_Region: "New York",
          Origination_Date: "40939",
          Maturity_Date: "44178",
          Avg_12_Month_Dep: "142239.5821",
          Current_Dep: "158043.9801",
          Past_Due: "No",
          Orig_LTV: "0.882211393",
          Current_LTV: "0.169146095"
        },
        {
          Borrower_Name: "Sergio,al-Gad",
          Account_NBR: "7721194",
          Balance_Sheet_Category: "Consumer",
          Current_Balance: "158043.9801",
          Commitment_AMT: "1966046.031",
          Risk_Rating: "8",
          Interest_Rate: "0.122886945",
          Commercial_Consumer: "Consumer",
          Collateral_Type: "Residential",
          Collateral_Address: "2339 BLAKE ST ",
          Collateral_City: "BERKELEY",
          Collateral_State: "CA",
          Collateral_Zip: "94704",
          Collateral_Latitude: "37.8641268",
          Collateral_Longitude: "-122.261146",
          Lein: "1",
          Orig_Appraisal_Date: "40918",
          Orig_Appraisal_Value: "884286.4883",
          Loan_Type: "ODLOC",
          Loan_Officer: "Albrow Brooke",
          Loan_Officer_Region: "New York",
          Origination_Date: "40939",
          Maturity_Date: "44178",
          Avg_12_Month_Dep: "142239.5821",
          Current_Dep: "158043.9801",
          Past_Due: "No",
          Orig_LTV: "0.882211393",
          Current_LTV: "0.169146095"
        },
        {
          RelationshipID: "328",
          Borrower_Name: "Perla,Meeker",
          Account_NBR: "1370862",
          Balance_Sheet_Category: "Commercial",
          Current_Balance: "430441.0783",
          Commitment_AMT: "2588157.397",
          Risk_Rating: "4",
          Interest_Rate: "0.047819461",
          Commercial_Consumer: "Commercial",
          Collateral_Type: "Residential",
          Collateral_Address: "18720 BUREN PL ",
          Collateral_City: "CASTRO VALLEY",
          Collateral_State: "CA",
          Collateral_Zip: "94552",
          Collateral_Latitude: "37.721609",
          Collateral_Longitude: "-122.0282593",
          Lein: "2",
          Orig_Appraisal_Date: "37786",
          Orig_Appraisal_Value: "1197045.22",
          Loan_Type: "CRE",
          Loan_Officer: "Karman Rion",
          Loan_Officer_Region: "San Jose",
          Origination_Date: "37807",
          Maturity_Date: "45726",
          Avg_12_Month_Dep: "344352.8626",
          Current_Dep: "430441.0783",
          Past_Due: "No",
          Orig_LTV: "0.799690215",
          Current_LTV: "0.499763729"
        }
      ]
    },
    {
      Relationshipid: "1000",
      relationshipName: "Sergio,al-Gad",
      strategy: "Retain",
      status: "Deteriorating",
      covenantCompliance: "Not Applicable",
      covenantComplianceComment: "",
      finReportingCurrent: "Not Applicable",
      finReportingComment: "",
      CollateralComments:
        "1st position secured by primary residence which was appraised for $10MM in 12/2011 and current zillow is $11M.",
      PropertyTax: "Current",
      ReasonforAdverseClassification: "4/2019: Extended payment delinquency.",
      LineofBusiness: "",
      CurrentComments:
        "Update on 12/1/2019: 2nd loan has paid off and the property on 123 School Ave is set at a sales price of $9MM.",
      ActionPlan: "Follow up on the sale of the first loans property",
      Triggers:
        "None, with the interest reserve, borrower will not be delinquent. Need to monitor for loan payoff.",
      GradeRecommendation:
        "Recommending 0% reserves as LTV is roughly 50% due to current listing price of just under $12MM.",
      PreviousComments: [
        {
          id: "123123123",
          date: "6/30/2019",
          Comments:
            "Divorce situation and loan was placed on 3 months I/O to provide sufficient time to sell property."
        },
        {
          id: "123123124",
          date: "7/30/2019",
          Comments:
            "No changes at this time. Working with the client to determine next course of action."
        }
      ],
      loans: [
        {
          Borrower_Name: "Sergio,al-Gad",
          Account_NBR: "7721194",
          Balance_Sheet_Category: "Consumer",
          Current_Balance: "158043.9801",
          Commitment_AMT: "1966046.031",
          Risk_Rating: "8",
          Interest_Rate: "0.122886945",
          Commercial_Consumer: "Consumer",
          Collateral_Type: "Residential",
          Collateral_Address: "2339 BLAKE ST ",
          Collateral_City: "BERKELEY",
          Collateral_State: "CA",
          Collateral_Zip: "94704",
          Collateral_Latitude: "37.8641268",
          Collateral_Longitude: "-122.261146",
          Lein: "1",
          Orig_Appraisal_Date: "40918",
          Orig_Appraisal_Value: "884286.4883",
          Loan_Type: "ODLOC",
          Loan_Officer: "Albrow Brooke",
          Loan_Officer_Region: "New York",
          Origination_Date: "40939",
          Maturity_Date: "44178",
          Avg_12_Month_Dep: "142239.5821",
          Current_Dep: "158043.9801",
          Past_Due: "No",
          Orig_LTV: "0.882211393",
          Current_LTV: "0.169146095"
        },
        {
          RelationshipID: "328",
          Borrower_Name: "Perla,Meeker",
          Account_NBR: "1370862",
          Balance_Sheet_Category: "Commercial",
          Current_Balance: "430441.0783",
          Commitment_AMT: "2588157.397",
          Risk_Rating: "4",
          Interest_Rate: "0.047819461",
          Commercial_Consumer: "Commercial",
          Collateral_Type: "Residential",
          Collateral_Address: "18720 BUREN PL ",
          Collateral_City: "CASTRO VALLEY",
          Collateral_State: "CA",
          Collateral_Zip: "94552",
          Collateral_Latitude: "37.721609",
          Collateral_Longitude: "-122.0282593",
          Lein: "2",
          Orig_Appraisal_Date: "37786",
          Orig_Appraisal_Value: "1197045.22",
          Loan_Type: "CRE",
          Loan_Officer: "Karman Rion",
          Loan_Officer_Region: "San Jose",
          Origination_Date: "37807",
          Maturity_Date: "45726",
          Avg_12_Month_Dep: "344352.8626",
          Current_Dep: "430441.0783",
          Past_Due: "No",
          Orig_LTV: "0.799690215",
          Current_LTV: "0.499763729"
        }
      ]
    },
    {
      Relationshipid: "32443",
      relationshipName: "Gap Inc",
      strategy: "Retain",
      status: "Deteriorating",
      covenantCompliance: "Not Applicable",
      covenantComplianceComment: "",
      finReportingCurrent: "Not Applicable",
      finReportingComment: "",
      CollateralComments:
        "1st position secured by primary residence which was appraised for $10MM in 12/2011 and current zillow is $11M.",
      PropertyTax: "Current",
      ReasonforAdverseClassification: "4/2019: Extended payment delinquency.",
      LineofBusiness: "",
      CurrentComments:
        "Update on 12/1/2019: 2nd loan has paid off and the property on 123 School Ave is set at a sales price of $9MM.",
      ActionPlan: "Follow up on the sale of the first loans property",
      Triggers:
        "None, with the interest reserve, borrower will not be delinquent. Need to monitor for loan payoff.",
      GradeRecommendation:
        "Recommending 0% reserves as LTV is roughly 50% due to current listing price of just under $12MM.",
      PreviousComments: [
        {
          id: "123123123",
          date: "6/30/2019",
          Comments:
            "Divorce situation and loan was placed on 3 months I/O to provide sufficient time to sell property."
        },
        {
          id: "123123124",
          date: "7/30/2019",
          Comments:
            "No changes at this time. Working with the client to determine next course of action."
        },
        {
          id: "123123124",
          date: "7/30/2019",
          Comments:
            "No changes at this time. Working with the client to determine next course of action."
        }
      ],
      loans: [
        {
          Borrower_Name: "Sergio,al-Gad",
          Account_NBR: "7721194",
          Balance_Sheet_Category: "Consumer",
          Current_Balance: "158043.9801",
          Commitment_AMT: "1966046.031",
          Risk_Rating: "8",
          Interest_Rate: "0.122886945",
          Commercial_Consumer: "Consumer",
          Collateral_Type: "Residential",
          Collateral_Address: "2339 BLAKE ST ",
          Collateral_City: "BERKELEY",
          Collateral_State: "CA",
          Collateral_Zip: "94704",
          Collateral_Latitude: "37.8641268",
          Collateral_Longitude: "-122.261146",
          Lein: "1",
          Orig_Appraisal_Date: "40918",
          Orig_Appraisal_Value: "884286.4883",
          Loan_Type: "ODLOC",
          Loan_Officer: "Albrow Brooke",
          Loan_Officer_Region: "New York",
          Origination_Date: "40939",
          Maturity_Date: "44178",
          Avg_12_Month_Dep: "142239.5821",
          Current_Dep: "158043.9801",
          Past_Due: "No",
          Orig_LTV: "0.882211393",
          Current_LTV: "0.169146095"
        },
        {
          RelationshipID: "328",
          Borrower_Name: "Perla,Meeker",
          Account_NBR: "1370862",
          Balance_Sheet_Category: "Commercial",
          Current_Balance: "430441.0783",
          Commitment_AMT: "2588157.397",
          Risk_Rating: "4",
          Interest_Rate: "0.047819461",
          Commercial_Consumer: "Commercial",
          Collateral_Type: "Residential",
          Collateral_Address: "18720 BUREN PL ",
          Collateral_City: "CASTRO VALLEY",
          Collateral_State: "CA",
          Collateral_Zip: "94552",
          Collateral_Latitude: "37.721609",
          Collateral_Longitude: "-122.0282593",
          Lein: "2",
          Orig_Appraisal_Date: "37786",
          Orig_Appraisal_Value: "1197045.22",
          Loan_Type: "CRE",
          Loan_Officer: "Karman Rion",
          Loan_Officer_Region: "San Jose",
          Origination_Date: "37807",
          Maturity_Date: "45726",
          Avg_12_Month_Dep: "344352.8626",
          Current_Dep: "430441.0783",
          Past_Due: "No",
          Orig_LTV: "0.799690215",
          Current_LTV: "0.499763729"
        }
      ]
    },
    {
      Relationshipid: "88233",
      relationshipName: "Union Tree, Association",
      strategy: "Retain",
      status: "Deteriorating",
      covenantCompliance: "Not Applicable",
      covenantComplianceComment: "",
      finReportingCurrent: "Not Applicable",
      finReportingComment: "",
      CollateralComments:
        "1st position secured by primary residence which was appraised for $10MM in 12/2011 and current zillow is $11M.",
      PropertyTax: "Current",
      ReasonforAdverseClassification: "4/2019: Extended payment delinquency.",
      LineofBusiness: "",
      CurrentComments:
        "Update on 12/1/2019: 2nd loan has paid off and the property on 123 School Ave is set at a sales price of $9MM.",
      ActionPlan: "Follow up on the sale of the first loans property",
      Triggers:
        "None, with the interest reserve, borrower will not be delinquent. Need to monitor for loan payoff.",
      GradeRecommendation:
        "Recommending 0% reserves as LTV is roughly 50% due to current listing price of just under $12MM.",
      PreviousComments: [
        {
          id: "123123123",
          date: "6/30/2019",
          Comments:
            "Divorce situation and loan was placed on 3 months I/O to provide sufficient time to sell property."
        },
        {
          id: "123123124",
          date: "7/30/2019",
          Comments:
            "No changes at this time. Working with the client to determine next course of action."
        }
      ],
      loans: [
        {
          Borrower_Name: "Sergio,al-Gad",
          Account_NBR: "7721194",
          Balance_Sheet_Category: "Consumer",
          Current_Balance: "158043.9801",
          Commitment_AMT: "1966046.031",
          Risk_Rating: "8",
          Interest_Rate: "0.122886945",
          Commercial_Consumer: "Consumer",
          Collateral_Type: "Residential",
          Collateral_Address: "2339 BLAKE ST ",
          Collateral_City: "BERKELEY",
          Collateral_State: "CA",
          Collateral_Zip: "94704",
          Collateral_Latitude: "37.8641268",
          Collateral_Longitude: "-122.261146",
          Lein: "1",
          Orig_Appraisal_Date: "40918",
          Orig_Appraisal_Value: "884286.4883",
          Loan_Type: "ODLOC",
          Loan_Officer: "Albrow Brooke",
          Loan_Officer_Region: "New York",
          Origination_Date: "40939",
          Maturity_Date: "44178",
          Avg_12_Month_Dep: "142239.5821",
          Current_Dep: "158043.9801",
          Past_Due: "No",
          Orig_LTV: "0.882211393",
          Current_LTV: "0.169146095"
        },
        {
          RelationshipID: "328",
          Borrower_Name: "Perla,Meeker",
          Account_NBR: "1370862",
          Balance_Sheet_Category: "Commercial",
          Current_Balance: "430441.0783",
          Commitment_AMT: "2588157.397",
          Risk_Rating: "4",
          Interest_Rate: "0.047819461",
          Commercial_Consumer: "Commercial",
          Collateral_Type: "Residential",
          Collateral_Address: "18720 BUREN PL ",
          Collateral_City: "CASTRO VALLEY",
          Collateral_State: "CA",
          Collateral_Zip: "94552",
          Collateral_Latitude: "37.721609",
          Collateral_Longitude: "-122.0282593",
          Lein: "2",
          Orig_Appraisal_Date: "37786",
          Orig_Appraisal_Value: "1197045.22",
          Loan_Type: "CRE",
          Loan_Officer: "Karman Rion",
          Loan_Officer_Region: "San Jose",
          Origination_Date: "37807",
          Maturity_Date: "45726",
          Avg_12_Month_Dep: "344352.8626",
          Current_Dep: "430441.0783",
          Past_Due: "No",
          Orig_LTV: "0.799690215",
          Current_LTV: "0.499763729"
        }
      ]
    },
    {
      Relationshipid: "1000",
      relationshipName: "Sergio,al-Gad",
      strategy: "Retain",
      status: "Deteriorating",
      covenantCompliance: "Not Applicable",
      covenantComplianceComment: "",
      finReportingCurrent: "Not Applicable",
      finReportingComment: "",
      CollateralComments:
        "1st position secured by primary residence which was appraised for $10MM in 12/2011 and current zillow is $11M.",
      PropertyTax: "Current",
      ReasonforAdverseClassification: "4/2019: Extended payment delinquency.",
      LineofBusiness: "",
      CurrentComments:
        "Update on 12/1/2019: 2nd loan has paid off and the property on 123 School Ave is set at a sales price of $9MM.",
      ActionPlan: "Follow up on the sale of the first loans property",
      Triggers:
        "None, with the interest reserve, borrower will not be delinquent. Need to monitor for loan payoff.",
      GradeRecommendation:
        "Recommending 0% reserves as LTV is roughly 50% due to current listing price of just under $12MM.",
      PreviousComments: [
        {
          id: "123123123",
          date: "6/30/2019",
          Comments:
            "Divorce situation and loan was placed on 3 months I/O to provide sufficient time to sell property."
        },
        {
          id: "123123124",
          date: "7/30/2019",
          Comments:
            "No changes at this time. Working with the client to determine next course of action."
        }
      ],
      loans: [
        {
          Borrower_Name: "Sergio,al-Gad",
          Account_NBR: "7721194",
          Balance_Sheet_Category: "Consumer",
          Current_Balance: "158043.9801",
          Commitment_AMT: "1966046.031",
          Risk_Rating: "8",
          Interest_Rate: "0.122886945",
          Commercial_Consumer: "Consumer",
          Collateral_Type: "Residential",
          Collateral_Address: "2339 BLAKE ST ",
          Collateral_City: "BERKELEY",
          Collateral_State: "CA",
          Collateral_Zip: "94704",
          Collateral_Latitude: "37.8641268",
          Collateral_Longitude: "-122.261146",
          Lein: "1",
          Orig_Appraisal_Date: "40918",
          Orig_Appraisal_Value: "884286.4883",
          Loan_Type: "ODLOC",
          Loan_Officer: "Albrow Brooke",
          Loan_Officer_Region: "New York",
          Origination_Date: "40939",
          Maturity_Date: "44178",
          Avg_12_Month_Dep: "142239.5821",
          Current_Dep: "158043.9801",
          Past_Due: "No",
          Orig_LTV: "0.882211393",
          Current_LTV: "0.169146095"
        },
        {
          RelationshipID: "328",
          Borrower_Name: "Perla,Meeker",
          Account_NBR: "1370862",
          Balance_Sheet_Category: "Commercial",
          Current_Balance: "430441.0783",
          Commitment_AMT: "2588157.397",
          Risk_Rating: "4",
          Interest_Rate: "0.047819461",
          Commercial_Consumer: "Commercial",
          Collateral_Type: "Residential",
          Collateral_Address: "18720 BUREN PL ",
          Collateral_City: "CASTRO VALLEY",
          Collateral_State: "CA",
          Collateral_Zip: "94552",
          Collateral_Latitude: "37.721609",
          Collateral_Longitude: "-122.0282593",
          Lein: "2",
          Orig_Appraisal_Date: "37786",
          Orig_Appraisal_Value: "1197045.22",
          Loan_Type: "CRE",
          Loan_Officer: "Karman Rion",
          Loan_Officer_Region: "San Jose",
          Origination_Date: "37807",
          Maturity_Date: "45726",
          Avg_12_Month_Dep: "344352.8626",
          Current_Dep: "430441.0783",
          Past_Due: "No",
          Orig_LTV: "0.799690215",
          Current_LTV: "0.499763729"
        }
      ]
    }
  ];

  constructor() {
    console.log("reports data service running..");
  }

  getReportsData() {
    return this.reportsData;
  }

  getReportDataDetail(id: string) {
    return this.reportsData[id];
  }
}
