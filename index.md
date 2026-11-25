---
layout: default
title: Software Development
description: Vayner Group designs and develops websites, mobile apps and e-commerce stores for businesses.
permalink: /
---
<header class="hero">
  <div class="container hero-inner">
    <p class="eyebrow">Software Development Company</p>
    <h1>We build websites, mobile apps and e-commerce stores for businesses.</h1>
    <p class="lead">Every project is delivered by a dedicated team of specialists, managed directly by Vayner Group from planning to launch.</p>
  </div>
</header>

<section id="services" class="section">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Services</p>
      <h2>What we build</h2>
    </div>
    <div class="services-grid">
      {% for s in site.data.services %}
      <article class="service-card" data-reveal>
        <span class="num">{{ forloop.index | prepend: '0' | slice: -2, 2 }}</span>
        <h3>{{ s.title }}</h3>
        <p>{{ s.desc }}</p>
        <ul class="tags">
          {% for item in s.items %}<li>{{ item }}</li>{% endfor %}
        </ul>
        <p class="outcome">{{ s.outcome }}</p>
      </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section alt">
  <div class="container team-grid">
    <div data-reveal>
      <p class="eyebrow">Our team</p>
      <h2>A dedicated specialist for every task</h2>
      <p>Each part of your project is handled by a specialist in that discipline: UI/UX design, front-end and back-end development, quality assurance and deployment.</p>
      <p>Our management team coordinates the work and stays responsible for the outcome, so you deal with one point of contact.</p>
    </div>
    <div data-reveal>
      <p class="eyebrow">Pricing</p>
      <h2>Highly competitive pricing</h2>
      <p>Our rates are very competitive compared to the market, without compromising on quality, communication or delivery.</p>
    </div>
  </div>
</section>

{% assign projects = site.portfolio | sort: 'date' | reverse %}
{% if projects.size > 0 %}
<section class="section">
  <div class="container">
    <div class="section-head split">
      <div>
        <p class="eyebrow">Portfolio</p>
        <h2>Selected work</h2>
      </div>
      <a class="text-link" href="{{ '/portfolio/' | relative_url }}">All projects</a>
    </div>
    <div class="project-grid three">
      {% for p in projects limit:3 %}
        {% include project-card.html project=p %}
      {% endfor %}
    </div>
  </div>
</section>
{% endif %}

<section class="section contact">
  <div class="container">
    <p class="eyebrow">Contact</p>
    <h2>Get in touch</h2>
    <ul class="contact-list">
      <li data-reveal>
        <span class="en">Email</span>
        <a href="mailto:{{ site.email }}">{{ site.email }}</a>
      </li>
      <li data-reveal>
        <span class="en">Phone</span>
        <a href="tel:{{ site.phone | remove: ' ' }}">{{ site.phone }}</a>
      </li>
      <li data-reveal>
        <span class="en">LinkedIn</span>
        <a href="{{ site.linkedin }}" target="_blank" rel="noopener">Vayner Group</a>
      </li>
    </ul>
  </div>
</section>
