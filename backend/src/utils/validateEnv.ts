import { cleanEnv, str, port } from 'envalid';
   
  function validateEnv() {
    cleanEnv(process.env, {
      DATABASE_URL: str(),
      PORT: port(),

      DB_USER: str() || undefined,
      DB_PASSWORD: str(),
      DB_HOST: str(),
      DATABASE: str(),
      DB_PORT: str()
    });
  }


export default validateEnv 