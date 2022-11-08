declare function passcode(length: number, characterRanges: number[][]): string;

// TODO: Find types of these.
declare function setNewStateContext(cmd: string, usr: any, state: state): any;
declare function setStateContext(cmd: string, usr: any, state: state): any;

declare class state
{
    constructor(cmd?: string, pass?: string, members?: any[], timestamp?: number | string, expires?: number);
    public cmd: string;
    public pass: string;
    public members: any[];
    public timestamp: number | string;
    public expires: number;
}

declare class passBase
{
    private users: Record<string, unknown>;

    createSession(userId: number | string, cmd: string, pass: string, timestamp: number, expires: number): state;
    /**
     * @param {number | string} userid Optional defaults to '';
     */
    joinSession(userId: number | string, state: state): state;
    joinSessionByClues(hostId?: number | string, joiningId?: number | string, pass?: string): state;
}

declare class user
{
    constructor(userId: number);

    switchToLastContext(): void;
    deleteState(targetState: state): void
}
