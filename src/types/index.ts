import React from 'react';

export type EcosystemColor = 'emerald' | 'blue' | 'purple' | 'orange';

export interface ProjectLink {
    label: string;
    url: string;
}

export interface ProjectCardProps {
    title: string;
    category: string;
    icon: React.ReactNode;
    description: string;
    features: string[];
    techs: string[];
    links: ProjectLink[];
    color: EcosystemColor;
}

export interface FeatureRowProps {
    icon: React.ReactNode;
    title: string;
    text: string;
}

export interface AppNodeProps {
    icon: React.ElementType;
    title: string;
    desc: string;
    color: EcosystemColor;
}

export interface SocialFeedCardProps {
    platform: string;
    handle: string;
    content: string;
    image: string;
}

export interface GraphNodeProps {
    id: string;
    label: string;
    icon: React.ElementType;
    subtext?: string;
    status?: 'active' | 'idle' | 'warning';
    position: { x: number; y: number };
}

export interface WorkflowGraphProps {
    nodes: GraphNodeProps[];
    connections: { from: string; to: string; type?: 'flowing' | 'static' | 'dashed' }[];
}
