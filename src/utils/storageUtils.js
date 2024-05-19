import { storage } from "../localStorage/asyncStorage";

export const saveUserId = async (userId) => storage.save({ key: "userId", data: userId })

export const getUserId = async () => storage.load({ key: "userId" }).then(r => r)

export const saveLoginToken = async (token) => storage.save({ key: "loginToken", data: token })

export const getLoginToken = async () => storage.load({ key: "loginToken" }).then(r => r)

export const saveUserName = async (username) => storage.save({ key: "username", data: username })

export const getUserName = async () => storage.load({ key: "username" }).then(r => r)