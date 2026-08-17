export type BodyServiceItem = {
  slot: 1 | 2 | 3;
  label: string;
  copy: string;
};

export type BodyState = {
  index: number;
  asset:
    | "TS_hand.png"
    | "TS_optics.png"
    | "TS_left.png"
    | "TS_right.png"
    | "TS_lens.png"
    | "TS_core.png"
    | "TS_disp.png"
    | "TS_base.png"
    | "TS_foot.png"
    | "TS_comp.png";
  heading: string;
  mobileHeadingScale: "xl" | "lg" | "md";
  subheading?: string;
  intro: string;
  services: readonly BodyServiceItem[];
  bottomLinks: readonly [string, string];
  outline: "SURVEYING" | "LAND" | "GEOSPATIAL" | "MAPPING" | "COMPLETE";
  techNote: string;
};

export const bodyStates: readonly BodyState[] = [
  {
    index: 1,
    asset: "TS_hand.png",
    heading: "SURVEYING",
    mobileHeadingScale: "xl",
    subheading: "ENGINEERING SURVEY",
    intro:
      "Accurate, efficient and comprehensive surveying solutions supporting development and infrastructure projects.",
    services: [
      {
        slot: 1,
        label: "ENGINEERING SURVEY",
        copy:
          "Topographical, route, setting-out and leveling surveys for roads, buildings and bridges.",
      },
      {
        slot: 2,
        label: "AERIAL SURVEY",
        copy:
          "High-resolution drones and photogrammetric processing for mapping, inspection and 3D modeling.",
      },
      {
        slot: 3,
        label: "HYDROGRAPHIC / BATHYMETRIC",
        copy:
          "Underwater mapping and data collection for coastal engineering, dredging and marine construction.",
      },
    ],
    bottomLinks: ["CADASTRAL SURVEY", "ENVIRONMENTAL IMPACT ASSESSMENT"],
    outline: "SURVEYING",
    techNote: "HANDLE ASSEMBLY  /  ERGONOMIC TOP HANDLE",
  },
  {
    index: 2,
    asset: "TS_optics.png",
    heading: "AERIAL SURVEY",
    mobileHeadingScale: "xl",
    intro:
      "High-resolution aerial capture and underwater mapping extend site intelligence beyond conventional ground observation.",
    services: [
      {
        slot: 1,
        label: "AERIAL SURVEY",
        copy:
          "Drone mapping and photogrammetric processing for large-scale mapping, site inspection and 3D modeling.",
      },
      {
        slot: 3,
        label: "SITE INTELLIGENCE",
        copy:
          "Spatial capture expands observation into measurable visual context.",
      },
    ],
    bottomLinks: ["HIGH-RESOLUTION CAPTURE", "MARINE DATA"],
    outline: "SURVEYING",
    techNote: "OPTICAL MODULE  /  PRECISION TARGETING",
  },
  {
    index: 3,
    asset: "TS_left.png",
    heading: "CADASTRAL SURVEY",
    mobileHeadingScale: "lg",
    subheading: "ENVIRONMENTAL IMPACT ASSESSMENT",
    intro:
      "Boundary definition and environmental intelligence support secure land ownership, responsible development and regulatory decisions.",
    services: [
      {
        slot: 1,
        label: "CADASTRAL SURVEY",
        copy:
          "Perimeter and layout design surveys define property boundaries and support land titling.",
      },
      {
        slot: 2,
        label: "LAND TITLING",
        copy:
          "Survey evidence supports formal ownership and real-estate development.",
      },
      {
        slot: 3,
        label: "ENVIRONMENTAL IMPACT",
        copy:
          "Risks and impacts are evaluated against regulatory requirements and sustainable strategies.",
      },
    ],
    bottomLinks: ["BOUNDARY VERIFICATION", "REGULATORY EVIDENCE"],
    outline: "SURVEYING",
    techNote: "LEFT HOUSING  /  FIELD CONTROL ACCESS",
  },
  {
    index: 4,
    asset: "TS_right.png",
    heading: "LAND SALES",
    mobileHeadingScale: "xl",
    subheading: "LAND PROJECT CONSULTANCY",
    intro:
      "End-to-end solutions for individuals, developers and corporate organizations seeking to acquire, manage or develop land.",
    services: [
      {
        slot: 1,
        label: "SALES & PURCHASE",
        copy:
          "Buying and selling support with verified documentation for secure and transparent transactions.",
      },
      {
        slot: 2,
        label: "LAND ADVISORY",
        copy:
          "Acquisition decisions informed by technical and documentation checks.",
      },
      {
        slot: 3,
        label: "PROJECT CONSULTANCY",
        copy:
          "Land development decisions connected to technical project requirements.",
      },
    ],
    bottomLinks: ["VERIFIED DOCUMENTATION", "SECURE TRANSACTIONS"],
    outline: "LAND",
    techNote: "RIGHT HOUSING  /  BATTERY & INTERFACE",
  },
  {
    index: 5,
    asset: "TS_lens.png",
    heading: "LAND DISPUTE RESOLUTION",
    mobileHeadingScale: "md",
    subheading: "SUB-DIVISION & ALLOCATION",
    intro:
      "Technical survey evidence and land-use structuring help resolve ownership conflicts while optimizing allocation and regulatory compliance.",
    services: [
      {
        slot: 1,
        label: "DISPUTE RESOLUTION",
        copy:
          "Technical survey data and legal frameworks support boundary and ownership dispute resolution.",
      },
      {
        slot: 2,
        label: "SUB-DIVISION",
        copy:
          "Well-structured parcel layouts optimize land use and regulatory fit.",
      },
      {
        slot: 3,
        label: "ALLOCATION",
        copy:
          "Plot distribution is organized for efficient and defensible land use.",
      },
    ],
    bottomLinks: ["BOUNDARY EVIDENCE", "PARCEL STRUCTURE"],
    outline: "LAND",
    techNote: "LENS SYSTEM  /  LONG-RANGE PRECISION",
  },
  {
    index: 6,
    asset: "TS_core.png",
    heading: "LAYOUT DESIGN",
    mobileHeadingScale: "xl",
    subheading: "PROJECT & CONSTRUCTION MANAGEMENT",
    intro:
      "International-standard layouts balance aesthetics, functionality and sustainability while project oversight protects specifications, budgets and deadlines.",
    services: [
      {
        slot: 1,
        label: "LAYOUT DESIGN",
        copy:
          "Layouts for estates, industrial zones and agricultural developments optimize use, function and sustainability.",
      },
      {
        slot: 2,
        label: "PROJECT MANAGEMENT",
        copy:
          "Concept-to-completion oversight coordinates technical requirements and delivery.",
      },
      {
        slot: 3,
        label: "CONSTRUCTION MANAGEMENT",
        copy:
          "Execution is supervised against specifications, budgets and deadlines.",
      },
    ],
    bottomLinks: ["INTERNATIONAL STANDARD", "DELIVERY CONTROL"],
    outline: "LAND",
    techNote: "INTERNAL CORE  /  DATA & MEASUREMENT",
  },
  {
    index: 7,
    asset: "TS_disp.png",
    heading: "GEOSPATIAL DATA",
    mobileHeadingScale: "lg",
    subheading: "DRONE IMAGE PROCESSING",
    intro:
      "Location intelligence is transformed through GIS technologies, aerial-data processing and analytical workflows into decision-ready information.",
    services: [
      {
        slot: 1,
        label: "DRONE IMAGE PROCESSING",
        copy:
          "Raw aerial data becomes orthophotos, digital elevation models and 3D mapping outputs.",
      },
      {
        slot: 2,
        label: "ORTHOPHOTOS",
        copy:
          "Geometrically corrected imagery supports reliable spatial interpretation.",
      },
      {
        slot: 3,
        label: "3D MAPPING",
        copy:
          "Three-dimensional site understanding expands project intelligence.",
      },
    ],
    bottomLinks: ["LOCATION INTELLIGENCE", "DATA DEVELOPMENT"],
    outline: "GEOSPATIAL",
    techNote: "DISPLAY MODULE  /  FIELD WORKFLOW",
  },
  {
    index: 8,
    asset: "TS_base.png",
    heading: "STRATEGIC MAPS",
    mobileHeadingScale: "xl",
    subheading: "GIS ANALYSIS",
    intro:
      "Spatial information is converted into strategic maps and analytical outputs for infrastructure planning, environmental management and investment decisions.",
    services: [
      {
        slot: 1,
        label: "STRATEGIC MAPS",
        copy:
          "Detailed geographical maps support infrastructure planning, environmental management and investment decisions.",
      },
      {
        slot: 2,
        label: "GIS ANALYSIS",
        copy:
          "Spatial-data analysis supports urban planning, utility management and resource monitoring.",
      },
      {
        slot: 3,
        label: "PLANNING INTELLIGENCE",
        copy:
          "Location relationships become visible across complex systems.",
      },
    ],
    bottomLinks: ["INFRASTRUCTURE", "RESOURCE MONITORING"],
    outline: "MAPPING",
    techNote: "ROTATING BASE  /  STABLE POSITIONING",
  },
  {
    index: 9,
    asset: "TS_foot.png",
    heading: "CUSTOM GIS APPLICATIONS",
    mobileHeadingScale: "md",
    subheading: "TAILORED GEOSPATIAL SOFTWARE",
    intro:
      "Custom GIS applications automate data collection, analysis and visualization around real government and private-sector workflows.",
    services: [
      {
        slot: 1,
        label: "CUSTOM DEVELOPMENT",
        copy:
          "Tailored GIS software automates data collection, analysis and visualization.",
      },
      {
        slot: 2,
        label: "AUTOMATED WORKFLOWS",
        copy:
          "Field and operational data capture can be streamlined into structured systems.",
      },
      {
        slot: 3,
        label: "VISUALIZATION",
        copy:
          "Maps and interfaces turn complex location data into usable intelligence.",
      },
    ],
    bottomLinks: ["AUTOMATED WORKFLOWS", "DECISION INTERFACES"],
    outline: "MAPPING",
    techNote: "TRIBRACH FOOT  /  LEVELING SUPPORT",
  },
  {
    index: 10,
    asset: "TS_comp.png",
    heading: "COMPLETE CAPABILITY",
    mobileHeadingScale: "xl",
    subheading: "SURVEYING / LAND / GEOSPATIAL",
    intro:
      "Integrated surveying, land advisory and geospatial development capabilities connect measurement, ownership, planning and location intelligence.",
    services: [
      {
        slot: 1,
        label: "SURVEYING",
        copy: "Precise field measurement and infrastructure support.",
      },
      {
        slot: 2,
        label: "LAND ADVISORY",
        copy:
          "Secure transactions, dispute resolution and project guidance.",
      },
      {
        slot: 3,
        label: "GEOSPATIAL",
        copy:
          "Data processing, mapping, GIS analysis and custom applications.",
      },
    ],
    bottomLinks: ["PRECISION IN MEASUREMENT", "INTELLIGENCE IN LAND"],
    outline: "COMPLETE",
    techNote: "COMPLETE SYSTEM  /  ALL CAPABILITIES ALIGNED",
  },
] as const;
