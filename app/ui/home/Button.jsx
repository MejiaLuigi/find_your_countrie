"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({ label, onClick, className="", icon }) {
  return (
    <button onClick={onClick} className={className}>
      {icon ? (
        <>
          <FontAwesomeIcon icon={icon} className="text-text-light dark:text-text-dark mx-3" />
          {label}
        </>
      ) : (
        <p>{label}</p>
      )}
    </button>
  );
}