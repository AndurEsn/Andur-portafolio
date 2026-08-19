import { Language, Project } from '../types';
import { grillProject } from './cases/grill';

export const PROJECTS = (lang: Language): Project[] => [grillProject(lang)];
