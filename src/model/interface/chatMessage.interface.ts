export default interface IChatMessage {
    roomId: number;
    messageType: number;
    content: string;
    createdBy: number;
}
