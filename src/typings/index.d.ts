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
