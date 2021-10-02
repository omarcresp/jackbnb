import { FastifyRequest } from 'fastify';

import { UserDocument } from './models/auth.model';

export interface RequestWithUser extends FastifyRequest {
  user: UserDocument;
}
