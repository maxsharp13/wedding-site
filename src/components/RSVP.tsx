"use client";

import { useState } from "react";

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    guests: "",
    attending: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: any) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (submitting) return;

    setSubmitting(true);

    const url = `https://script.google.com/macros/s/AKfycbxBByIyeV04aDQScmgRFbLhc1GhXqWz3fWObAq8HIk3VXmX8hl0gYVaVa8wV3e9DdYfrQ/exec?name=${encodeURIComponent(
      form.name
    )}&email=${encodeURIComponent(
      form.email
    )}&guests=${encodeURIComponent(
      form.guests
    )}&attending=${encodeURIComponent(
      form.attending
    )}&message=${encodeURIComponent(form.message)}`;

    try {
      await fetch(url, {
        method: "GET",
        mode: "no-cors",
      });

      setSubmitted(true);

    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
      setSubmitting(false);
    }
  }

  return (
    <section className="max-w-xl mx-auto text-center">

      <h1 className="text-5xl mb-10 [font-family:var(--font-great-vibes)]">
        RSVP
      </h1>

      {submitted ? (
        <div className="bg-white p-10 rounded-xl shadow-lg border">
          <h2 className="text-3xl mb-4 text-[#1a2a44]">
            💍 Thank You!
          </h2>

          <p className="text-lg">
            Your RSVP has been received.
          </p>

          <p className="mt-4 text-gray-600">
            We can’t wait to celebrate with you!
          </p>
        </div>
      ) : (

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 border rounded-lg"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="p-3 border rounded-lg"
          required
        />

        <input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          value={form.guests}
          onChange={handleChange}
          className="p-3 border rounded-lg"
          required
        />

        <select
          name="attending"
          value={form.attending}
          onChange={handleChange}
          className="p-3 border rounded-lg"
          required
        >
          <option value="">Will you attend?</option>
          <option value="yes">Joyfully Accept</option>
          <option value="no">Regretfully Decline</option>
        </select>

        <textarea
          name="message"
          placeholder="Message for the couple"
          value={form.message}
          onChange={handleChange}
          className="p-3 border rounded-lg"
          rows={4}
        />

        <button
          type="submit"
          disabled={submitting}
          className={`py-3 rounded-lg shadow text-white transition ${
            submitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#1a2a44] hover:opacity-90"
          }`}
        >
          {submitting ? "Submitting..." : "Submit RSVP"}
        </button>

      </form>

      )}

    </section>
  );
}