import { collection, addDoc } from "firebase/firestore";
import db from "../firebaseInit";
import router from "../router";
import type { signUpData, personalDetails, familyDetails } from "../types";
export default {
  singnUpForm: ({}, payload: signUpData) => {
    const docRef = addDoc(collection(db, "PatientDetails"), payload)
      .then((response) => {
        console.log("Document written with ID: ", response.id);
        router.push({ name: "PersonalInfo" });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  },
  PersonalDetails: ({}, payload: personalDetails) => {
    const docRef = addDoc(collection(db, "PatientDetails"), payload)
      .then((response) => {
        console.log("Document written with ID: ", response.id);
        router.push({ name: "familyDetails" });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  },
  FamilyDetails: ({}, payload: familyDetails) => {
    const docRef = addDoc(collection(db, "PatientDetails"), payload)
      .then((response) => {
        console.log("Document written with ID: ", response.id);
        router.push({ name: "familyDetails" });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  },
};
