"use client";

import React, { useEffect, useRef, useState } from "react";

type DropdownSelectProps = {
  options?: string[];
  selectedValue?: string;
  onChange: (val: string) => void;

  menuHeight?: number;        // ✅ fixed menu height
  buttonClassName?: string;   // ✅ to match your select styling
};

export default function DropdownSelect({
  options = [],
  selectedValue = "",
  onChange,
  menuHeight = 260,
  buttonClassName = "",
}: DropdownSelectProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const placeholder = options?.[0] ?? "Select";
  const label = selectedValue || placeholder;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div ref={wrapRef} style={{ position: "relative", width: "100%" }}>
      {/* Button (styled like your select) */}
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-haspopup="listbox"
        aria-expanded={open}
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
        <span style={{ opacity: selectedValue ? 1 : 0.7 }}>{label}</span>
      </button>

      {/* Menu (fixed height + scroll) */}
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

            height: menuHeight,          // ✅ fixed size
            overflowY: "auto",           // ✅ scroll inside
            overflowX: "hidden",
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              role="option"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "10px 14px",
                border: "none",
                background: opt === selectedValue ? "#f5f5f5" : "transparent",
                cursor: "pointer",
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}