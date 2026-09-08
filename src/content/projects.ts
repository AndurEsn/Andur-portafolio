import { Language, Project } from '../types';
import { grillProject } from './cases/grill';
import { supervisorProject } from './cases/supervisor';

export const PROJECTS = (lang: Language): Project[] => [grillProject(lang), supervisorProject(lang)];
