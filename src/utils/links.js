const GITHUB_PROJECT_REPO = 'https://github.com/mahimasarajacob2007-ai/sensors-and-actuators';
const GITHUB_RAW_PROJECT_REPO =
  'https://raw.githubusercontent.com/mahimasarajacob2007-ai/sensors-and-actuators/main';

export function buildGithubUrl(folderName) {
  return `${GITHUB_PROJECT_REPO}/tree/main/${encodeURIComponent(folderName)}`;
}

export function buildTinkercadImageUrl(filename) {
  return `${GITHUB_RAW_PROJECT_REPO}/${encodeURIComponent(filename)}`;
}

export function buildProjectLink(project) {
  return project.tinkercadUrl || buildTinkercadImageUrl(project.tinkercadImage);
}

export const profileLinks = {
  resume: '/resume-mahima-sara-jacob.pdf',
  github: 'https://github.com/mahimasarajacob2007-ai',
  linkedin: 'https://www.linkedin.com/in/mahima-sara-jacob',
  email: 'mailto:mahimasarajacob@gmail.com',
  phone: 'tel:+919876543210',
};
