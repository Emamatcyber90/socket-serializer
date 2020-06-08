// import { Buffer } from 'buffer';

export interface Writer {
    readonly buffer: Buffer;
    readonly buffers: Buffer[];
    readonly length: number;
    noAssert: boolean;

    reset(): void;

    writeByte(data: number): number;
    writeBytes(dataArray: number[]): number;
    writeUInt16(data: number): number;
    writeUInt32(data: number): number;
    writeDouble(data: number): number;
    writeString(data: string, encoding?: BufferEncoding, len?: number): number;
    writeBuffer(data: Buffer, sourceStart?: number, sourceEnd?: number): number;
    write(writer: Writer): number;

    pushContext(): void;
    popContext(): void;
}

// Implement common methods
export abstract class WriterBase implements Writer {
    protected static EmptyBuffer = Buffer.allocUnsafe(0);

    protected _noAssert: boolean;

    constructor() {
        this._noAssert = true;
    }

    get noAssert(): boolean {
        return this._noAssert;
    }

    set noAssert(noAssert: boolean) {
        this._noAssert = noAssert;
    }

    readonly buffer: Buffer;
    readonly buffers: Buffer[];
    readonly length: number;

    abstract reset(): void;

    abstract writeByte(data: number): number;
    abstract writeBytes(dataArray: number[]): number;
    abstract writeUInt16(data: number): number;
    abstract writeUInt32(data: number): number;
    abstract writeDouble(data: number): number;
    abstract writeString(data: string, encoding?: BufferEncoding, len?: number): number;
    abstract writeBuffer(data: Buffer, sourceStart?: number, sourceEnd?: number): number;
    abstract write(writer: Writer): number;

    abstract pushContext(): void;
    abstract popContext(): void;
}