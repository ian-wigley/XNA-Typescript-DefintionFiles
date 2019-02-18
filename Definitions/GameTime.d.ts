declare class GameTime {
    totalGameTime: TimeSpan;
    elapsedGameTime: TimeSpan;
    isRunningSlowly: boolean;
    constructor();
    ElapsedGameTime(): TimeSpan;
}