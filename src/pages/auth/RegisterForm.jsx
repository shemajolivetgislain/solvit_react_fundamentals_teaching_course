import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    console.log(event);
    setFormata((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formErrors = {};

    // VALIDATION

    if (!formData.firstName.trim()) {
      formErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      formErrors.lastName = "last name is required";
    }

    if (!formData.email.includes("@")) {
      formErrors.email = "Invalid Email address";
    }
    if (!formData.password.length <= 8) {
      formErrors.password = "Passowrd must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    console.log("Errors that is being returned", formErrors);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      alert("Registration Successful!");
      setFormata({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };
  return (
    <div className=" w-full px-10 py-12 flex flex-col gap-3">
      <span className=" w-full uppercase text-2xl font-semibold p-2 bg-primaryColor-800 text-white rounded-md">
        Registration Form
      </span>

      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input
          label={"First Name"}
          value={formData.firstName}
          onChange={handleChange}
          placeholder={"First Name"}
          name={"firstName"}
          variant={errors.firstName ? "danger" : "default"}
        />
        {errors.firstName && (
          <p className="text-sm text-red-600">{errors.firstName}</p>
        )}
        <Input
          label={"Last Name"}
          value={formData.lastName}
          onChange={handleChange}
          placeholder={"last Name"}
          name={"lastName"}
          variant={errors.lastName ? "danger" : "default"}
        />
        {errors.lastName && (
          <p className="text-sm text-red-600">{errors.lastName}</p>
        )}
        <Input
          label={"Email"}
          type={"email"}
          value={formData.email}
          onChange={handleChange}
          placeholder={"email"}
          name={"email"}
          variant={errors.email ? "danger" : "default"}
        />
        {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
        <Input
          label={"Password"}
          type={"text"}
          onChange={handleChange}
          value={formData.password}
          placeholder={"***********"}
          name={"password"}
          variant={errors.password ? "danger" : "default"}
        />

        {errors.password && (
          <p className="text-sm text-red-600">{errors.password}</p>
        )}
        <Input
          label={"Confirm Password"}
          type={"text"}
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder={"***********"}
          name={"confirmPassword"}
          variant={errors.confirmPassword ? "danger" : "default"}
        />

        {errors.confirmPassword && (
          <p className="text-sm text-red-600">{errors.confirmPassword}</p>
        )}
        <Button label={"Register"} type="submit" className="w-full" />
      </form>
    </div>
  );
};

export default RegisterForm;
