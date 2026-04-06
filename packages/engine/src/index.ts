// @domwokorach/ats-engine
// Main entry — re-exports all public sub-modules

export * from './nlp/index.js';
export * from './scorer/index.js';
export * from './job-parser/index.js';

// parser exports (async, requires pdfjs-dist / mammoth as peer deps)
export {
	parseResume,
	extractContact,
	detectSections,
	normalizeDate
} from './parser/index.js';
export type {
	ParseResult,
	ParsedResume,
	ResumeSection,
	ExperienceEntry,
	EducationEntry,
	ProjectEntry,
	CertificationEntry
} from './parser/types.js';
