import ToolbarButton from "./ToolbarButton";
import { FaBold, FaUnderline, FaItalic } from 'react-icons/fa';


const ToolBar = ({ formatText }) => {
    return (
        <div className="w-full flex items-center justify-center fixed bottom-4 z-50">
            <div className="flex gap-3 border border-gray-600 shadow-md px-5 py-3 rounded-xl items-center backdrop-blur-sm ">
                <ToolbarButton command='bold' formatText={formatText} icon={<FaBold />} tooltip="Bold" />
                <ToolbarButton command='italic' formatText={formatText} icon={<FaItalic />} tooltip="Italic" />
                <ToolbarButton command='underline' formatText={formatText} icon={<FaUnderline />} tooltip="Underline" />


                <select
                    className="select select-bordered select-sm cursor-pointer text-sm"
                    onChange={(e) => formatText('fontSize', e.target.value)}
                >
                    <option disabled value='0'>Font Size</option>
                    <option value="1">Very Small</option>
                    <option value="2">Small</option>
                    <option value="3">Normal</option>
                    <option value="4">Large</option>
                    <option value="5">Very Large</option>
                </select>

                <label className="tooltip tooltip-top" data-tip="Text Color">
                    <input
                        type="color"
                        className="w-8 h-8 rounded-full cursor-pointer"
                        onChange={(e) => formatText('foreColor', e.target.value)}
                    />
                </label>
            </div>
        </div>
    );
};

export default ToolBar