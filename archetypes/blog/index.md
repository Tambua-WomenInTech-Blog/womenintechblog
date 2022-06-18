---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
image: /images/hero/firstname-lastname/{{ .Name }}/hero.png
summary: "Blog excerpt"
author: "Your Name"
categories: ["Golang"]
tags: ["Channels", "Mutexes"]
draft: true
---