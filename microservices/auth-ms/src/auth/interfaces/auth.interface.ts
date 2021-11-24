import { FastifyRequest } from 'fastify';

import { UserDocument } from '../entities/auth.entity';

export interface RequestWithUser extends FastifyRequest {
  user: UserDocument;
}
