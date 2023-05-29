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
  currentPatientDetails: object;
  bodyLoader: boolean;
  messages: Array<Messages>;
  currentCancelled: object;
  todaysAppoiments: Array<DoctorsList>;
};

export type Messages = {
  text: string;
  senderId: string;
  reciverId: string;
  date: Date;
  docId: string;
};

export type SignUpData = {
  dob: string;
  email: string;
  firstName: string;
  gender: string;
  height: string;
  id: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  weight: string;
  agree: boolean;
  test: boolean;
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
  day: string;
  month: string;
  year: string;
  Dieases: Array<string>;
  Details: string;
};
export type DoctorsList = {
  name: string;
  specialization: string;
  schedule: Date;
  descrpition: string;
  docId: string;
  hours: number;
  minutes: number;
};
