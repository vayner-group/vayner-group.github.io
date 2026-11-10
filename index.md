---
layout: default
title: Home
---
<header class="hero">
  <div class="container">
    <img class="big" src="{{ '/assets/img/logo-white.png' | relative_url }}" alt="Vayner Group logo">
    <h1>We build presence worthy of your brand</h1>
    <p class="sub">Vayner Group is a full-service agency helping businesses grow through creative thinking and professional digital solutions.</p>
    <a class="btn" href="{{ '/services/' | relative_url }}">Explore our services</a>
  </div>
</header>

<section>
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

<section class="alt">
  <div class="container about">
    <div class="logo-box">
      <img src="{{ '/assets/img/logo-white.png' | relative_url }}" alt="Vayner Group">
    </div>
    <div>
      <div class="title">
        <span class="en">About Us</span>
        <h2>Who we are</h2>
        <div class="bar"></div>
      </div>
      <p>At Vayner Group, we believe every brand deserves a clear story, a strong identity, and a polished digital presence.</p>
      <p><a class="btn" href="{{ '/about/' | relative_url }}">Read more</a></p>
    </div>
  </div>
</section>
