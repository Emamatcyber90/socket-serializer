// import { Buffer } from 'buffer';
import { IpcPacketBufferWrap } from './ipcPacketBufferWrap';
import { BufferListWriter } from './bufferListWriter';
import { BufferReader } from './bufferReader';

export class IpcPacketSerializer {
    private _writer: BufferListWriter;
    private _packet: IpcPacketBufferWrap;

    constructor() {
        this._writer = new BufferListWriter();
        this._packet = new IpcPacketBufferWrap();
    }

    serialize(data: any): this {
        this._packet.write(this._writer, data);
        return this;
    }

    get buffer(): Buffer {
        return this._writer.buffer;
    }

    get buffers(): Buffer[] {
        return this._writer.buffers;
    }
};

export class IpcPacketParser {
    private _reader: BufferReader;
    private _packet: IpcPacketBufferWrap;

    constructor(buffer: Buffer) {
        this._reader = new BufferReader(buffer);
        this._packet = new IpcPacketBufferWrap();
    }

    parse(): any {
        return this._packet.read(this._reader);
    }
}