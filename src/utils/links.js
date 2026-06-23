const GITHUB_PROJECT_REPO = 'https://github.com/mahimasarajacob2007-ai/sensors-and-actuators-website-';
const GITHUB_RAW_PROJECT_REPO =
  'https://raw.githubusercontent.com/mahimasarajacob2007-ai/sensors-and-actuators-website-/main';

function encodeRepoPath(path) {
  return path
    .replaceAll('\\', '/')
    .split('/')
    .map((segment) => encodeURIComponent(segment).replaceAll('(', '%28').replaceAll(')', '%29'))
    .join('/');
}

export function buildGithubUrl(folderName) {
  return `${GITHUB_PROJECT_REPO}/tree/main/${encodeRepoPath(folderName)}`;
}

export function buildTinkercadImageUrl(filename) {
  return `${GITHUB_RAW_PROJECT_REPO}/${encodeRepoPath(filename)}`;
}

export function buildProjectLink(project) {
  return project.tinkercadUrl || buildTinkercadImageUrl(project.tinkercadImage);
}

export const profileLinks = {
  resume: '/resume-mahima-sara-jacob.pdf',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  email: 'mailto:mahimasj07@gmail.com',
};
