export interface PlayerProps {
    isPlaying: boolean;
    handleArrowClick: (direction: '+' | '-')=> void;    
    handleResumeClick: ()=> void;    
};