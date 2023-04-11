import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import db from "../firebaseInit";
import router from "../router";
import type {
  signUpData,
  personalDetails,
  familyDetails,
  doctorsDetails,
} from "../types";
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
        router.push({ name: "newuser" });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  },

  getSpecialist: ({}, payload: string) => {
    const q = query(
      collection(db, "Doctors"),
      where("specialization", "==", "Dentist")
    );
    getDocs(q).then((snap) => {
      console.log(snap.docs);
      snap.docs.forEach((doc) => {
        console.log(doc.data());
      });
    });
  },
};
