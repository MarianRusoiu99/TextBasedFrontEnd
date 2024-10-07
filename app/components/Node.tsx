import React from 'react';

interface CustomNode {
  x: number;
  y: number;
  color?: string;
}

interface CustomLink {
  source: CustomNode;
  target: CustomNode;
  dashed?: boolean;
}

interface NetworkProps {
  width: number;
  height: number;
  graph: {
    nodes: CustomNode[];
    links: CustomLink[];
  };
}

const background = '#fff';

const Graph: React.FC<{ nodes: CustomNode[]; links: CustomLink[] }> = ({ nodes, links }) => {
  return (
    <>
      {links.map((link, index) => (
        <line
          key={index}
          x1={link.source.x}
          y1={link.source.y}
          x2={link.target.x}
          y2={link.target.y}
          stroke="black"
          strokeDasharray={link.dashed ? '5,5' : '0'}
        />
      ))}
      {nodes.map((node, index) => (
        <circle key={index} cx={node.x} cy={node.y} r={10} fill={node.color || 'black'} />
      ))}
    </>
  );
};

export default function Node({ width, height, graph }: NetworkProps) {
  return width < 10 ? null : (
    <svg width={width} height={height}>
      <rect width={width} height={height} rx={14} fill={background} />
      <Graph nodes={graph.nodes} links={graph.links} />
    </svg>
  );
}