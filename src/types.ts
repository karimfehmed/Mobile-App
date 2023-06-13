import FamilyDetailsVue from "./components/FamilyDetails.vue";

export type State = {
  doctorsList: Array<DoctorsList>;
  dentistList: Array<DoctorsList>;
  generalList: Array<DoctorsList>;
  nutririonList: Array<DoctorsList>;
  nurologistList: Array<DoctorsList>;
  opthalList: Array<DoctorsList>;
  pediatricList: Array<DoctorsList>;
  cancelledAppoiments: Array<DoctorsList>;
  uppcomingAppoiments: Array<DoctorsList>;
  completedAppoiments: Array<DoctorsList>;
  test: Array<DoctorsList>;
  currentPatientDetails: PatientDetails;
  bodyLoader: boolean;
  messages: Array<Messages>;
  currentCancelled: DoctorsList;
  todaysAppoiments: Array<DoctorsList>;
  listAppoimentLoader: boolean;
  bookAppoimentLoader: boolean;
  signUpLoader: boolean;
  signInLoader: boolean;
  personalInfoLoader: boolean;
};

export type PatientDetails = {
  dob: Date;
  email: string;
  firstName: string;
  gender: string;
  height: number;
  id: string;
  lastName: string;
  password: string;
  phoneNumber: number;
  weight: number;
};

export type Messages = {
  text: string;
  senderId: string;
  reciverId: string;
  date: Date;
  docId: string;
};

export type SignUpData = {
  dob: Date;
  email: string;
  firstName: string;
  gender: string;
  height: number;
  lastName: string;
  password: string;
  phoneNumber: number;
  weight: number;
  agree: boolean;
  test: boolean;
  id: string;
};

export type personalDetails = {
  married: boolean;
  child: boolean;
  noOfChilds: string;
  smoke: boolean;
  tobacooProducts: boolean;
  alcohol: boolean;
};
export type familyDetails = {
  firstName: string;
  lastName: string;
  day: number;
  month: number;
  year: number;
  Dieases: Array<string>;
  Details: string;
};
export type DoctorsList = {
  name: string;
  specialization: string;
  schedule: Date;
  day: number;
  month: number;
  year: number;
  date: number | Date;
  time: string;
  descrpition: string;
  docId: string;
  hours: number;
  minutes: number;
};

export interface ThemeState {
  darkMode: boolean;
}
