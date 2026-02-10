"use client";

import React, { useMemo, useState } from "react";
import axios from "axios";
import countries from "world-countries";
import DropdownSelect from "../common/DropdownSelect";

// ---- TYPES ----
interface ContactFormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  phone: HTMLInputElement;
  city: HTMLInputElement;
  message: HTMLTextAreaElement;
}

type ContactFormElement = HTMLFormElement & {
  elements: ContactFormElements;
};

type SendEmailEvent = React.FormEvent<ContactFormElement>;

export default function ContactForm() {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const [country, setCountry] = useState("");
  const [topic, setTopic] = useState("");

  const countryOptions = useMemo(() => {
    const list =
      (countries ?? [])
        .map((c) => c?.name?.common)
        .filter(Boolean) as string[];

    return [
      "Country",
      ...Array.from(new Set(list)).sort((a, b) => a.localeCompare(b)),
    ];
  }, []);

  const topicOptions = useMemo(
    () => ["Topic", "New Venture", "Management Consultation", "Other Inquiries"],
    []
  );

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  const sendEmail = async (e: SendEmailEvent): Promise<void> => {
    e.preventDefault();

    const form = e.currentTarget;
    const { name, email, phone, city, message } = form.elements;

    if (!name.value.trim()) {
      alert("Please enter your name.");
      setSuccess(false);
      handleShowMessage();
      return;
    }

    if (!email.value.trim() && !phone.value.trim()) {
      alert("Please provide at least a phone number or an email address.");
      setSuccess(false);
      handleShowMessage();
      return;
    }

    if (!country || country === "Country") {
      alert("Please select your country.");
      setSuccess(false);
      handleShowMessage();
      return;
    }

    if (!city.value.trim()) {
      alert("Please enter your city.");
      setSuccess(false);
      handleShowMessage();
      return;
    }

    if (!topic || topic === "Topic") {
      alert("Please select a topic.");
      setSuccess(false);
      handleShowMessage();
      return;
    }

    if (!message.value.trim()) {
      alert("Please enter your message.");
      setSuccess(false);
      handleShowMessage();
      return;
    }

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          name: name.value.trim(),
          email: email.value.trim(),
          phone: phone.value.trim(),
          country,
          city: city.value.trim(),
          topic,
          message: message.value.trim(),
        }
      );

      if ([200, 201].includes(response.status)) {
        form.reset();
        setCountry("");
        setTopic("");
        setSuccess(true);
        handleShowMessage();
      } else {
        setSuccess(false);
        handleShowMessage();
      }
    } catch (error) {
      setSuccess(false);
      handleShowMessage();
    }
  };

  return (
    <form
      id="contactform"
      className="form-contact-us"
      onSubmit={sendEmail}
      style={{ marginTop: "100px" }}
    >
      {/* Row 1: Name + Email */}
      <div className="cols">
        <fieldset className="item">
          <input type="text" name="name" id="name" placeholder="Name" required />
        </fieldset>

        <fieldset className="item">
          <input type="email" name="email" id="mail" placeholder="Email" />
        </fieldset>
      </div>

      {/* Row 2: Phone + Country */}
      <div className="cols">
        <fieldset className="item">
          <input type="tel" name="phone" id="phone" placeholder="Phone" />
        </fieldset>

        <fieldset className="item">
          <DropdownSelect
            options={countryOptions}
            selectedValue={country}
            onChange={(val) => setCountry(val === "Country" ? "" : val)}
            menuHeight={240} // ✅ size of box (scroll inside)
          />
        </fieldset>
      </div>

      {/* Row 3: City + Topic */}
      <div className="cols">
        <fieldset className="item">
          <input type="text" name="city" id="city" placeholder="City" required />
        </fieldset>

        <fieldset className="item">
          <DropdownSelect
            options={topicOptions}
            selectedValue={topic}
            onChange={(val) => setTopic(val === "Topic" ? "" : val)}
            menuHeight={180}
          />
        </fieldset>
      </div>

      {/* Message */}
      <fieldset>
        <textarea
          name="message"
          id="message"
          placeholder="Your Message*"
          defaultValue=""
          required
        />
      </fieldset>

      {/* Status */}
      <div className={`tfSubscribeMsg footer-sub-element ${showMessage ? "active" : ""}`}>
        {success ? (
          <p style={{ color: "rgb(52, 168, 83)" }}>Form submitted successfully.</p>
        ) : (
          <p style={{ color: "red" }}>Something went wrong</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="tf-btn style-1 w-full bg-on-suface-container text-center"
      >
        <span>Submit Inquiry</span>
      </button>
    </form>
  );
}