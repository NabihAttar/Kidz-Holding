"use client";

import React, { useState } from "react";
import axios from "axios";
import DropdownSelect from "./DropdownSelect";

interface ContactFormProps {
  parentClass?: string;
  btnClass?: string;
  isTitleCenter?: boolean;
  title?: string;
}

export default function ContactForm({
  parentClass = "form-contact-home style-border",
  btnClass = "tf-btn style-2 bg-on-suface-container w-full text-center",
  isTitleCenter = true,
  title = "Get A Free Quote",
}: ContactFormProps) {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  // ✅ dropdown state
  const [helpTopic, setHelpTopic] = useState("");

  const handleShowMessage = (ok: boolean) => {
    setSuccess(ok);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // ✅ validate custom dropdown (since it's not native select)
    if (!helpTopic) {
      alert("Please select how we can help you.");
      handleShowMessage(false);
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const email = (formData.get("email") as string)?.trim() || "";

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        { email } // keeping your backend payload as-is
      );

      if ([200, 201].includes(response.status)) {
        form.reset();
        setHelpTopic(""); // ✅ reset dropdown state
        handleShowMessage(true);
      } else {
        handleShowMessage(false);
      }
    } catch (error) {
      form.reset();
      setHelpTopic("");
      handleShowMessage(false);
    }
  };

  return (
    <form onSubmit={sendEmail} className={parentClass}>
      <h5 className={`title-form ${isTitleCenter ? "text-center" : ""}`}>
        {title}
      </h5>

      <fieldset>
        <input required type="text" placeholder="Full name" name="name" />
      </fieldset>

      <fieldset>
        {/* ✅ better than type="number" for phone */}
        <input required type="tel" placeholder="Phone number" name="phone" />
      </fieldset>

      <fieldset>
        <input required type="email" name="email" placeholder="Email address" />
      </fieldset>

      <fieldset>
        <DropdownSelect
          options={[
            "How can we help you?",
            "Option 1",
            "Option 2",
            "Option 3",
          ]}
          selectedValue={helpTopic}
          onChange={(val) =>
            setHelpTopic(val === "How can we help you?" ? "" : val)
          }
          menuHeight={240} // ✅ fixed height + scroll
          buttonClassName="form-control list"
        />

        {/* ✅ ensures FormData includes the dropdown value */}
        <input type="hidden" name="helpTopic" value={helpTopic} />
      </fieldset>

      <fieldset>
        <textarea
          required
          name="message"
          placeholder="Your message"
          defaultValue=""
        />
      </fieldset>

      <div className={`tfSubscribeMsg footer-sub-element ${showMessage ? "active" : ""}`}>
        {success ? (
          <p style={{ color: "rgb(52, 168, 83)" }}>Form submitted successfully.</p>
        ) : (
          <p style={{ color: "red" }}>Something went wrong</p>
        )}
      </div>

      <button type="submit" className={btnClass}>
        <span>Submit Request</span>
      </button>
    </form>
  );
}