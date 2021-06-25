// User representation

export type userFriends = {
  _id?: string;
  name?: string;
  perfil?: string;
  identifier?: string;
  notification?: boolean;
  friend?: boolean;
  createdAt?: string;
};

export type user = {
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  friends?: userFriends[];
  banner?: string;
  perfil?: string;
};

export interface IuserData {
  data: user;
}

export type multipleUsers = { data: user[] };

// Publication representation

export type theLikes = {
  identifier: string;
};

export type theComment = {
  _id?: string;
  body: string;
  name: string;
  perfil?: string;
  identifier: string;
  createdAt: string;
  likesComments?: theLikes[];
};

export interface Ipublication {
  _id?: string;
  body: string;

  photo: string;

  creator: {
    name: string;
    perfil?: string;
    identifier: string;
  };

  likes?: theLikes[];

  comments?: theComment[];

  createdAt: string;
}

export type thePublication = {
  data: Ipublication[];
};

export type singlePublication = {
  data: Ipublication;
};
