const ToolbarButton = ({ icon, tooltip, command, formatText }) => (
  <button
    onClick={() => formatText(command)}
    className="tooltip tooltip-top text-lg sm:text-xl cursor-pointer hover:text-blue-600 transition"
    data-tip={tooltip}
  >
    {icon}
  </button>
);

export default ToolbarButton