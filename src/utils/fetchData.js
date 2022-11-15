import { request } from "./api.js";

export const getRootDocuments = async () => {
  const response = await request("/documents");
  return response;
};

export const createNewDocument = async (data) => {
  const response = await request("/documents", "POST", data);
  return response;
};

export const getDocumentDetail = async (documentId) => {
  const response = await request(`/documents/${documentId}`);
  return response;
};

export const updateDocument = async (documentId, data) => {
  const response = await request(`/documents/${documentId}`, "PUT", data);
  console.log(response);
  return response;
};

export const deleteDocumet = async (documentId) => {
  const response = await request(`/documents/${documentId}`, "DELETE");
  console.log(response);
};
