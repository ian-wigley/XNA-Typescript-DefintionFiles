declare class BoundingBox {
    public static CornerCount: number;
    public Min: Vector3;
    public Max: Vector3;
    constructor(min: Vector3, max: Vector3);
    public Equals(other: BoundingBox): boolean;
    public SupportMapping(v: Vector3, result: Vector3): void;
    public OperatorEquals(b: BoundingBox): boolean;
    public OperatorNotEqual(b: BoundingBox): boolean;
}