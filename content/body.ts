export type BodyServiceItem = {
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
  headingScale: "xl" | "lg" | "md";
  mobileHeadingScale: "xl" | "lg" | "md";
  subheading: string;
  intro: string;
  services: readonly [
    BodyServiceItem,
    BodyServiceItem,
    BodyServiceItem,
  ];
  bottomLinks: readonly [string, string];
  outline: "SURVEYING" | "LAND" | "GEOSPATIAL" | "MAPPING" | "COMPLETE";
  techNote: string;
  layout: "standard" | "deep";
};

export const bodyStates: readonly BodyState[] = [
  {
    index: 1,
    asset: "TS_hand.png",
    heading: "SURVEYING",
    headingScale: "xl",
    mobileHeadingScale: "xl",
    subheading: "ENGINEERING SURVEY",
    intro:
      "Accurate, efficient and comprehensive surveying solutions supporting development and infrastructure projects.",
    services: [
      {
        label: "ENGINEERING SURVEY",
        copy:
          "Topographical, route, setting-out and leveling surveys for roads, buildings and bridges.",
      },
      {
        label: "AERIAL SURVEY",
        copy:
          "High-resolution drones and photogrammetric processing for mapping, inspection and 3D modeling.",
      },
      {
        label: "HYDROGRAPHIC / BATHYMETRIC",
        copy:
          "Underwater mapping and data collection for coastal engineering, dredging and marine construction.",
      },
    ],
    bottomLinks: ["CADASTRAL SURVEY", "ENVIRONMENTAL IMPACT ASSESSMENT"],
    outline: "SURVEYING",
    techNote: "HANDLE ASSEMBLY  /  ERGONOMIC TOP HANDLE",
    layout: "standard",
  },
  {
    index: 2,
    asset: "TS_optics.png",
    heading: "AERIAL SURVEY",
    headingScale: "xl",
    mobileHeadingScale: "xl",
    subheading: "HYDROGRAPHIC / BATHYMETRIC",
    intro:
      "High-resolution aerial capture and underwater mapping extend site intelligence beyond conventional ground observation.",
    services: [
      {
        label: "AERIAL SURVEY",
        copy:
          "Drone mapping and photogrammetric processing for large-scale mapping, site inspection and 3D modeling.",
      },
      {
        label: "HYDROGRAPHIC / BATHYMETRIC",
        copy:
          "Underwater mapping and data collection for coastal engineering and marine construction.",
      },
      {
        label: "SITE INTELLIGENCE",
        copy:
          "Spatial capture expands observation into measurable visual context.",
      },
    ],
    bottomLinks: ["HIGH-RESOLUTION CAPTURE", "MARINE DATA"],
    outline: "SURVEYING",
    techNote: "OPTICAL MODULE  /  PRECISION TARGETING",
    layout: "standard",
  },
  {
    index: 3,
    asset: "TS_left.png",
    heading: "CADASTRAL SURVEY",
    headingScale: "lg",
    mobileHeadingScale: "lg",
    subheading: "ENVIRONMENTAL IMPACT ASSESSMENT",
    intro:
      "Boundary definition and environmental intelligence support secure land ownership, responsible development and regulatory decisions.",
    services: [
      {
        label: "CADASTRAL SURVEY",
        copy:
          "Perimeter and layout design surveys define property boundaries and support land titling.",
      },
      {
        label: "LAND TITLING",
        copy:
          "Survey evidence supports formal ownership and real-estate development.",
      },
      {
        label: "ENVIRONMENTAL IMPACT",
        copy:
          "Risks and impacts are evaluated against regulatory requirements and sustainable strategies.",
      },
    ],
    bottomLinks: ["BOUNDARY VERIFICATION", "REGULATORY EVIDENCE"],
    outline: "SURVEYING",
    techNote: "LEFT HOUSING  /  FIELD CONTROL ACCESS",
    layout: "standard",
  },
  {
    index: 4,
    asset: "TS_right.png",
    heading: "LAND SALES",
    headingScale: "xl",
    mobileHeadingScale: "xl",
    subheading: "LAND PROJECT CONSULTANCY",
    intro:
      "End-to-end solutions for individuals, developers and corporate organizations seeking to acquire, manage or develop land.",
    services: [
      {
        label: "SALES & PURCHASE",
        copy:
          "Buying and selling support with verified documentation for secure and transparent transactions.",
      },
      {
        label: "LAND ADVISORY",
        copy:
          "Acquisition decisions informed by technical and documentation checks.",
      },
      {
        label: "PROJECT CONSULTANCY",
        copy:
          "Land development decisions connected to technical project requirements.",
      },
    ],
    bottomLinks: ["VERIFIED DOCUMENTATION", "SECURE TRANSACTIONS"],
    outline: "LAND",
    techNote: "RIGHT HOUSING  /  BATTERY & INTERFACE",
    layout: "standard",
  },
  {
    index: 5,
    asset: "TS_lens.png",
    heading: "LAND DISPUTE RESOLUTION",
    headingScale: "md",
    mobileHeadingScale: "md",
    subheading: "SUB-DIVISION & ALLOCATION",
    intro:
      "Technical survey evidence and land-use structuring help resolve ownership conflicts while optimizing allocation and regulatory compliance.",
    services: [
      {
        label: "DISPUTE RESOLUTION",
        copy:
          "Technical survey data and legal frameworks support boundary and ownership dispute resolution.",
      },
      {
        label: "SUB-DIVISION",
        copy:
          "Well-structured parcel layouts optimize land use and regulatory fit.",
      },
      {
        label: "ALLOCATION",
        copy:
          "Plot distribution is organized for efficient and defensible land use.",
      },
    ],
    bottomLinks: ["BOUNDARY EVIDENCE", "PARCEL STRUCTURE"],
    outline: "LAND",
    techNote: "LENS SYSTEM  /  LONG-RANGE PRECISION",
    layout: "deep",
  },
  {
    index: 6,
    asset: "TS_core.png",
    heading: "LAYOUT DESIGN",
    headingScale: "xl",
    mobileHeadingScale: "xl",
    subheading: "PROJECT & CONSTRUCTION MANAGEMENT",
    intro:
      "International-standard layouts balance aesthetics, functionality and sustainability while project oversight protects specifications, budgets and deadlines.",
    services: [
      {
        label: "LAYOUT DESIGN",
        copy:
          "Layouts for estates, industrial zones and agricultural developments optimize use, function and sustainability.",
      },
      {
        label: "PROJECT MANAGEMENT",
        copy:
          "Concept-to-completion oversight coordinates technical requirements and delivery.",
      },
      {
        label: "CONSTRUCTION MANAGEMENT",
        copy:
          "Execution is supervised against specifications, budgets and deadlines.",
      },
    ],
    bottomLinks: ["INTERNATIONAL STANDARD", "DELIVERY CONTROL"],
    outline: "LAND",
    techNote: "INTERNAL CORE  /  DATA & MEASUREMENT",
    layout: "deep",
  },
  {
    index: 7,
    asset: "TS_disp.png",
    heading: "GEOSPATIAL DATA",
    headingScale: "xl",
    mobileHeadingScale: "lg",
    subheading: "DRONE IMAGE PROCESSING",
    intro:
      "Location intelligence is transformed through GIS technologies, aerial-data processing and analytical workflows into decision-ready information.",
    services: [
      {
        label: "DRONE IMAGE PROCESSING",
        copy:
          "Raw aerial data becomes orthophotos, digital elevation models and 3D mapping outputs.",
      },
      {
        label: "ORTHOPHOTOS",
        copy:
          "Geometrically corrected imagery supports reliable spatial interpretation.",
      },
      {
        label: "3D MAPPING",
        copy:
          "Three-dimensional site understanding expands project intelligence.",
      },
    ],
    bottomLinks: ["LOCATION INTELLIGENCE", "DATA DEVELOPMENT"],
    outline: "GEOSPATIAL",
    techNote: "DISPLAY MODULE  /  FIELD WORKFLOW",
    layout: "deep",
  },
  {
    index: 8,
    asset: "TS_base.png",
    heading: "STRATEGIC MAPS",
    headingScale: "xl",
    mobileHeadingScale: "xl",
    subheading: "GIS ANALYSIS",
    intro:
      "Spatial information is converted into strategic maps and analytical outputs for infrastructure planning, environmental management and investment decisions.",
    services: [
      {
        label: "STRATEGIC MAPS",
        copy:
          "Detailed geographical maps support infrastructure planning, environmental management and investment decisions.",
      },
      {
        label: "GIS ANALYSIS",
        copy:
          "Spatial-data analysis supports urban planning, utility management and resource monitoring.",
      },
      {
        label: "PLANNING INTELLIGENCE",
        copy:
          "Location relationships become visible across complex systems.",
      },
    ],
    bottomLinks: ["INFRASTRUCTURE", "RESOURCE MONITORING"],
    outline: "MAPPING",
    techNote: "ROTATING BASE  /  STABLE POSITIONING",
    layout: "standard",
  },
  {
    index: 9,
    asset: "TS_foot.png",
    heading: "CUSTOM GIS APPLICATIONS",
    headingScale: "md",
    mobileHeadingScale: "md",
    subheading: "TAILORED GEOSPATIAL SOFTWARE",
    intro:
      "Custom GIS applications automate data collection, analysis and visualization around real government and private-sector workflows.",
    services: [
      {
        label: "CUSTOM DEVELOPMENT",
        copy:
          "Tailored GIS software automates data collection, analysis and visualization.",
      },
      {
        label: "AUTOMATED WORKFLOWS",
        copy:
          "Field and operational data capture can be streamlined into structured systems.",
      },
      {
        label: "VISUALIZATION",
        copy:
          "Maps and interfaces turn complex location data into usable intelligence.",
      },
    ],
    bottomLinks: ["AUTOMATED WORKFLOWS", "DECISION INTERFACES"],
    outline: "MAPPING",
    techNote: "TRIBRACH FOOT  /  LEVELING SUPPORT",
    layout: "deep",
  },
  {
    index: 10,
    asset: "TS_comp.png",
    heading: "COMPLETE CAPABILITY",
    headingScale: "lg",
    mobileHeadingScale: "xl",
    subheading: "SURVEYING / LAND / GEOSPATIAL",
    intro:
      "Integrated surveying, land advisory and geospatial development capabilities connect measurement, ownership, planning and location intelligence.",
    services: [
      {
        label: "SURVEYING",
        copy: "Precise field measurement and infrastructure support.",
      },
      {
        label: "LAND ADVISORY",
        copy:
          "Secure transactions, dispute resolution and project guidance.",
      },
      {
        label: "GEOSPATIAL",
        copy:
          "Data processing, mapping, GIS analysis and custom applications.",
      },
    ],
    bottomLinks: ["PRECISION IN MEASUREMENT", "INTELLIGENCE IN LAND"],
    outline: "COMPLETE",
    techNote: "COMPLETE SYSTEM  /  ALL CAPABILITIES ALIGNED",
    layout: "deep",
  },
] as const;
