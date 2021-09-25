import { Request } from 'express';

import { UserDocument } from './models/auth.model';

export interface RequestWithUser extends Request {
  user: UserDocument;
}
