import { ExecutionContext } from '@nestjs/common';
import { Dictionary } from 'code-config';
import Room from 'src/model/Room';
import User from 'src/model/User';

export interface Client {
    headers: Dictionary<string>;
    user: User;
    room?: Room;
}

export const getClient = <T = Client>(ctx: ExecutionContext): T => {
    switch (ctx.getType()) {
        case 'ws':
            return ctx.switchToWs().getClient().handshake;
        case 'http':
            return ctx.switchToHttp().getRequest();
        default:
            return undefined;
    }
};
