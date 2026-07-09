import React from "react";
import Reveal from "../Reveal";
import { GlassButton, SolidButton } from "../ui";
import SiteFooterMark from "../SiteFooterMark";
import { contactLinks, RESUME_URL } from "../../data/portfolio";

export default function Contact() {
  return (
    <div
      id="contact"
      style={{
        position: "relative",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "110px 28px 60px",
        textAlign: "center",
      }}
    >
      <Reveal>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: "34px",
            margin: "0 0 14px",
            letterSpacing: "-0.01em",
          }}
        >
          I love building and creating.
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <SolidButton href={contactLinks.email} fontSize="14.5px" padding="12px 22px">
            Email Me
          </SolidButton>
          <GlassButton href={contactLinks.linkedin} target="_blank" rel="noopener">
            LinkedIn
          </GlassButton>
          <GlassButton href={contactLinks.github} target="_blank" rel="noopener">
            GitHub
          </GlassButton>
          <GlassButton href={contactLinks.codepen} target="_blank" rel="noopener">
            CodePen
          </GlassButton>
          <GlassButton href={RESUME_URL} target="_blank" rel="noopener">
            Resume
          </GlassButton>
        </div>

        <SiteFooterMark topPad={44} />
      </Reveal>
    </div>
  );
}
