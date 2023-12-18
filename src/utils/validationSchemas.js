import * as Yup from "yup";

const passwordRules = /^[a-zA-Z\d@$!%*?&]{8,}$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .max(50, "Too Long!")
    .matches(passwordRules, "Must be Az, 1-9 & @ # $ %")
    .required("Required"),
});

const YourGoalSchema = Yup.object().shape({
  goal: Yup.string().required("Choose one of the options"),
});

const SelectGenderSchemas = Yup.object().shape({
  gender: Yup.string().required(),
  age: Yup.number()
    .typeError("Age must be a number")
    .min(8, "Too Young!")
    .max(120, "Too Old!")
    .required("Required"),
});

const BodyParametrsSchema = Yup.object().shape({
  height: Yup.number()
    .typeError("Height must be a number")
    .min(120, "Too Short!")
    .max(220, "Too High!")
    .required("Required"),
  weight: Yup.number()
    .typeError("Weight must be a number")
    .min(4, "Too Light!")
    .max(300, "Too Heavy!")
    .required("Required"),
});

const YourActivitySchema = Yup.object().shape({
  activity: Yup.string().required("Choose one of the options"),
});

export {
  SignupSchema,
  YourGoalSchema,
  SelectGenderSchemas,
  BodyParametrsSchema,
  YourActivitySchema,
};
