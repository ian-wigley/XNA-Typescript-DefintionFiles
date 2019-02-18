declare class SpriteBatch {
    constructor();
    public DrawString(font, value, position, color): void;
    public Draw(texture: Texture2D, position: Vector2 | Rectangle, sourceRectangle?: Rectangle | Color, color?: Color, rotation?: number, origin?: Vector2, scale?: Vector2 | number, effects?: SpriteEffects, layerDepth?: number): void;
    public Begin(): void;
    public End(): void;
}