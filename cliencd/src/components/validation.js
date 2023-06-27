export default function validation(values) {
  const errors = {};
  const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;
  if (values.fname === "") {
    errors.fname = "first name is required";
    console.log(errors.fname);
  }
  if (values.lname === "") {
    errors.lname = "last name is required";
  }
  if (values.email === "") {
    errors.email = "email is required";
  } else if (!emailRegExp.test(values.email)) {
    errors.email = "email did not match";
  }
  if (values.mobile === "") {
    errors.mobile = "mobile is required";
  }
  if (values.massage === "") {
    errors.massage = "massage is required";
  }
  return errors;
}
