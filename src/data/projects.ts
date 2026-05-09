import terracare from '../assets/images/terracare.png';
import embeddedproject from '../assets/images/embeddedproject.jpg';
import autonomouscar from '../assets/images/autonomous_car.png';

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  actionLabel: string;
  actionUrl: string;
  motivation: string;
  solution: string;
  systemOverview: Array<{ title: string; description: string }>;
  keyTechnicalWork: string[];
  technicalDecisions: string[];
  results: string;
  learned: string;
}

export const projects: ProjectData[] = [
  {
    id: 'terracare',
    title: 'TerraCare',
    subtitle: 'Geo-spatial optimization for healthcare access in Africa',
    description:
      'Built a continental-scale decision system that discovers underserved settlements and optimizes healthcare facility placement to reach the most vulnerable communities.',
    image: terracare,
    tags: ['Geospatial', 'Optimization', 'Healthcare', 'GPU', 'Clustering', 'Spatial Data'],
    actionLabel: 'View Project Presentation',
    actionUrl: 'https://www.youtube.com/watch?v=hszexzVk4YI',
    motivation:
      'This project is personal. I worked in a team of 3. My teammate\'s mother is a midwife, and I grew up seeing how women in labor turned to the closest help available. TerraCare was built to address the reality that healthcare access in Africa is a placement problem, not just a funding problem.',
    solution:
      'TerraCare combines 428 million building footprints, health facility locations, and populated place anchors to discover underserved settlements and optimize facility deployment across Africa.',
    systemOverview: [
      {
        title: 'Data Ingestion',
        description: 'Raw building and facility data are converted to Parquet with float32 precision and spatial partitioning so the pipeline can scale to continental workloads.',
      },
      {
        title: 'Anchor Layer',
        description: '503,000 GeoNames places are filtered to confirmed settlements, providing geographic anchors for population estimation.',
      },
      {
        title: 'Discover Layer',
        description: 'GPU-accelerated HDBSCAN clusters building density to discover ~96,000 previously unmapped settlements, adapting to both cities and sparse villages.',
      },
      {
        title: 'Merge & Validate',
        description: 'Overlaps are resolved and clusters are cross-validated against Africa’s GeoNames dataset to produce ~485,000 final settlements.',
      },
      {
        title: 'Population Estimation',
        description: 'Buildings within each settlement are aggregated to estimate population, capturing roughly 1.47 billion people.',
      },
      {
        title: 'Accessibility',
        description: 'A BallTree index with haversine distance computes nearest health facility access for every settlement, including cross-border matching.',
      },
      {
        title: 'Optimization',
        description: 'A weighted location model scores placements by population served and distance from care to find the most equitable facility deployment.',
      },
    ],
    keyTechnicalWork: [
      'Processed 428 million building footprints and 94,846 healthcare facility locations across 50 countries.',
      'Built GPU-accelerated clustering and spatial indexing to discover settlements at continental scale.',
      'Applied optimization to rank facility placements by population served and distance from existing care.',
    ],
    technicalDecisions: [
      'Used buildings as the best available proxy for human presence across Africa.',
      'Applied GPU-accelerated HDBSCAN to discover settlements accurately in both dense and sparse regions.',
      'Optimized placement with a weighted coverage model to balance equity and efficiency.',
      'Designed the pipeline for large-scale data engineering first, because HPC is the prerequisite for this problem at continental scale.',
    ],
    results:
      'TerraCare detected ~485,000 settlements, identified 442 million people living in healthcare deserts, and produced 77,000 optimal placements that could resolve 98% of critical access gaps.',
    learned:
      'Healthcare access is a placement problem before it is a resource problem, and building scalable spatial pipelines is essential for real-world impact.',
  },
  {
    id: 'embedded-systems',
    title: 'Embedded Systems Project',
    subtitle: 'PCB design and firmware for a smart alarm clock',
    description:
      'Designed and built a PCB-based alarm clock with wireless features and embedded firmware for real-time operation.',
    image: embeddedproject,
    tags: ['Embedded', 'PCB', 'Firmware', 'C Programming', 'Hardware'],
    actionLabel: 'View Demo Video (Comming Soon)',
    actionUrl: '',
    motivation:
      'I wanted to create a product-level embedded system that combined hardware, firmware, and user interaction in a single project.',
    solution:
      'Built the full system from schematic to PCB to firmware, including alarm scheduling, audio output, and wireless connectivity.',
    systemOverview: [
      {
        title: 'Hardware Layer',
        description: 'Designed the PCB and selected components for the microcontroller, clock module, speaker, and wireless interface.',
      },
      {
        title: 'Firmware Layer',
        description: 'Implemented real-time alarm logic, user input handling, and device state management in embedded C.',
      },
      {
        title: 'User Interface',
        description: 'Created a simple configuration flow for setting alarms, toggling modes, and adjusting the display.',
      },
    ],
    keyTechnicalWork: [
      'Created the PCB schematic and layout using industry-standard design tools.',
      'Developed embedded firmware to handle alarm scheduling and device behavior.',
      'Tested hardware and software integration to ensure reliable operation.',
    ],
    technicalDecisions: [
      'Selected a microcontroller that balanced low-power performance with sufficient I/O resources.',
      'Kept the firmware architecture simple to reduce timing and debugging complexity.',
      'Prioritized reliability and maintainability over adding extra features.',
    ],
    results:
      'Delivered a functional prototype that operated as a standalone alarm clock with a polished PCB and reliable firmware.',
    learned:
      'Hardware projects require careful verification and firmware design that matches physical component constraints.',
  },
  {
    id: 'autonomous-car',
    title: 'Autonomous Car with Traffic Light System',
    subtitle: 'Safety testing for a miniature self-driving vehicle',
    description:
      'Built a miniature autonomous vehicle and traffic signal environment to evaluate decision-making and safety behavior.',
    image: autonomouscar,
    tags: ['Robotics', 'Sensors', 'Control Systems', 'Arduino', 'Safety'],
    actionLabel: 'View Project Video (Comming Soon)',
    actionUrl: '',
    motivation:
      'I wanted to explore how an autonomous vehicle can safely react to traffic lights in a controlled research prototype.',
    solution:
      'Developed the vehicle, sensor integration, and control logic needed to navigate a traffic light course safely.',
    systemOverview: [
      {
        title: 'Vehicle Platform',
        description: 'Built a small robotic car with motors, sensors, and control electronics.',
      },
      {
        title: 'Traffic Infrastructure',
        description: 'Designed a test track and traffic light system to simulate real-world intersections.',
      },
      {
        title: 'Control Layer',
        description: 'Implemented decision-making logic that responds to traffic signals and road conditions.',
      },
    ],
    keyTechnicalWork: [
      'Engineered the hardware and sensor system for a miniature autonomous vehicle.',
      'Developed safety-focused control logic to handle signal changes and navigation.',
      'Evaluated performance through scenario testing and iterative refinement.',
    ],
    technicalDecisions: [
      'Used deterministic control logic to keep behavior predictable and easy to validate.',
      'Built the testbed to focus on signal response rather than full autonomy.',
      'Balanced speed and safety by tuning the vehicle conservatively.',
    ],
    results:
      'The prototype consistently navigated traffic signals and demonstrated reliable safety behavior during testing.',
    learned:
      'Robotics work is grounded in repeated testing and tuning as much as it is in control logic.',
  },
];

export const projectLookup = Object.fromEntries(projects.map((project) => [project.id, project]));
