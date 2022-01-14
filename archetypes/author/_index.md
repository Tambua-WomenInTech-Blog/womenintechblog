---
title: "{{ replace .Name "-" " " | title }}"
bio: |
  Something very cool about yourself.
  Feel free to write a longer bio.
avatar: /images/avatars/{{ .Name }}/{{ .Name }}.png
featured: false
social:
  - title: github
    url: https://github.com/{{ .Name }}
  - title: linkedin
    url: https://linked.com/{{ .Name }}
---