import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  onSnapshot,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import db, { auth } from "../firebaseInit";
import router from "../router";
import type {
  SignUpData,
  personalDetails,
  familyDetails,
  State,
  DoctorsList,
} from "../types";
import { Commit } from "vuex";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import state from "./state";
import { ref } from "vue";
export default {
  singnUpForm: ({}, payload: SignUpData) => {
    console.log(payload.email);
    createUserWithEmailAndPassword(auth, payload.email, payload.password).then(
      (credentials) => {
        setDoc(doc(db, "PatientDetails", credentials.user.uid), payload)
          .then((response) => {
            router.push({ name: "PersonalInfo" });
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      }
    );
  },
  singnInForm: async ({}, payload: SignUpData) => {
    console.log(payload);
    try {
      await signInWithEmailAndPassword(auth, payload.email, payload.password);
      router.push({ name: "newuser" });
      console.log("Signed in successfully");
    } catch (error) {
      alert("Error signing in:");
    }
  },
  LogOut: async () => {
    try {
      await signOut(auth);
      router.push({ path: "/signin" });
      console.log("Signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  },
  getCurrentpatientDetails: ({
    commit,
    state,
  }: {
    commit: Commit;
    state: State;
  }) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const docRef = doc(db, "PatientDetails", user.uid);
        onSnapshot(
          docRef,
          (snapshot) => {
            const data = { ...snapshot.data(), id: snapshot.id };
            commit("setCurrentUser", data);
            state.bodyLoader = false;
          },
          (error) => {
            console.error("Error fetching data:", error);
          }
        );
        console.log(user.email, user.uid);
      } else {
        state.bodyLoader = false;
        console.log("Logged Out");
      }
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
      snap.docs.forEach((doc) => {});
    });
  },
  getDoctorslist: ({ commit, state }: { commit: Commit; state: State }) => {
    db.collection("Doctors").onSnapshot((snapshot) => {
      state.doctorsList = [];
      snapshot.forEach((doc) => {
        let data = { ...doc.data(), docId: doc.id };
        commit("setDoctorsList", data);
      });
    });
  },
  searchDoctor: (
    { commit, state }: { commit: Commit; state: State },
    payload: string
  ) => {
    db.collection("Doctors")
      .where("specialization", "==", payload)
      .onSnapshot((snapshot) => {
        state.doctorsList = [];
        snapshot.forEach((doc) => {
          let data = { ...doc.data(), docId: doc.id };
          commit("setDoctorsList", data);
        });
      });
  },
  getDentists: ({ commit, state }: { commit: Commit; state: State }) => {
    db.collection("Doctors")
      .where("specialization", "==", "Dentist")
      .onSnapshot((snapshot) => {
        state.dentistList = [];
        snapshot.forEach((doc) => {
          let data = { ...doc.data(), docId: doc.id };
          commit("setDentist", data);
        });
      });
  },
  getGeneral: ({ commit, state }: { commit: Commit; state: State }) => {
    db.collection("Doctors")
      .where("specialization", "==", "General")
      .onSnapshot((snapshot) => {
        state.generalList = [];
        snapshot.forEach((doc) => {
          let data = { ...doc.data(), docId: doc.id };
          commit("setGenreal", data);
        });
      });
  },
  getNutrition: ({ commit, state }: { commit: Commit; state: State }) => {
    db.collection("Doctors")
      .where("specialization", "==", "Nutrition")
      .onSnapshot((snapshot) => {
        state.nutririonList = [];
        snapshot.forEach((doc) => {
          let data = { ...doc.data(), docId: doc.id };
          commit("setNutrition", data);
        });
      });
  },
  getNurologist: ({ commit, state }: { commit: Commit; state: State }) => {
    db.collection("Doctors")
      .where("specialization", "==", "Nurologist")
      .onSnapshot((snapshot) => {
        state.nurologistList = [];
        snapshot.forEach((doc) => {
          let data = { ...doc.data(), docId: doc.id };
          commit("setNurologist", data);
        });
      });
  },
  getOpthal: ({ commit, state }: { commit: Commit; state: State }) => {
    db.collection("Doctors")
      .where("specialization", "==", "Opthal")
      .onSnapshot((snapshot) => {
        state.opthalList = [];
        snapshot.forEach((doc) => {
          let data = { ...doc.data(), docId: doc.id };
          commit("setOpthal", data);
        });
      });
  },
  getPediatric: ({ commit, state }: { commit: Commit; state: State }) => {
    db.collection("Doctors")
      .where("specialization", "==", "Pediatric")
      .onSnapshot((snapshot) => {
        state.pediatricList = [];
        snapshot.forEach((doc) => {
          let data = { ...doc.data(), docId: doc.id };
          commit("setPediatric", data);
        });
      });
  },
  bookAppoiment: ({ state }: { state: State }, payload: DoctorsList) => {
    const id = state.currentPatientDetails.id;
    addDoc(collection(db, "PatientDetails/" + id + "/upcomming"), payload)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  },
  recduleAppoiment: (
    { state }: { state: State },
    payload: { currentDate: Date; docId: string }
  ) => {
    const id = state.currentPatientDetails.id;
    console.log(payload);

    const subcollectionRef = db
      .collection("PatientDetails")
      .doc(id)
      .collection("upcomming");
    const query = subcollectionRef.where("docId", "==", payload.docId);

    query.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const docRef = db
          .collection("PatientDetails")
          .doc(id)
          .collection("upcomming")
          .doc(doc.id);
        docRef.update({
          date: payload.currentDate,
        });
      });
    });
  },
  cancelAppointment: ({ state }: { state: State }, payload: string) => {
    const id = state.currentPatientDetails.id;

    addDoc(
      collection(db, "PatientDetails/" + id + "/cancelled"),
      state.currentCancelled
    )
      .then(() => {
        db.collection("PatientDetails")
          .doc(id)
          .collection("upcomming")
          .where("docId", "==", payload)
          .get()
          .then((querysnap) => {
            querysnap.forEach((doc) => {
              doc.ref.delete().then(() => {
                router.push("/allappoiments");
              });
            });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  },

  getupcomingAppoiments: ({
    commit,
    state,
  }: {
    commit: Commit;
    state: State;
  }) => {
    const id = state.currentPatientDetails.id;
    const q = collection(db, "PatientDetails/" + id + "/upcomming");
    onSnapshot(q, (querysnap) => {
      state.uppcomingAppoiments = [];
      querysnap.forEach((doc) => {
        let data = { ...doc.data() };
        if (data.date) {
          let time = data.date.toDate();
          data.hours = time.getHours();
          data.minutes = time.getMinutes();
        }
        commit("setUppcomingAppoiments", data);
        let todaysTime = Timestamp.now().toDate();
        let todayMonth = todaysTime.getMonth();
        let todayDay = todaysTime.getDay();
        let todayYear = todaysTime.getFullYear();

        let scheduleDate = data.date.toDate();
        let date = new Date(scheduleDate);
        let secduleDay = date.getDay();
        let sechduleMonth = date.getMonth() + 1;
        let secduleYear = date.getFullYear();

        console.log(date);
        console.log(secduleDay, sechduleMonth, secduleYear);

        // commit("settodaysAppoiments", data);
      });
    });
  },

  getcompletedAppoiments: ({
    commit,
    state,
  }: {
    commit: Commit;
    state: State;
  }) => {
    const id = state.currentPatientDetails.id;
    const q = collection(db, "PatientDetails/" + id + "/completed");
    onSnapshot(q, (querysnap) => {
      state.completedAppoiments = [];
      querysnap.forEach((doc) => {
        let data = doc.data();
        commit("setcompletedAppoiments", data);
      });
    });
  },

  getcancelledAppoiments: ({
    commit,
    state,
  }: {
    commit: Commit;
    state: State;
  }) => {
    const id = state.currentPatientDetails.id;
    const q = collection(db, "PatientDetails/" + id + "/cancelled");
    onSnapshot(q, (querysnap) => {
      state.cancelledAppoiments = [];
      querysnap.forEach((doc) => {
        let data = doc.data();
        commit("cancelledAppoiment", data);
      });
    });
  },

  // ______________________________________________________________________________________________

  sendMessage: (
    { state }: { state: State },
    payload: { id: string; text: string }
  ) => {
    let senderId = state.currentPatientDetails.id;
    let reciverId = payload.id;

    let docId = ref("");
    if (senderId > reciverId) docId.value = senderId + reciverId;
    else docId.value = reciverId + senderId;

    let date = new Date();

    console.log(docId.value);
    addDoc(collection(db, "chat/" + docId.value + "/messages"), {
      text: payload.text,
      senderId: senderId,
      reciverId: reciverId,
      date: date,
    })
      .then(() => {
        console.log("send");
      })
      .catch((error) => {
        console.log("error");
      });
  },

  getMessages: (
    { commit, state }: { commit: Commit; state: State },
    payload: string
  ) => {
    let senderId = state.currentPatientDetails.id;
    let reciverId = payload;
    let docId = ref("");

    if (senderId > reciverId) docId.value = senderId + reciverId;
    else docId.value = reciverId + senderId;

    let q = query(
      collection(db, "chat/" + docId.value + "/messages"),
      orderBy("date")
    );
    onSnapshot(q, (snapshot) => {
      state.messages = [];
      snapshot.forEach((doc) => {
        let data = { ...doc.data(), id: doc.id };
        commit("setMessages", data);
      });
    });
  },
};
