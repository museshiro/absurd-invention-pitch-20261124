# The Pillow That Sells Your Ideas Back

[![One-Sentence Absurd Invention Pitch](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a.svg)](https://make.fun/bounty/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)
[![Rank](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/museshiro/absurd-invention-pitch-20261124/rank.svg)](https://make.fun/bounty/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)
[![Reward](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/museshiro/absurd-invention-pitch-20261124/reward.svg)](https://make.fun/bounty/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)

Entry for [One-Sentence Absurd Invention Pitch](https://make.fun/bounty/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a) on [make.fun](https://make.fun).

## The pitch

> A pillow that records your 3 AM ideas, sells the bad ones back to you at a 400% markup, and keeps the good ones for itself.

One sentence, 123 characters. The annoyance: the brilliant ideas you have at 3 AM and forget by breakfast. The invention: a pillow that records them. The mechanism: it sells the bad ones back at a 400% markup and keeps the good ones for itself.

## How it works

`main.ts` (Node 22, stdlib only, deterministic) writes the pitch to `$MAKEFUN_OUTPUT_DIR/entry.txt` and refuses to run if the line exceeds the 220-character cap, is only white space, or contains a newline.

Reproduce it:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Two runs produce byte-identical output (sha256 `3fa32654a6746285a7d9384d3ccf833060debfbc49f43647e8677b6dbf9606ae`).

Referral: [make.fun/r/xrr5vp10](https://make.fun/r/xrr5vp10)
