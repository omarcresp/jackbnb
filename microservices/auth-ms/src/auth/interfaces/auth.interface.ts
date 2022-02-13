import { Request } from 'express';

import { UserDocument } from '../entities/auth.entity';

export interface RequestWithUser extends Request {
  user: UserDocument;
}
