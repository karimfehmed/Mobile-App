import FamilyDetailsVue from "./components/FamilyDetails.vue";

export type signUpData = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  gender?: string;
  day?: string;
  month?: string;
  year?: string;
  height?: string;
  weight?: string;
  agree?: boolean;
  test?: boolean;
};

export type personalDetails = {
  Married?: boolean;
  Child?: boolean;
  noOfChilds?: string;
  Smoke?: boolean;
  tobacooProducts?: boolean;
  Alcohol?: boolean;
};
export type familyDetails = {
  firstName?: string;
  lastName?: string;
  day?: string;
  month?: string;
  year?: string;
  Dieases?: Array<string>;
  Details?: string;
};
