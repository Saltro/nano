declare module '*.css' {
  const content: { [selector: string]: string };
  export default content;
}

declare module '*.less' {
  const content: { [selector: string]: string };
  export default content;
}
