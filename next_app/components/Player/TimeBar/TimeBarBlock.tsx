// Props
import { TimeBarProps } from './TimeBar.props';

// Helper
import { formatTime } from '@/helpers/dateHelpers';

export const TimeBar = ({currentTime, duration, handleSeek}: TimeBarProps)=> {

    return (
        <div className='flex flex-col justify-end h-full gap-1.5 pt-2 items-between'>
            <input
                className='w-full h-4 max-[775px]:h-1.5 cursor-pointer'
                type="range"
                min="0"
                max={duration}
                step="0.1"
                value={currentTime}
                onChange={(e)=> handleSeek(e)}
            />
            <div className='w-full flex justify-between text-gray-50 text-sm'>
                <span>
                    {formatTime(currentTime!)}
                </span>

                <span>
                    {formatTime(duration!)}
                </span>
            </div>
        </div>
    );
};