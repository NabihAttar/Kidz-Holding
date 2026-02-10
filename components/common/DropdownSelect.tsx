"use client";

import React, { useEffect, useRef, useState } from "react";

type DropdownSelectProps = {
  options?: string[];
  selectedValue?: string; // "" shows placeholder
  onChange: (val: string) => void;
  menuHeight?: number; // ✅ fixed height (scroll inside)
};

export default function DropdownSelect({
  options = [],
  selectedValue = "",
  onChange,
  menuHeight = 260,
}: DropdownSelectProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const placeholder = options?.[0] ?? "Select";
  const label = selectedValue || placeholder;

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

  return (
    <div ref={wrapRef} style={{ position: "relative", width: "100%" }}>
      {/* Button */}
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          width: "100%",
          height: 50,
          padding: "0 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #e5e5e5",
          borderRadius: 8,
          background: "#fff",
          cursor: "pointer",
        }}
      >
        <span style={{ opacity: selectedValue ? 1 : 0.7 }}>{label}</span>
        <span style={{ fontSize: 12 }}>▼</span>
      </button>

      {/* Menu (fixed height + scroll inside) */}
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

            height: menuHeight, // ✅ fixed size
            overflowY: "auto", // ✅ scroll inside box
            overflowX: "hidden",
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {options.length === 0 ? (
            <div style={{ padding: "10px 14px", opacity: 0.7 }}>
              No options
            </div>
          ) : (
            options.map((opt) => {
              const isActive =
                opt === selectedValue || (!selectedValue && opt === placeholder);

              return (
                <button
                  key={opt}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
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
            })
          )}
        </div>
      )}
    </div>
  );
}