const Round1ConnectorTop = () => (
  <svg height={37} width={20} className="mt-[36px] group-last:hidden">
    <path
      d="M0 1 L10 1 M10 0 L10 37.5 M10 36 L20 36 Z"
      className="stroke-white stroke-2"
    />
  </svg>
);

const Round1ConnectorBot = () => (
  <svg height={37} width={20} className="mb-[36px] group-last:hidden">
    <path
      d="M0 36 L10 36 M10 0 L10 37 M10 0.5 L20 0.5 Z"
      className="stroke-white stroke-2"
    />
  </svg>
);

const Round2ConnectorTop = () => (
  <svg height={70} width={20} className="mt-[70px] group-last:hidden">
    <path
      d="M0 1 L10 1 M10 0 L10 70.5 M10 74.5 L20 70.5 Z"
      className="stroke-white stroke-2"
    />
  </svg>
);

const Round2ConnectorBot = () => (
  <svg height={70} width={20} className="mb-[70px] group-last:hidden">
    <path
      d="M0 69 L10 69 M10 0 L10 70 M10 0.5 L20 0.5 Z"
      className="stroke-white stroke-2"
    />
  </svg>
);

const Round3ConnectorTop = () => (
  <svg height={139} width={20} className="mt-[139px] group-last:hidden">
    <path
      d="M0 1 L10 1 M10 0 L10 139.5 M10 139.5 L20 139.5 Z"
      className="stroke-white stroke-2"
    />
  </svg>
);

const Round3ConnectorBot = () => (
  <svg height={139} width={20} className="mb-[139px] group-last:hidden">
    <path
      d="M0 138 L10 138 M10 0 L10 139 M10 0.5 L20 0.5 Z"
      className="stroke-white stroke-2"
    />
  </svg>
);

const Round4ConnectorTop = () => (
  <svg height={280} width={20} className="mt-[280px] group-last:hidden">
    <path
      d="M0 1 L10 1 M10 0 L10 280.5 M10 280.5 L20 280.5 Z"
      className="stroke-white stroke-2"
    />
  </svg>
);

const Round4ConnectorBot = () => (
  <svg height={280} width={20} className="mb-[280px] group-last:hidden">
    <path
      d="M0 279 L10 279 M10 0 L10 280 M10 0.5 L20 0.5 Z"
      className="stroke-white stroke-2"
    />
  </svg>
);

export {
  Round1ConnectorBot,
  Round1ConnectorTop,
  Round2ConnectorTop,
  Round2ConnectorBot,
  Round3ConnectorTop,
  Round3ConnectorBot,
  Round4ConnectorTop,
  Round4ConnectorBot,
};
