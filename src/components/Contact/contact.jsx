import React, { useState } from "react";
import "./contact.css";
import Accordion from "../FaqAccordian/accordian";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert("Form submitted: Thank you so much!");
  };

  return (
    <>
      <div className="form-container">
        <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
          <h1>Contact Us</h1>
          <input
            type="text"
            {...register("firstName", {
              required: "First name is required",
              validate: (value) => value.trim() !== "" || "Cannot be empty",
              minLength: { value: 1, message: "Must be at least 1 character" },
            })}
            id="firstName"
            placeholder="First Name"
          />
          {errors.firstName && (
            <p className="errorAlert">{errors.firstName.message} </p>
          )}
          <input
            type="text"
            {...register("lastName", {
              required: "Last name is required",
              validate: (value) => value.trim() !== "" || "Cannot be empty",
              minLength: { value: 1, message: "Must be at least 1 character" },
            })}
            id="lastName"
            placeholder="Last Name"
          />
          {errors.lastName && (
            <p className="errorAlert">{errors.lastName.message} </p>
          )}

          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "Enter valid email",
              },
            })}
            id="email"
            placeholder="Email"
          />
          {errors.email && <p className="errorAlert">{errors.email.message}</p>}
          <input type="text" id="mobile" placeholder="Mobile (Not Required)" />
          <h4>Leave your message here</h4>
          <textarea
            type="text"
            {...register("message", {
              required: "Message is required",
              validate: (value) =>
                value.trim() !== "" || "Message cannot be empty spaces",
              maxLength: {
                value: 1000,
                message: "Message can not exceed 1000 characters",
              },
            })}
            id="message"
            placeholder="Your message"
          ></textarea>
          {errors.message && (
            <p className="errorAlert">{errors.message.message}</p>
          )}
          <input type="submit" value="Send" id="button" />
        </form>

        {errors.length > 0 && (
          <div className="error-messages">
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Accordion />
    </>
  );
};

export default Contact;
