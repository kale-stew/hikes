# A Blog of Hiking Pictures

I wanted to get to know Gatsby better, so, using [`gatsby-starter-portfolio-emma`](https://github.com/LeKoArts/gatsby-starter-portfolio-emma), I built this. It has photos from various hikes I've gone on, with some additional information about each of those spots.

See the live version [here](https://kylieis.online/hikes).

## Development

### Scripts

`yarn run <script>` | Description
------------------ | -----------
`build` | Build the thing!
`deploy` | Deploy the thing
`dev` | Spin up a local instance of the blog
`format` | Prettify things

### Content

Every new post lives within its own folder in `content/hikes`, and needs the following:
- [ ] The folder name to reflect the hike date and a key word in reference (YYYY-ShortDescrip)
- [ ] A `cover.jpg/png` img to show on the home screen
- [ ] Any other imgs to reference in the blog post
- [ ] An `index.md` containing all necessary blog post data (below)

```
---
client: "YEAR"
title: ""
cover: "./cover.jpg"
date: "YYYY-MM-DD"
service: "<LOCATION> National Park"
color: "#7d92ad"
---

## Hike Description

## Photo Gallery

## More Resources
```
