import { Language, Project } from '../types';
import { agentsStudioProject } from './cases/agents-studio';
import { grillProject } from './cases/grill';
import { supervisorProject } from './cases/supervisor';

export const PROJECTS = (lang: Language): Project[] => [
  agentsStudioProject(lang),
  grillProject(lang),
  supervisorProject(lang),
];
