import React from 'react';
import { HeroShowcase } from './HeroShowcase';
import { EditorialShowcase } from './EditorialShowcase';
import { FeatureGrid } from './FeatureGrid';
import { FullBleedShowcase } from './FullBleedShowcase';
import { ProjectOverview } from './ProjectOverview';

export {
  HeroShowcase,
  EditorialShowcase,
  FeatureGrid,
  FullBleedShowcase,
  ProjectOverview,
};

export const TemplateRenderer = ({ project, settings }) => {
  switch (project.selectedTemplate) {
    case 'template-b':
      return <EditorialShowcase project={project} settings={settings} />;
    case 'template-c':
      return <FeatureGrid project={project} settings={settings} />;
    case 'template-d':
      return <FullBleedShowcase project={project} settings={settings} />;
    case 'template-e':
      return <ProjectOverview project={project} settings={settings} />;
    case 'template-a':
    default:
      return <HeroShowcase project={project} settings={settings} />;
  }
};
