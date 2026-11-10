---
layout: default
title: How It Works
description: How Vayner Group takes a project from brief to launch.
---
<section class="page-top">
  <div class="container">
    <div class="title">
      <span class="en">How It Works</span>
      <h2>A structured process, from brief to launch</h2>
      <div class="bar"></div>
    </div>
    <div class="steps">
      {% for step in site.data.process %}
      <div class="step">
        <span class="step-num">{{ forloop.index }}</span>
        <h3>{{ step.title }}</h3>
        <p>{{ step.desc }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="alt">
  <div class="container">
    <div class="title">
      <span class="en">Our Standards</span>
      <h2>What every project includes</h2>
      <div class="bar"></div>
    </div>
    <div class="grid two">
      {% for w in site.data.why %}
      <div class="card">
        <h3>{{ w.title }}</h3>
        <p>{{ w.desc }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="container center">
    <h2>Ready to begin?</h2>
    <a class="btn" href="{{ '/contact/' | relative_url }}">Start a project</a>
  </div>
</section>
