# Paper Atlas

An independent, continuously maintained paper-reading website focusing on Transformer, attention mechanisms, interpretability and efficient inference.

## Live site

Once GitHub Pages is enabled and deployed: https://fenglin178.github.io/paper-atlas/

## Reading library

- [Efficient Streaming Language Models with Attention Sinks](papers/2309.17453.html) — [arXiv:2309.17453](https://arxiv.org/abs/2309.17453), ICLR 2024. Includes interactive Softmax and KV-cache demos.

- [When Attention Sink Emerges in Language Models: An Empirical View](papers/2410.10781.html) — [arXiv:2410.10781](https://arxiv.org/abs/2410.10781), ICLR 2025.

## Adding papers

1. Add a standalone HTML article under `papers/` using its arXiv ID as filename.
2. Add metadata to `papers/index.js` and point `page` to the new article.
3. Reuse `style.css` for styling; use a separate article script for interactions when needed.
4. Cite paper titles, links and original tables; label illustrative charts as illustrations.

## Publishing

This is a static HTML/CSS/JS website with no build step. The `.github/workflows/pages.yml` workflow uploads the repository site to GitHub Pages on pushes to `main`. Go to **Settings → Pages → Build and deployment → Source: GitHub Actions** once to enable deployment.

## Principles

Distinguish original paper claims, findings from prior literature, evidence-based inference and open questions. Do not present illustrative visualization data as research measurements.
