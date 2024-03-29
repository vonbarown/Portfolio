import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ExternalLinks = () => {
  return (
    <div className="footer">
      <div className="external-links">
        <a
          href="https://github.com/vonbarown"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="fa-icon footer-icon github"
            icon={["fab", "github"]}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/vonielbrown/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="fa-icon footer-icon linked-in"
            icon={["fab", "linkedin"]}
          />
        </a>
      </div>
    </div>
  );
};
