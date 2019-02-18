type Texture2D = HTMLImageElement;

declare enum SpriteEffects {
    None = 0,
    FlipHorizontally = 1
}

declare class Game {
    public Content;
    constructor();
    public RunGame(useBlockingRun: boolean): void;
    public Tick(): void;
    protected Draw(gameTime: GameTime): void;
    protected Update(gameTime: GameTime): void;
}