---
layout: default
title: Portfolio
description: Selected websites, mobile applications and e-commerce stores delivered by Vayner Group.
permalink: /portfolio/
---
<section class="page-hero">
  <div class="container">
    <p class="eyebrow">Portfolio</p>
    <h1>Selected work</h1>
    <p class="lead">Websites, mobile applications and e-commerce stores we have designed and delivered.</p>
  </div>
</section>

<section class="section portfolio-list">
  <div class="container">
    <div class="filters">
      <button class="filter is-active" data-filter="all">All</button>
      <button class="filter" data-filter="Websites">Websites</button>
      <button class="filter" data-filter="Mobile Apps">Mobile Apps</button>
      <button class="filter" data-filter="E-commerce">E-commerce</button>
    </div>

    {% assign projects = site.portfolio | sort: 'date' | reverse %}
    {% if projects.size > 0 %}
    <div class="project-grid">
      {% for p in projects %}
        {% include project-card.html project=p %}
      {% endfor %}
    </div>
    <p class="empty" id="portfolio-empty" hidden>No projects in this category yet.</p>
    {% else %}
    <p class="empty">Our selected projects will be published here shortly.</p>
    {% endif %}
  </div>
</section>
