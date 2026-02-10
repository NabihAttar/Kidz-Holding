"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import countries from "world-countries";
import DropdownSelect from "@/components/common/DropdownSelect";

type InquiryFormEvent = React.FormEvent<HTMLFormElement>;

export default function InquiryForm() {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  // ✅ dropdown state (because DropdownSelect is custom)
  const [country, setCountry] = useState("");
  const [interestCountry, setInterestCountry] = useState("");

  const countryOptions = useMemo(() => {
    const list =
      (countries ?? [])
        .map((c) => c?.name?.common)
        .filter(Boolean) as string[];

    return [
      "Country*",
      ...Array.from(new Set(list)).sort((a, b) => a.localeCompare(b)),
    ];
  }, []);

  const handleShowMessage = (ok: boolean) => {
    setSuccess(ok);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  const handleSubmit = (e: InquiryFormEvent) => {
    e.preventDefault();

    // ✅ manual required validation for custom dropdowns
    if (!country) {
      alert("Please select your country.");
      handleShowMessage(false);
      return;
    }
    if (!interestCountry) {
      alert("Please select your territory of interest.");
      handleShowMessage(false);
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    console.log("Inquiry form submitted:", Object.fromEntries(formData.entries()));

    form.reset();
    setCountry("");
    setInterestCountry("");
    handleShowMessage(true);
  };

  return (
    <>
      <div className="page-title style-1 bg-img-13">
        <div className="tf-container position-relative">
          <div className="page-title-content">
            <div className="breadkcum">
              <Link href={`/`} className="caption-1 home">
                Contact
              </Link>{" "}
              <span className="arrow-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_9360_28061)">
                    <path
                      d="M3.125 10H16.875"
                      stroke="#A2A3AB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.25 4.375L16.875 10L11.25 15.625"
                      stroke="#A2A3AB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath>
                      <rect id="clip0_9360_28061" width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>{" "}
              <span className="caption-1 page-breadkcum">Franchise Form</span>
            </div>

            <h2 className="title-page-title">Franchise Form</h2>
          </div>
        </div>
      </div>

      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <form id="inquiryForm" className="form-contact-us" onSubmit={handleSubmit}>
              <h3 style={{ marginBottom: "24px" }}>Franchise Form</h3>

              {/* Row 1: Full name + Country */}
              <div className="cols">
                <fieldset className="item inputEntity">
                  <label htmlFor="fullName">Title and full name*</label>
                  <div className="inputParent">
                    <span className="errormsg" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="mandatory"
                      required
                    />
                  </div>
                </fieldset>

                <fieldset className="item inputEntity">
                  <label>Country*</label>
                  <div className="inputParent">
                    <span className="errormsg" />

                    {/* ✅ Custom dropdown that looks like your select */}
                    <DropdownSelect
                      options={countryOptions}
                      selectedValue={country}
                      onChange={(val) => setCountry(val === "Country*" ? "" : val)}
                      menuHeight={240} // ✅ fixed height + scroll
                      buttonClassName="mandatory form-control list"
                    />

                    {/* ✅ ensure FormData captures it */}
                    <input type="hidden" name="country" value={country} />
                  </div>
                </fieldset>
              </div>

              {/* Row 2: Telephone 1 + Telephone 2 */}
              <div className="cols">
                <fieldset className="item inputEntity">
                  <label htmlFor="telephone1">Telephone 1*</label>
                  <div className="inputParent">
                    <span className="errormsg" />
                    <input
                      type="text"
                      id="telephone1"
                      name="telephone1"
                      className="mandatory form-control phone"
                      required
                    />
                  </div>
                </fieldset>

                <fieldset className="item inputEntity">
                  <label htmlFor="telephone2">Telephone 2</label>
                  <div className="inputParent">
                    <input type="text" id="telephone2" name="telephone2" className="form-control phone" />
                  </div>
                </fieldset>
              </div>

              {/* Row 3: Fax + Email */}
              <div className="cols">
                <fieldset className="item inputEntity">
                  <label htmlFor="fax">Fax</label>
                  <div className="inputParent">
                    <span className="errormsg" />
                    <input type="text" id="fax" name="fax" className="form-control" />
                  </div>
                </fieldset>

                <fieldset className="item inputEntity">
                  <label htmlFor="email">e-mail address*</label>
                  <div className="inputParent">
                    <span className="errormsg" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mandatory email form-control phone"
                      required
                    />
                  </div>
                </fieldset>
              </div>

              {/* Company Name */}
              <fieldset className="item inputEntity">
                <label htmlFor="companyName">Company Name*</label>
                <div className="textareaParent">
                  <span className="errormsg" />
                  <textarea id="companyName" name="companyName" className="mandatory form-control" rows={2} required />
                </div>
              </fieldset>

              {/* Industry */}
              <fieldset className="item inputEntity">
                <label htmlFor="industry">Industry*</label>
                <div className="textareaParent">
                  <span className="errormsg" />
                  <textarea id="industry" name="industry" className="mandatory form-control" rows={2} required />
                </div>
              </fieldset>

              {/* Address */}
              <fieldset className="item inputEntity">
                <label htmlFor="address">Address*</label>
                <div className="textareaParent">
                  <span className="errormsg" />
                  <textarea id="address" name="address" className="mandatory form-control" rows={2} required />
                </div>
              </fieldset>

              {/* Row: Territory of interest country + state */}
              <div className="cols">
                <fieldset className="item inputEntity">
                  <label>Territory of Interest*</label>
                  <div className="inputParent">
                    <span className="errormsg" />

                    <DropdownSelect
                      options={countryOptions}
                      selectedValue={interestCountry}
                      onChange={(val) => setInterestCountry(val === "Country*" ? "" : val)}
                      menuHeight={240}
                      buttonClassName="mandatory form-control list"
                    />

                    <input type="hidden" name="interestCountry" value={interestCountry} />
                  </div>
                </fieldset>

                <fieldset className="item inputEntity">
                  <label htmlFor="interestState">Province/State/City*</label>
                  <div className="inputParent">
                    <input type="text" id="interestState" name="interestState" className="mandatory form-control" required />
                  </div>
                </fieldset>
              </div>

              {/* --- keep the rest of your form exactly as-is below --- */}
              {/* ... (your radio sections + remarks etc stay unchanged) ... */}

              {/* Required note */}
              <div className="requiredFields" style={{ marginTop: "12px" }}>
                * Mandatory Fields
              </div>

              {/* Status message */}
              <div
                className={`tfSubscribeMsg footer-sub-element ${showMessage ? "active" : ""}`}
                style={{ marginTop: "12px", marginBottom: "12px" }}
              >
                {success ? (
                  <p style={{ color: "rgb(52, 168, 83)", margin: 0 }}>
                    Form submitted successfully.
                  </p>
                ) : (
                  <p style={{ color: "red", margin: 0 }}>Something went wrong</p>
                )}
              </div>

              {/* Submit */}
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
                <button
                  type="submit"
                  className="tf-btn style-1 bg-on-suface-container text-center"
                  style={{
                    width: "auto",
                    padding: "8px 20px",
                    fontSize: "14px",
                    minWidth: "150px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}