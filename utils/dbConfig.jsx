import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const sql = neon('postgresql://neondb_owner:rgzfdK97sFmb@ep-lucky-heart-a59d5p3l.us-east-2.aws.neon.tech/Budget-Buddy?sslmode=require');
export const db = drizzle(sql, { schema });
