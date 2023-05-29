import router from "../router";
import type { State, DoctorsList, SignUpData, Messages } from "../types";

export default {
  setDoctorsList: (state: State, payload: DoctorsList) => {
    state.doctorsList.push(payload);
  },
  setDentist: (state: State, payload: DoctorsList) => {
    console.log(payload);
    state.dentistList.push(payload);
  },
  setGenreal: (state: State, payload: DoctorsList) => {
    console.log(payload);
    state.generalList.push(payload);
  },
  setNutrition: (state: State, payload: DoctorsList) => {
    console.log(payload);
    state.nutririonList.push(payload);
  },
  setNurologist: (state: State, payload: DoctorsList) => {
    console.log(payload);
    state.nurologistList.push(payload);
  },
  setOpthal: (state: State, payload: DoctorsList) => {
    console.log(payload);
    state.opthalList.push(payload);
  },
  setPediatric: (state: State, payload: DoctorsList) => {
    console.log(payload);
    state.pediatricList.push(payload);
  },
  setCurrentUser: (state: State, payload: SignUpData) => {
    state.currentPatientDetails = payload;
  },
  setUppcomingAppoiments: (state: State, payload: DoctorsList) => {
    state.uppcomingAppoiments.push(payload);
  },
  settodaysAppoiments: (state: State, payload: DoctorsList) => {
    console.log(payload);
  },
  currentCancelled: (state: State, payload: DoctorsList) => {
    state.currentCancelled = payload;
  },
  setcompletedAppoiments: (state: State, payload: DoctorsList) => {
    state.completedAppoiments.push(payload);
  },
  cancelledAppoiment: (state: State, payload: DoctorsList) => {
    state.cancelledAppoiments.push(payload);
  },

  setMessages: (state: State, payload: Messages) => {
    state.messages.push(payload);
  },
};
