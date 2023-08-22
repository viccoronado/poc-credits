
export default interface Server {
    port: number 
    setup(): void;
    start(): void;
    close(): void;
}