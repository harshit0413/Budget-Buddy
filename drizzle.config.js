import 'dotenv/config';

export default {
  schema: "./utlis/schema.jsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:rgzfdK97sFmb@ep-lucky-heart-a59d5p3l.us-east-2.aws.neon.tech/Budget-Buddy?sslmode=require'
  }
};
