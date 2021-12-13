declare module '*.css' {
  const content: { [selector: string]: string };
  export default content;
}

declare module '*.less' {
  const content: { [selector: string]: string };
  export default content;
}

declare module 'blueimp-md5' {
  const md5: (str: string, key?: string, raw?: string) => string;
  export default md5;
}

declare module '*.svg' {
  const content: { content: string; id: string; viewBox: string; node: SVGSymbolElement };
  export default content;
}

declare interface UserInfo {
  username: string;
  id: number;
  avatar: string;
  mobile: string;
}

declare interface ILoginRequest {
  username: string;
  password: string;
}

declare interface IRegisterRequest {
  username: string;
  password: string;
  confirmPassword: string;
  mobile: string;
  sms: string;
  allow: boolean;
}
