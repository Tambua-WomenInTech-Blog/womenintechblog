---
title: "{{ replace .Name "-" " " | title }}"
image: /images/avatars/{{ .Name }}/{{ .Name }}.png
social:
  - icon: "la-github"
    link: https://github.com/{{ .Name }}
  - icon: "la-linkedin-in"
    link: https://linked.in/{{ .Name }}
  - icon: "la-twitter"
    link: https://twitter.com/@{{ .Name }}
---

Wite something very cool about yourself. Feel free to write a longer bio.Remeber to edit your social links.