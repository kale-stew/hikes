# A Blog of Hiking Pictures

I wanted to get to know Gatsby better, so, I originally started this blog as an attempt to learn Gatsby while also creating a place for me to upload my hiking photos and trip descriptions. I init this project, and then left it alone for a year. When I circled back, everything about my Gatsby dependencies had changed, so I opted to use my recently acquired knowledge of `react-static` for this project instead.

My goal is to reproduce similar styles to what I had when I was using [LekoArts's Emma Theme](https://github.com/LeKoArts/gatsby-starter-portfolio-emma), but with _way_ less tooling so it plays nicely with `gh-pages`.

See the live version [here](https://kylieis.online/hikes).

## Development

### Scripts

| `yarn run <script>` | Description                          |
| ------------------- | ------------------------------------ |
| `build`             | Build the thing!                     |
| `deploy`            | Deploy the thing                     |
| `dev`               | Spin up a local instance of the blog |
| `format`            | Prettify things                      |

### Content

Every new post lives within its own folder in `content/hikes`, and needs the following:

- [ ] The folder name to reflect the hike date and a key word in reference (YYYY-ShortDescrip)
- [ ] A `cover.jpg/png` img to show on the home screen
- [ ] Any other imgs to reference in the blog post
- [ ] An `index.mdx` containing all necessary blog post data (below)

```
---
title: '
cover: './cover.jpg'
slug: ''
date: 'YYYY-MM-DD'
location: '<LOCATION> National/State Park'
---

## Hike Description

## Photo Gallery

## More Resources
```
