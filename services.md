---
layout: default
title: Services
description: Web development, brand identity and digital marketing from Vayner Group.
---
<section class="page-top">
  <div class="container">
    <div class="title">
      <span class="en">Services</span>
      <h2>What we do</h2>
      <div class="bar"></div>
    </div>
    <div class="grid">
      {% for s in site.data.services %}
      <div class="card">
        <span class="num">{{ forloop.index | prepend: '0' | slice: -2, 2 }}</span>
        <h3>{{ s.title }}</h3>
        <p>{{ s.desc }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
