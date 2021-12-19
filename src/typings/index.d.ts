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

declare type NavItemsName = '' | 'Work' | 'Place';

declare interface ITag {
  id: number;
  name: string;
}

declare interface IUserInfo {
  username: string;
  id: number;
  avatar: string;
  mobile: string;
}

declare interface IAnimeInfo {
  id: number;
  is_collected: boolean;
  places: { id: number; name: string }[];
  photos: { id: number; name: string; image: string }[];
  alias: string[];
  director: { id: number; name: string }[];
  original: { id: number; name: string }[];
  script: { id: number; name: string }[];
  storyboard: { id: number; name: string }[];
  actor: { id: number; name: string }[];
  music: { id: number; name: string }[];
  producer: { id: number; name: string }[];
  tags: ITag[];
  title: string;
  title_cn: string;
  description: string;
  cover: string;
  cover_medium: string;
  cover_small: string;
  epi_num: number;
  website: string;
  country: string;
  air_date: string;
  collection_num: number;
  is_public: boolean;
  is_approved: boolean;
  create_time: string;
  update_time: string;
  create_user: number;
  contributor: number[];
}

declare interface IPlaceInfoBrief {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}

declare interface IPlaceInfo extends IPlaceInfoBrief {
  photos: { id: number; name: string; image: string }[];
  is_collected: boolean;
  city: string;
  description: string;
  is_public: boolean;
  is_approved: boolean;
  collection_num: number;
  create_time: string;
  update_time: string;
  anime_id: number;
  create_user: number;
  contributor: number[];
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
