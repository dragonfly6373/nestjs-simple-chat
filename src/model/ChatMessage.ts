import IChatMessage from "./interface/chatMessage.interface";

export default class ChatMessage implements IChatMessage {
    roomId: number;
    messageType: number;
    content: string;
    createdBy: number;

    constructor(roomId: number, messageType: number = 1, content: string) {
        this.roomId = roomId;
        this.messageType = messageType;
        this.content = content;
    }
}
