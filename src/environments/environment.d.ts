export interface CustomEnvironment {
  production: boolean;
  spaceId: string;
  accessToken: string;
}

declare module '@env' {
  const environment: CustomEnvironment;
  export default environment;
}