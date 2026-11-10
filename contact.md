---
layout: default
title: Contact
description: Get in touch with Vayner Group.
---
<section class="page-top">
  <div class="container">
    <div class="title">
      <span class="en">Contact Us</span>
      <h2>Get in touch</h2>
      <div class="bar"></div>
    </div>
    <form id="contactForm" data-email="{{ site.email }}">
      <div class="row">
        <input type="text" name="name" placeholder="Name*" required>
        <input type="email" name="email" placeholder="Email*" required>
      </div>
      <input type="tel" name="phone" placeholder="Phone number">
      <textarea name="message" placeholder="Message*" required></textarea>
      <button class="btn" type="submit">Send message</button>
    </form>
    <p class="contact-info"><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
  </div>
</section>
