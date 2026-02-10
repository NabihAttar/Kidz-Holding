"use client";

import React, { useEffect, useRef, useState } from "react";

type DropdownSelectProps = {
  options?: string[];

  // Controlled (recommended)
  selectedValue?: string;
  onChange?: (val: string) => void;

  // UI
  menuHeight?: number;
  buttonClassName?: string;
};

export default function DropdownSelect({
  options = [],
  selectedValue,
  onChange,
  menuHeight = 260,
  buttonClassName = "",
}: DropdownSelectProps) {
  const [open, setOpen] = useState(false);

  // Uncontrolled fallback (for old calls that don't pass onChange/selectedValue)
  const [internalValue, setInternalValue] = useState("");

  const wrapRef = useRef<HTMLDivElement | null>(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const placeholder = options?.[0] ?? "Select";
  const currentValue = selectedValue ?? internalValue;
  const label = currentValue || placeholder;

  const handlePick = (val: string) => {
    if (onChange) onChange(val);
    else setInternalValue(val);
    setOpen(false);
  };

  return (
    <div ref={wrapRef} style={{ position: "relative", width: "100%" }}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className={buttonClassName}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        <span style={{ opacity: currentValue ? 1 : 0.7 }}>{label}</span>
        <span style={{ fontSize: 12 }}>▼</span>
      </button>

      {open && (
        <div
          role="listbox"
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            width: "100%",
            background: "#fff",
            border: "1px solid #e5e5e5",
            borderRadius: 8,
            zIndex: 9999,
            height: menuHeight,
            overflowY: "auto",
            overflowX: "hidden",
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {options.map((opt) => {
            const isActive = opt === currentValue;
            return (
              <button
                key={opt}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => handlePick(opt)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "10px 14px",
                  border: "none",
                  background: isActive ? "#f5f5f5" : "transparent",
                  cursor: "pointer",
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}