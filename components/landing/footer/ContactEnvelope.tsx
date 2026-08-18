"use client";

import { AnimatePresence, motion } from "motion/react";
import { FormEvent, useEffect, useId, useState } from "react";
import { footerContent } from "@/content/footer";
import styles from "./footer.module.css";

export function ContactEnvelope({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleId = useId();
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const key = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = prior;
      window.removeEventListener("keydown", key);
    };
  }, [open, onClose]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const number =
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ||
      footerContent.contact.whatsappFallback;
    const text = [
      "LIAHONA WEBSITE ENQUIRY",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");
    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    window.setTimeout(() => {
      setSending(false);
      onClose();
    }, 260);
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className={styles.contactBackdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => event.target === event.currentTarget && onClose()}
        >
          <motion.section
            className={styles.envelopeStage}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, scale: 0.88, y: 54, rotateX: 7 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 38 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
          >
            <button className={styles.contactClose} onClick={onClose} aria-label="Close contact form">×</button>
            <div className={styles.envelopeBody} aria-hidden="true" />
            <motion.div
              className={styles.envelopeFlap}
              aria-hidden="true"
              initial={{ rotateX: 0 }}
              animate={{ rotateX: -168 }}
              transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 0.8, 0.2, 1] }}
            />
            <motion.div
              className={styles.envelopeLetter}
              initial={{ y: 118, opacity: 0.2 }}
              animate={{ y: -38, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 0.8, 0.2, 1] }}
            >
              <header className={styles.letterHeader}>
                <span>LIAHONA GEOSERVICES</span>
                <h2 id={titleId}>Send a message</h2>
                <p>Complete the note and continue directly to WhatsApp.</p>
              </header>
              <form className={styles.contactForm} onSubmit={submit}>
                <label>
                  <span>Name</span>
                  <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
                </label>
                <label>
                  <span>Email address</span>
                  <input name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
                </label>
                <label>
                  <span>Message</span>
                  <textarea name="message" rows={4} required placeholder="Tell us what you need surveyed, mapped or consulted on." />
                </label>
                <button className={styles.whatsappSubmit} type="submit" disabled={sending}>
                  <span>{sending ? "Opening WhatsApp…" : "Continue to WhatsApp"}</span>
                  <i aria-hidden="true">↗</i>
                </button>
              </form>
              <i className={styles.envelopeStamp} aria-hidden="true">LG</i>
            </motion.div>
          </motion.section>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
