import { Spin } from 'antd';

interface FullScreenSpinProps {
    size?: "large" | "small"
}

export function FullScreenSpin({size="large"}: FullScreenSpinProps){
    return(
        <div className="h-full flex justify-center items-center"><Spin size={size}/></div>
    );
};