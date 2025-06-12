export function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60); 
    const remainingSeconds = Math.round(seconds % 60); 

    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    return `${minutes}:${formattedSeconds}`;
}