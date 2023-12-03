import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Graph from 'react-graph-vis';

const Squad = () => {
  const navigate = useNavigate();
  const data = [
    {
      employeeId: 1,
      employeeName: 'Hadeer',
      mentees: [
        {
          id: 20,
          level: 'Level-2',
          department: 'Engineering',
          name: 'Ziad',
          job_title: 'Software Engineer 1',
        },
      ],
      colleagues: [
        {
          id: 5,
          level: 'Level-2',
          department: 'Quality',
          name: 'Hoda',
          job_title: 'Quality Control Engineer 2',
        },
        {
          id: 3,
          level: 'Level-3',
          department: 'Engineering',
          name: 'Sara',
          job_title: 'Front-end Software Engineer 2',
        },
        {
          id: 2,
          level: 'Level-2',
          department: 'Engineering',
          name: 'Ziad',
          job_title: 'Software Engineer 1',
        },
      ],
      mentors: [
        {
          id: 6,
          level: 'Level-3',
          department: 'Product',
          name: 'Yara',
          job_title: 'Product Manager',
        },
      ],
    },
  ];

  const [tooltip, setTooltip] = useState('');

  // Create nodes and edges from the provided data
  const nodes = [];
  const edges = [];

  data.forEach(employee => {
    nodes.push({
      id: employee.employeeId,
      label: employee.employeeName,
      color: '#1F78B4', // Set a specific color for the central node
      onClick: () => navigate("/eval-hub/my-profile"),
    });

    employee.mentees.forEach(mentee => {
      nodes.push({ id: mentee.id, label: mentee.name, color: '#FF7F00', onClick: () => navigate("/eval-hub/my-profile"), });
      edges.push({
        from: employee.employeeId,
        to: mentee.id,
        label: 'Mentee',
      });
    });

    employee.colleagues.forEach(colleague => {
      nodes.push({ id: colleague.id, label: colleague.name, color: '#33A02C', onClick: () => navigate("/eval-hub/my-profile"), });
      edges.push({
        from: employee.employeeId,
        to: colleague.id,
        label: 'Colleague',
      });
    });

    employee.mentors.forEach(colleague => {
      nodes.push({ id: colleague.id, label: colleague.name, color: '#CF1322' });
      edges.push({
        from: employee.employeeId,
        to: colleague.id,
        label: 'Mentors',
      });
    });
  });

  const graph = {
    nodes,
    edges,
  };

  const options = {
    nodes: { shape: "box" },
    layout: {
      randomSeed: 2,
    },
    edges: {
      color: '#ddd',
    },
    height: '500px',
    interaction: {
      hover: true,
      hoverConnectedEdges: true,
      selectConnectedEdges: false,
    },
    physics: {
      enabled: true,
      barnesHut: {
        gravitationalConstant: -8000,
        springConstant: 0.001,
        springLength: 200,
        avoidOverlap: 0.2,
      },
      hierarchicalRepulsion: {
        nodeDistance: 90,
      },
      stabilization: {
        enabled: true,
        iterations: 1000,
        fit:true,
        updateInterval: 25,
      },
    },
  };

  const events = {
    select: function (event) {
      const { nodes, edges } = event;
      console.log(nodes)
      if (nodes != null) {
        navigate("/eval-hub/my-profile")
        return;
      }
    },
  };

  return (
    <div>
      <Graph graph={graph} options={options} events={events} />
      {tooltip && <div style={{ position: 'absolute', top: '10px', left: '10px' }}>{tooltip}</div>}
    </div>
  );
};

export default Squad;
