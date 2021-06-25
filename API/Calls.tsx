import axios, { AxiosRequestConfig } from "axios";

const API = axios.create({ baseURL: `${process.env.URL}/api` });

// Set header for each request to give permission

API.interceptors.request.use((req: AxiosRequestConfig) => {
  if (localStorage.getItem("Auth")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Auth")).token
    }`;
  }
  return req;
});

// login - register - update perfil

export const login = (loginData: {
  email: string | null;
  password: string | null;
}) => API.post(`/user/login`, loginData);

export const register = (registerData: {
  email: string;
  password: string;
  name: string;
}) => API.post("/user/register", registerData);

export const updatePerfilPhotos = (
  photosBase64: { perfil?: string; banner?: string },
  id: string
) => API.patch(`/user/update/${id}`, photosBase64);

export const AddNotification = (
  userInformation: { userId: string },
  id: string
) => API.patch(`/user/notification/${id}`, userInformation);

export const AddAsFriend = (userInformation: { userId: string }, id: string) =>
  API.patch(`/user/acceptNotification/${id}`, userInformation);

export const DeleteNotificationOrFriend = (
  userInformation: { data: { userId: string } },
  id: string
) => API.delete(`/user/deleteNotification/${id}`, userInformation);

// Publication

export const like = (userInformation: { identifier: string }, pubId: string) =>
  API.patch(`/publication/like/${pubId}`, userInformation);

export const likeComment = (
  userInformation: { identifier: string; commentId: string },
  pubId: string
) => API.patch(`/publication/likeComment/${pubId}`, userInformation);

export const createComment = (
  userInformation: { identifier: string; body: string },
  pubId: string
) => API.patch(`/publication/comment/${pubId}`, userInformation);

export const makePublication = (publicationInformation: {
  identifier: string;
  body: string;
  photo: string;
}) => API.post(`/publication`, publicationInformation);

export const deletePublication = (
  publicationInformation: { data: { identifier: string } },
  pubId: string
) => API.delete(`/publication/delete/${pubId}`, publicationInformation);

export const deleteComment = (
  Information: { data: { userId: string; commentId: string } },
  pubId: string
) => API.delete(`/publication/deleteComment/${pubId}`, Information);

export const editPub = (
  publicationInformation: { body?: string; photo?: string; identifier: string },
  publicationId: string
) => API.patch(`/publication/edit/${publicationId}`, publicationInformation);

export const editComment = (
  pubInformation: { identifier: string; body: string; commentId: string },
  publicationId: string
) => API.patch(`/publication/editComment/${publicationId}`, pubInformation);
