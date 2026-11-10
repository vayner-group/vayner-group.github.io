---
layout: default
title: Services
description: Websites, web applications, mobile apps, e-commerce stores and custom integrations delivered by vetted freelancers through Vayner Group.
---
<section class="page-top">
  <div class="container">
    <div class="title">
      <span class="en">Services</span>
      <h2>Engineering services for every stage</h2>
      <p class="sub">From a single landing page to a full product, every project is scoped, staffed and managed by Vayner Group.</p>
      <div class="bar"></div>
    </div>
    <div class="grid">
      {% for s in site.data.services %}
      <div class="card">
        <span class="num">{{ forloop.index | prepend: '0' | slice: -2, 2 }}</span>
        <h3>{{ s.title }}</h3>
        <p>{{ s.desc }}</p>
        <ul class="tags">
          {% assign items = s.items | split: ', ' %}
          {% for item in items %}<li>{{ item }}</li>{% endfor %}
        </ul>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="alt">
  <div class="container narrow">
    <div class="title">
      <span class="en">FAQ</span>
      <h2>Common questions</h2>
      <div class="bar"></div>
    </div>
    {% for f in site.data.faq %}
    <details class="faq">
      <summary>{{ f.q }}</summary>
      <p>{{ f.a }}</p>
    </details>
    {% endfor %}
  </div>
</section>

<section class="cta-band">
  <div class="container center">
    <h2>Tell us what you need to build</h2>
    <a class="btn" href="{{ '/contact/' | relative_url }}">Start a project</a>
  </div>
</section>
