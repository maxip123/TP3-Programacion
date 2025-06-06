import React from "react";
import { Container } from "react-bootstrap";
import useStore from "../store/useStore";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Footer = () => {
  const { color } = useStore();
  return (
    <footer className={color ? "bg-dark text-light" : "bg-light text-dark"}>
      <div className="text-center p-4">
        <a
          href="https://www.instagram.com/maxi_prieto19/"
          className="mx-2 text-reset"
        >
          <i className="bi bi-instagram fs-2"></i>
        </a>
        <a
          href="https://github.com/maxip123"
          className="mx-2 text-reset"
        >
          <i className="bi bi-github fs-2"></i>
        </a>
        <a
          href="https://www.facebook.com/juanmaximiliano.prieto/"
          className="mx-2 text-reset"
        >
          <i className="bi bi-facebook fs-2"></i>
        </a>
      </div>
    </footer>
  );
};
