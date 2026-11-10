---
layout: default
title: Start a Project
description: Send your project brief to Vayner Group.
---
<section class="page-top">
  <div class="container narrow">
    <div class="title">
      <span class="en">Contact</span>
      <h2>Start your project</h2>
      <p class="sub">Share a few details and our team will respond within one business day with a recommended approach.</p>
      <div class="bar"></div>
    </div>
    <form id="contactForm" data-email="{{ site.email }}">
      <div class="row">
        <input type="text" name="name" placeholder="Full name*" required>
        <input type="text" name="company" placeholder="Company*" required>
      </div>
      <div class="row">
        <input type="email" name="email" placeholder="Work email*" required>
        <input type="tel" name="phone" placeholder="Phone number">
      </div>
      <div class="row">
        <select name="service" required>
          <option value="" disabled selected>Service needed*</option>
          <option>Website or landing page</option>
          <option>Web application</option>
          <option>Mobile app</option>
          <option>E-commerce store</option>
          <option>Custom software or integrations</option>
          <option>UI/UX design or support</option>
          <option>Other</option>
        </select>
        <select name="budget">
          <option value="" disabled selected>Budget range</option>
          <option>Under $5,000</option>
          <option>$5,000 – $20,000</option>
          <option>$20,000 – $50,000</option>
          <option>$50,000+</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <select name="timeline">
        <option value="" disabled selected>Expected timeline</option>
        <option>ASAP</option>
        <option>1–3 months</option>
        <option>3–6 months</option>
        <option>Flexible</option>
      </select>
      <textarea name="message" placeholder="Describe your project, goals and any existing systems*" required></textarea>
      <button class="btn" type="submit">Send brief</button>
    </form>
    <p class="contact-info">Prefer email? <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
  </div>
</section>
