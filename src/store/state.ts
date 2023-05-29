import type { DoctorsList, Messages, SignUpData } from "../types";

export default {
  doctorsList: [] as Array<DoctorsList>,
  dentistList: [] as Array<DoctorsList>,
  generalList: [] as Array<DoctorsList>,
  nutririonList: [] as Array<DoctorsList>,
  nurologistList: [] as Array<DoctorsList>,
  opthalList: [] as Array<DoctorsList>,
  pediatricList: [] as Array<DoctorsList>,
  cancelledAppoiments: [] as Array<DoctorsList>,
  uppcomingAppoiments: [] as Array<DoctorsList>,
  completedAppoiments: [] as Array<DoctorsList>,
  todaysAppoiments: [] as Array<DoctorsList>,
  currentPatientDetails: {} as SignUpData,
  bodyLoader: true,
  messages: [] as Array<Messages>,
  currentCancelled: {} as DoctorsList,
};
