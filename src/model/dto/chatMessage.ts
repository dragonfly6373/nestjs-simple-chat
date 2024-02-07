import IChatMessage from "../interface/chatMessage.interface";

export class ChatMessage implements IChatMessage {
    id: number;
    roomId: number;
    messageType: number;
    content: string;
    createdBy: number;
}
