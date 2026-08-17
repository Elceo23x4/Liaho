export type FigmaBox = {
  x: number;
  y: number;
  width?: number;
  height?: number;
  fontSize?: number;
  lineHeight?: number;
  letterSpacing?: number;
};

export type FigmaServiceLayout = {
  slot: 1 | 2 | 3;
  diamond: FigmaBox;
  label: FigmaBox;
  copy: FigmaBox;
};

export type BodyFigmaLayout = {
  heading: FigmaBox;
  subheading?: FigmaBox;
  intro: FigmaBox;
  services: readonly FigmaServiceLayout[];
  bottomRule: FigmaBox;
  bottomDivider: FigmaBox;
  bottomLinkOne: FigmaBox;
  bottomLinkTwo: FigmaBox;
  techLead: FigmaBox;
  techNote: FigmaBox;
  outline: FigmaBox;
};

export const BODY_DESIGN_WIDTH = 1920;
export const BODY_DESIGN_HEIGHT = 1080;

export const bodyFigmaLayouts: readonly BodyFigmaLayout[] = [
  {
    heading: { x: 170, y: 100, width: 650, fontSize: 152, lineHeight: 130.72, letterSpacing: -2 },
    subheading: { x: 227, y: 235, width: 650, fontSize: 24, letterSpacing: 6 },
    intro: { x: 179, y: 318, width: 560, fontSize: 32, lineHeight: 35, letterSpacing: 0.7 },
    services: [
      { slot: 1, diamond: { x: 170, y: 540, width: 18, height: 18 }, label: { x: 205, y: 538, width: 314, fontSize: 24, letterSpacing: 1 }, copy: { x: 205, y: 576, width: 316, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
      { slot: 2, diamond: { x: 552, y: 540, width: 18, height: 18 }, label: { x: 583, y: 538, width: 250, fontSize: 24, letterSpacing: 1 }, copy: { x: 581, y: 576, width: 368, fontSize: 24, lineHeight: 30, letterSpacing: 0.5 } },
      { slot: 3, diamond: { x: 170, y: 731, width: 18, height: 18 }, label: { x: 201, y: 729, width: 449, fontSize: 24, letterSpacing: 1 }, copy: { x: 206, y: 780, width: 401, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
    ],
    bottomRule: { x: 170, y: 880, width: 640, height: 1 },
    bottomDivider: { x: 468, y: 897, width: 1, height: 28 },
    bottomLinkOne: { x: 170, y: 902, width: 134, fontSize: 12, letterSpacing: 1.2 },
    bottomLinkTwo: { x: 500, y: 902, width: 300, fontSize: 12, letterSpacing: 1.2 },
    techLead: { x: 1585, y: 76, width: 24, height: 1 },
    techNote: { x: 1642, y: 52, width: 226, height: 48, fontSize: 20, lineHeight: 16, letterSpacing: 1.4 },
    outline: { x: 780, y: 145, width: 1020, height: 496, fontSize: 326, lineHeight: 248, letterSpacing: -8 },
  },
  {
    heading: { x: 165, y: 80, width: 650, fontSize: 152, lineHeight: 130.72, letterSpacing: -2 },
    intro: { x: 170, y: 360, width: 560, fontSize: 32, lineHeight: 35, letterSpacing: 0.7 },
    services: [
      { slot: 1, diamond: { x: 170, y: 607.5, width: 18, height: 18 }, label: { x: 200, y: 602, width: 250, fontSize: 24, letterSpacing: 1 }, copy: { x: 200, y: 648, width: 250, fontSize: 24, lineHeight: 30, letterSpacing: 0.5 } },
      { slot: 3, diamond: { x: 574.5, y: 605.5, width: 18, height: 18 }, label: { x: 605, y: 602, width: 250, fontSize: 24, letterSpacing: 1 }, copy: { x: 605, y: 648, width: 250, fontSize: 24, lineHeight: 30, letterSpacing: 0.5 } },
    ],
    bottomRule: { x: 170, y: 880, width: 640, height: 1 },
    bottomDivider: { x: 468, y: 897, width: 1, height: 28 },
    bottomLinkOne: { x: 170, y: 902, width: 192, fontSize: 12, letterSpacing: 1.2 },
    bottomLinkTwo: { x: 500, y: 902, width: 300, fontSize: 12, letterSpacing: 1.2 },
    techLead: { x: 1570, y: 722, width: 24, height: 1 },
    techNote: { x: 1618, y: 692, width: 245, height: 20, fontSize: 20, lineHeight: 16, letterSpacing: 1.4 },
    outline: { x: 780, y: 145, width: 1020, height: 496, fontSize: 326, lineHeight: 248, letterSpacing: -8 },
  },
  {
    heading: { x: 164, y: 80, width: 650, fontSize: 132, lineHeight: 113.52, letterSpacing: -2 },
    subheading: { x: 179, y: 323, width: 650, fontSize: 24, letterSpacing: 6 },
    intro: { x: 179, y: 383, width: 560, fontSize: 32, lineHeight: 35, letterSpacing: 0.7 },
    services: [
      { slot: 1, diamond: { x: 170, y: 597, width: 18, height: 18 }, label: { x: 202, y: 597, width: 325, fontSize: 24, letterSpacing: 1 }, copy: { x: 202, y: 635, width: 430, fontSize: 24, lineHeight: 30, letterSpacing: 0.5 } },
      { slot: 2, diamond: { x: 646.5, y: 689, width: 18, height: 18 }, label: { x: 675, y: 685, width: 250, fontSize: 24, letterSpacing: 1 }, copy: { x: 675, y: 724, width: 250, fontSize: 24, lineHeight: 30, letterSpacing: 0.5 } },
      { slot: 3, diamond: { x: 179, y: 760, width: 18, height: 18 }, label: { x: 206, y: 755, width: 325, fontSize: 24, letterSpacing: 1 }, copy: { x: 205, y: 788, width: 405, fontSize: 24, lineHeight: 30, letterSpacing: 0.5 } },
    ],
    bottomRule: { x: 170, y: 880, width: 640, height: 1 },
    bottomDivider: { x: 468, y: 897, width: 1, height: 28 },
    bottomLinkOne: { x: 170, y: 902, width: 176, fontSize: 12, letterSpacing: 1.2 },
    bottomLinkTwo: { x: 500, y: 902, width: 300, fontSize: 12, letterSpacing: 1.2 },
    techLead: { x: 1638, y: 683, width: 24, height: 1 },
    techNote: { x: 1673, y: 658, width: 245, height: 20, fontSize: 20, lineHeight: 16, letterSpacing: 1.4 },
    outline: { x: 780, y: 145, width: 1020, height: 496, fontSize: 326, lineHeight: 248, letterSpacing: -8 },
  },
  {
    heading: { x: 159, y: 90, width: 650, fontSize: 152, lineHeight: 130.72, letterSpacing: -2 },
    subheading: { x: 280, y: 223, width: 650, fontSize: 24, letterSpacing: 6 },
    intro: { x: 159, y: 294, width: 560, fontSize: 32, lineHeight: 35, letterSpacing: 0.7 },
    services: [
      { slot: 1, diamond: { x: 170, y: 476.5, width: 18, height: 18 }, label: { x: 198, y: 472, width: 250, fontSize: 24, letterSpacing: 1 }, copy: { x: 206, y: 520, width: 250, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
      { slot: 2, diamond: { x: 486, y: 477, width: 18, height: 18 }, label: { x: 513, y: 472, width: 250, fontSize: 24, letterSpacing: 1 }, copy: { x: 513, y: 502, width: 250, height: 120, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
      { slot: 3, diamond: { x: 178, y: 740, width: 18, height: 18 }, label: { x: 206, y: 720, width: 250, fontSize: 24, letterSpacing: 1 }, copy: { x: 206, y: 780, width: 452, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
    ],
    bottomRule: { x: 170, y: 880, width: 640, height: 1 },
    bottomDivider: { x: 468, y: 897, width: 1, height: 28 },
    bottomLinkOne: { x: 170, y: 902, width: 184, fontSize: 12, letterSpacing: 1.2 },
    bottomLinkTwo: { x: 500, y: 902, width: 300, fontSize: 12, letterSpacing: 1.2 },
    techLead: { x: 1566, y: 232, width: 24, height: 1 },
    techNote: { x: 1600, y: 224, width: 245, height: 20, fontSize: 20, lineHeight: 16, letterSpacing: 1.4 },
    outline: { x: 1018, y: 138, width: 492, height: 496, fontSize: 326, lineHeight: 248, letterSpacing: -8 },
  },
  {
    heading: { x: 165, y: 82, width: 650, fontSize: 116, lineHeight: 99.76, letterSpacing: -2 },
    subheading: { x: 277, y: 307, width: 650, fontSize: 24, letterSpacing: 6 },
    intro: { x: 165, y: 383, width: 560, fontSize: 32, lineHeight: 35, letterSpacing: 0.7 },
    services: [
      { slot: 1, diamond: { x: 174.5, y: 608.5, width: 18, height: 18 }, label: { x: 215, y: 595, width: 250, fontSize: 24, letterSpacing: 1 }, copy: { x: 211, y: 654, width: 250, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
      { slot: 2, diamond: { x: 486, y: 610, width: 18, height: 18 }, label: { x: 521, y: 605, width: 250, fontSize: 24, letterSpacing: 1 }, copy: { x: 521, y: 644, width: 250, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
      { slot: 3, diamond: { x: 174.5, y: 827.5, width: 18, height: 18 }, label: { x: 206, y: 822, width: 250, fontSize: 24, letterSpacing: 1 }, copy: { x: 206, y: 858, width: 367, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
    ],
    bottomRule: { x: 170, y: 928, width: 640, height: 1 },
    bottomDivider: { x: 468, y: 945, width: 1, height: 28 },
    bottomLinkOne: { x: 170, y: 950, width: 142, fontSize: 12, letterSpacing: 1.2 },
    bottomLinkTwo: { x: 500, y: 950, width: 300, fontSize: 12, letterSpacing: 1.2 },
    techLead: { x: 1566, y: 232, width: 24, height: 1 },
    techNote: { x: 1600, y: 224, width: 245, height: 20, fontSize: 20, lineHeight: 16, letterSpacing: 1.4 },
    outline: { x: 1098, y: 139, width: 492, height: 496, fontSize: 326, lineHeight: 248, letterSpacing: -8 },
  },
  {
    heading: { x: 166, y: 73, width: 650, fontSize: 152, lineHeight: 130.72, letterSpacing: -2 },
    subheading: { x: 317, y: 330, width: 650, height: 49, fontSize: 24, letterSpacing: 6 },
    intro: { x: 170, y: 421, width: 560, fontSize: 32, lineHeight: 35, letterSpacing: 0.7 },
    services: [
      { slot: 1, diamond: { x: 179, y: 623, width: 18, height: 18 }, label: { x: 200, y: 621, width: 250, fontSize: 24, letterSpacing: 1 }, copy: { x: 200, y: 650, width: 300, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
      { slot: 2, diamond: { x: 491, y: 621, width: 18, height: 18 }, label: { x: 517, y: 606, width: 250, height: 35, fontSize: 24, letterSpacing: 1 }, copy: { x: 531, y: 684, width: 250, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
      { slot: 3, diamond: { x: 170, y: 828, width: 18, height: 18 }, label: { x: 206, y: 812, width: 311, fontSize: 24, letterSpacing: 1 }, copy: { x: 206, y: 864, width: 560, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
    ],
    bottomRule: { x: 170, y: 928, width: 640, height: 1 },
    bottomDivider: { x: 468, y: 945, width: 1, height: 28 },
    bottomLinkOne: { x: 170, y: 950, width: 184, fontSize: 12, letterSpacing: 1.2 },
    bottomLinkTwo: { x: 500, y: 950, width: 300, fontSize: 12, letterSpacing: 1.2 },
    techLead: { x: 1566, y: 232, width: 24, height: 1 },
    techNote: { x: 1600, y: 224, width: 245, height: 20, fontSize: 20, lineHeight: 16, letterSpacing: 1.4 },
    outline: { x: 960, y: 145, width: 492, height: 496, fontSize: 326, lineHeight: 248, letterSpacing: -8 },
  },
  {
    heading: { x: 166, y: 80, width: 650, fontSize: 152, lineHeight: 130.72, letterSpacing: -2 },
    subheading: { x: 326, y: 335, width: 650, fontSize: 24, letterSpacing: 6 },
    intro: { x: 166, y: 418, width: 560, fontSize: 32, lineHeight: 35, letterSpacing: 0.7 },
    services: [
      { slot: 1, diamond: { x: 179, y: 650, width: 18, height: 18 }, label: { x: 206, y: 627, width: 294, fontSize: 24, letterSpacing: 1 }, copy: { x: 206, y: 686, width: 338, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
      { slot: 2, diamond: { x: 535, y: 649, width: 18, height: 18 }, label: { x: 566, y: 648, width: 250, fontSize: 24, letterSpacing: 1 }, copy: { x: 567, y: 686, width: 250, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
      { slot: 3, diamond: { x: 170, y: 814, width: 18, height: 18 }, label: { x: 206, y: 812, width: 250, fontSize: 24, letterSpacing: 1 }, copy: { x: 206, y: 840, width: 361, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
    ],
    bottomRule: { x: 170, y: 928, width: 640, height: 1 },
    bottomDivider: { x: 468, y: 945, width: 1, height: 28 },
    bottomLinkOne: { x: 170, y: 950, width: 176, fontSize: 12, letterSpacing: 1.2 },
    bottomLinkTwo: { x: 500, y: 950, width: 300, fontSize: 12, letterSpacing: 1.2 },
    techLead: { x: 1656, y: 744, width: 24, height: 1 },
    techNote: { x: 1691, y: 725, width: 245, height: 20, fontSize: 20, lineHeight: 16, letterSpacing: 1.4 },
    outline: { x: 780, y: 141, width: 1081, height: 496, fontSize: 326, lineHeight: 248, letterSpacing: -8 },
  },
  {
    heading: { x: 188, y: 62, width: 650, fontSize: 152, lineHeight: 130.72, letterSpacing: -2 },
    subheading: { x: 455, y: 304, width: 650, fontSize: 32, letterSpacing: 6 },
    intro: { x: 181, y: 373, width: 560, fontSize: 32, lineHeight: 35, letterSpacing: 0.7 },
    services: [
      { slot: 1, diamond: { x: 176.5, y: 600.5, width: 18, height: 18 }, label: { x: 206, y: 595, width: 250, fontSize: 24, letterSpacing: 1 }, copy: { x: 206, y: 625, width: 382, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
      { slot: 2, diamond: { x: 579, y: 600, width: 18, height: 18 }, label: { x: 609, y: 595, width: 250, height: 29, fontSize: 24, letterSpacing: 1 }, copy: { x: 609, y: 631, width: 302, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
      { slot: 3, diamond: { x: 170, y: 754, width: 18, height: 18 }, label: { x: 206, y: 753, width: 307, fontSize: 20, letterSpacing: 1 }, copy: { x: 206, y: 783, width: 331, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
    ],
    bottomRule: { x: 170, y: 880, width: 640, height: 1 },
    bottomDivider: { x: 468, y: 897, width: 1, height: 28 },
    bottomLinkOne: { x: 170, y: 902, width: 117, fontSize: 12, letterSpacing: 1.2 },
    bottomLinkTwo: { x: 500, y: 902, width: 300, fontSize: 12, letterSpacing: 1.2 },
    techLead: { x: 1566, y: 784, width: 24, height: 1 },
    techNote: { x: 1619, y: 764, width: 245, height: 20, fontSize: 20, lineHeight: 16, letterSpacing: 1.4 },
    outline: { x: 1025, y: 145, width: 839, height: 496, fontSize: 326, lineHeight: 248, letterSpacing: -8 },
  },
  {
    heading: { x: 170, y: 82, width: 650, fontSize: 116, lineHeight: 99.76, letterSpacing: -2 },
    subheading: { x: 179, y: 320, width: 650, fontSize: 24, letterSpacing: 6 },
    intro: { x: 176, y: 393, width: 560, fontSize: 32, lineHeight: 35, letterSpacing: 0.7 },
    services: [
      { slot: 1, diamond: { x: 206, y: 618, width: 18, height: 18 }, label: { x: 240, y: 601, width: 250, fontSize: 24, letterSpacing: 1 }, copy: { x: 240, y: 664, width: 282, height: 54, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
      { slot: 2, diamond: { x: 522, y: 628, width: 18, height: 18 }, label: { x: 550, y: 611, width: 250, fontSize: 24, letterSpacing: 1 }, copy: { x: 550, y: 688, width: 250, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
      { slot: 3, diamond: { x: 206, y: 808, width: 18, height: 18 }, label: { x: 240, y: 803, width: 250, fontSize: 24, letterSpacing: 1 }, copy: { x: 240, y: 841, width: 368, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
    ],
    bottomRule: { x: 170, y: 928, width: 640, height: 1 },
    bottomDivider: { x: 468, y: 945, width: 1, height: 28 },
    bottomLinkOne: { x: 170, y: 950, width: 159, fontSize: 12, letterSpacing: 1.2 },
    bottomLinkTwo: { x: 500, y: 950, width: 300, fontSize: 12, letterSpacing: 1.2 },
    techLead: { x: 1610, y: 793, width: 24, height: 1 },
    techNote: { x: 1646, y: 778, width: 245, height: 20, fontSize: 20, lineHeight: 16, letterSpacing: 1.4 },
    outline: { x: 896, y: 138, width: 839, height: 496, fontSize: 326, lineHeight: 248, letterSpacing: -8 },
  },
  {
    heading: { x: 165, y: 100, width: 650, fontSize: 132, lineHeight: 113.52, letterSpacing: -2 },
    subheading: { x: 170, y: 340, width: 650, fontSize: 24, letterSpacing: 6 },
    intro: { x: 170, y: 412, width: 560, fontSize: 32, lineHeight: 35, letterSpacing: 0.7 },
    services: [
      { slot: 1, diamond: { x: 170, y: 653, width: 18, height: 18 }, label: { x: 206, y: 653, width: 250, fontSize: 24, letterSpacing: 1 }, copy: { x: 206, y: 694, width: 284, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
      { slot: 2, diamond: { x: 490, y: 653, width: 18, height: 18 }, label: { x: 526, y: 653, width: 250, fontSize: 24, letterSpacing: 1 }, copy: { x: 526, y: 694, width: 250, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
      { slot: 3, diamond: { x: 170, y: 814, width: 18, height: 18 }, label: { x: 200, y: 809, width: 250, fontSize: 24, letterSpacing: 1 }, copy: { x: 200, y: 836, width: 326, fontSize: 24, lineHeight: 30, letterSpacing: 0.2 } },
    ],
    bottomRule: { x: 170, y: 928, width: 640, height: 1 },
    bottomDivider: { x: 468, y: 945, width: 1, height: 28 },
    bottomLinkOne: { x: 170, y: 950, width: 201, fontSize: 12, letterSpacing: 1.2 },
    bottomLinkTwo: { x: 500, y: 950, width: 300, fontSize: 12, letterSpacing: 1.2 },
    techLead: { x: 1577, y: 778, width: 24, height: 1 },
    techNote: { x: 1631, y: 758, width: 245, height: 20, fontSize: 20, lineHeight: 16, letterSpacing: 1.4 },
    outline: { x: 891, y: 157, width: 919, height: 496, fontSize: 326, lineHeight: 248, letterSpacing: -8 },
  },
] as const;

export const canonicalAssemblyBox = {
  x: 986,
  y: 83,
  width: 570,
  height: 855,
} as const;
