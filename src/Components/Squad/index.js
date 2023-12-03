import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Graph from 'react-graph-vis';

const Squad = () => {
  const navigate = useNavigate();
  const data = [
    {
      employeeId: 1,
      employeeName: 'Sherin',
      department: 'Engineering',
      squad: "Evalu",
      mentees: [
        {
          id: 2,
          level: 'Level-1',
          department: 'Engineering',
          name: 'Magdy',
          job_title: 'Software Engineer 1',
          squad: "Evalu",
        },
      ],
      colleagues: [
        {
          id: 3,
          level: 'Level-2',
          department: 'Product',
          name: 'Nouran',
          job_title: 'Quality Control Engineer 4',
          squad: "Evalu",
        },
        {
          id: 4,
          level: 'Level-3',
          department: 'Engineering',
          name: 'Sara',
          job_title: 'Front-end Software Engineer 2',
          squad: "Evalu",
        },
      ],
      mentors: [
        {
          id: 5,
          level: 'Level-1',
          department: 'Engineering',
          name: 'Jolie',
          job_title: 'Software Engineer 1',
          squad: "Evalu",
        },
      ],
    },
  ];

  const [tooltip, setTooltip] = useState('');

  // Create nodes and edges from the provided data
  const nodes = [];
  const edges = [];
  const departmentNodes = new Map(); // To track department nodes

  // Collect unique departments from all employees
  const uniqueDepartments = new Set();
  // Collect unique departments from all employees, mentees, colleagues, and mentors
  data.forEach(employee => {
    uniqueDepartments.add(employee.department);

    employee.mentees.forEach(mentee => {
      uniqueDepartments.add(mentee.department);
    });

    employee.colleagues.forEach(colleague => {
      uniqueDepartments.add(colleague.department);
    });

    employee.mentors.forEach(mentor => {
      uniqueDepartments.add(mentor.department);
    });
  });

  // Create department nodes for each unique department
  uniqueDepartments.forEach(department => {
    const departmentNodeId = `dept_${department}`;
    nodes.push({
      id: departmentNodeId,
      label: department,
      color: '#F16666', // Set a specific color for departments
      shape: 'circle', // Set node shape to 'circle'
      size: 20, // Set the size of the node
    });
    departmentNodes.set(department, departmentNodeId); // Map department to its node ID
  });

  // Add a node for "Evalu" squad
  const evaluSquadNodeId = 'evaluSquad';
  nodes.push({
    id: evaluSquadNodeId,
    label: 'Evalu Squad',
    color: '#57C7E3', // Set a specific color for "Evalu" squad
    shape: 'circle', // Set node shape to 'circle'
    size: 20, // Set the size of the node
  });

  data.forEach(employee => {
    // Add employee node
    nodes.push({
      id: employee.employeeId,
      label: employee.employeeName,
      color: '#C88FC0',
      shape: 'circle', // Set node shape to 'circle'
      size: 20, // Set the size of the node
    });

    // Add edge between employee and department
    edges.push({
      from: employee.employeeId,
      to: departmentNodes.get(employee.department),
      label: 'Belongs To',
    });

    // Add edge between employee and "Evalu" squad
    edges.push({
      from: employee.employeeId,
      to: evaluSquadNodeId,
      label: 'Member Of',
    });

    // Add edges for mentees, colleagues, and mentors
    const addRelations = (relationType, relationColor) => {
      employee[relationType].forEach(relation => {
        // Add node for mentee, colleague, or mentor
        nodes.push({
          id: relation.id,
          label: relation.name,
          color: relationColor,
          shape: 'circle', // Set node shape to 'circle'
          size: 20, // Set the size of the node
        });

        // Add edge between employee and mentee, colleague, or mentor
        edges.push({
          from: employee.employeeId,
          to: relation.id,
          label: `${relationType.charAt(0).toUpperCase() + relationType.slice(1)}`,
        });

        // Add edge between mentee, colleague, or mentor and department
        edges.push({
          from: relation.id,
          to: departmentNodes.get(relation.department),
          label: 'Belongs To',
        });

        // Add edge between mentee, colleague, or mentor and "Evalu" squad
        edges.push({
          from: relation.id,
          to: evaluSquadNodeId,
          label: 'Member Of',
        });
      });
    };

    addRelations('mentees', '#8DCB93');
    addRelations('colleagues', '#8DCB93');
    addRelations('mentors', '#8DCB93');
  });

  const graph = {
    nodes,
    edges,
  };

  const options = {
    nodes: { shape: "box" },
    layout: {
      randomSeed: 5,
    },
    edges: {
      color: '#ddd',
    },
    height: '100%', // Set height to '100%' for fullscreen
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
      if (nodes && nodes.length > 0) {
        const selectedNodeId = nodes[0].toString();

        // Check if the selected node is a department node
        if (!selectedNodeId.startsWith('dept_') && selectedNodeId !== evaluSquadNodeId) {
          // Navigate only if it's not a department node
          navigate("/eval-hub/my-profile");
        }
      }
    },
  };

  return (
    <div style={{ height: '100vh' }}>
      <Graph graph={graph} options={options} events={events} />
      {tooltip && <div style={{ position: 'absolute', top: '10px', left: '10px' }}>{tooltip}</div>}
    </div>
  );
};

export default Squad;
