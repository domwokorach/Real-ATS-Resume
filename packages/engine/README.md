# @domwokorach/ats-engine

> ATS resume scoring engine — the pure TypeScript core powering [Real ATS Resume](https://github.com/domwokorach/Real-ATS-Resume).

[![npm version](https://img.shields.io/github/package-json/v/domwokorach/Real-ATS-Resume?filename=packages%2Fengine%2Fpackage.json)](https://github.com/domwokorach/Real-ATS-Resume/pkgs/npm/ats-engine)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- **Resume Parser** — PDF & DOCX parsing, section detection, contact extraction, date normalization
- **NLP Engine** — tokenizer, TF-IDF, skills taxonomy (250+ skills, 8+ industries), synonym resolution
- **ATS Scorer** — scores against 6 real ATS platforms: Workday, Taleo, iCIMS, Greenhouse, Lever, SuccessFactors
- **Job Description Parser** — extracts required/preferred skills, experience level, education requirements

## Installation

```bash
# npm
npm install @domwokorach/ats-engine

# pnpm
pnpm add @domwokorach/ats-engine
```

> Requires a GitHub Packages-scoped `.npmrc`:
> ```
> @domwokorach:registry=https://npm.pkg.github.com
> ```

## Usage

```ts
import { parseResume } from '@domwokorach/ats-engine/parser';
import { scoreResume } from '@domwokorach/ats-engine/scorer';
import { parseJobDescription } from '@domwokorach/ats-engine/job-parser';

// 1. Parse a resume file (File API)
const result = await parseResume(file);
if (!result.success) throw new Error(result.errors.join(', '));

// 2. Parse job description text
const job = parseJobDescription(jobDescriptionText);

// 3. Score against all 6 ATS platforms
const scores = scoreResume({
  resume: result.resume,
  jobDescription: job
});

scores.forEach(s => {
  console.log(`${s.platform}: ${s.score}/100`);
});
```

## Sub-module Exports

| Import path | Contents |
|---|---|
| `@domwokorach/ats-engine` | All modules re-exported |
| `@domwokorach/ats-engine/parser` | `parseResume`, `detectSections`, `extractContact` |
| `@domwokorach/ats-engine/nlp` | `tokenize`, TF-IDF, synonyms, skills taxonomy |
| `@domwokorach/ats-engine/scorer` | `scoreResume`, `scoreAgainstProfile`, ATS profiles |
| `@domwokorach/ats-engine/job-parser` | `parseJobDescription` |

## Peer Dependencies

| Package | Required for |
|---|---|
| `pdfjs-dist` | PDF parsing |
| `mammoth` | DOCX parsing |
| `compromise` | NLP tokenization |

## License

MIT © [Dominic Wokorach-O](https://github.com/domwokorach)
