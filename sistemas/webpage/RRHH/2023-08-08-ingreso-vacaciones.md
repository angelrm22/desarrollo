---
slug: Ingreso Vacaciones
title: Ingreso Vacaciones
authors:
  name: Gao Wei
  title: Docusaurus Core Team
  url: https://github.com/wgao19
  image_url: https://github.com/wgao19.png
tags: [hola, docusaurus]
sidebar_position: 2
---


# `git-apply` Command Documentation

## Name

**git-apply** - Apply a patch to files and/or to the index

## Synopsis

```shell
git apply [--stat] [--numstat] [--summary] [--check] [--index | --intent-to-add] [--3way]
          [--apply] [--no-add] [--build-fake-ancestor=<file>] [-R | --reverse]
          [--allow-binary-replacement | --binary] [--reject] [-z]
          [-p<n>] [-C<n>] [--inaccurate-eof] [--recount] [--cached]
          [--ignore-space-change | --ignore-whitespace]
          [--whitespace=(nowarn|warn|fix|error|error-all)]
          [--exclude=<path>] [--include=<path>] [--directory=<root>]
          [--verbose | --quiet] [--unsafe-paths] [--allow-empty]
          [<patch>…]
