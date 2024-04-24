import { Account, Avatars, Client, Databases, ID, Query, Storage } from "react-native-appwrite";

export const appWriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.native.aora",
  projectId: "6620eecbf31ffbed7ec9",
  databaseId: "6620f024e5a4226a9ac4",
  userCollectionId: "6620f03e94126bf0cf16",
  videosCollectionId: "6620f06b2fcef240a3f8",
  storageId: "6620f06b2fcef240a3f8",
};

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(appWriteConfig.endpoint)
  .setProject(appWriteConfig.projectId)
  .setPlatform(appWriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const storage = new Storage(client);

const databases = new Databases(client);

export async function createUser(username, email, password) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw new Error("Couldn't create account");
    const avatarUrl = avatars.getInitials(username);
    await signIn(email, password);
    const newUser = await databases.createDocument(
      appWriteConfig.databaseId,
      appWriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    console.log(error);
    return {
      message: error.message,
      success: false,
    };
  }
}

export async function signIn(email, password) {
  try {
    const session = await account.createEmailSession(email, password);
    // console.log("session created", session);
    return session;
  } catch (error) {
    console.log(error);
    return {
      message: error.message,
      success: false,
    };
  }
}

export async function getAccount() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getCurrentUser() {
  try {
    const currAcc = await getAccount();
    if (!currAcc) throw Error;

    const currUser = await databases.listDocuments(
      appWriteConfig.databaseId,
      appWriteConfig.userCollectionId,
      [Query.equal("accountId", currAcc.$id)]
    );

    if (!currUser) throw Error;

    return currUser.documents[0];
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPosts() {
  try {
    const posts = await databases.listDocuments(
      appWriteConfig.databaseId,
      appWriteConfig.videosCollectionId
    );
    return posts.documents;
  } catch (error) {
    console.log(error);
  }
}

export async function getLatestPosts() {
  try {
    const posts = await databases.listDocuments(
      appWriteConfig.databaseId,
      appWriteConfig.videosCollectionId,
      [Query.orderDesc("$createdAt")]
    );
    return posts.documents;
  } catch (error) {
    console.log(error);
  }
}

export async function searchPosts(query) {
  try {
    const posts = await databases.listDocuments(
      appWriteConfig.databaseId,
      appWriteConfig.videosCollectionId,
      [Query.search("title", query)]
    );
    return posts.documents;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserPosts(userId) {
  try {
    const posts = await databases.listDocuments(
      appWriteConfig.databaseId,
      appWriteConfig.videosCollectionId,
      [Query.equal("creator", userId)]
    );
    return posts.documents;
  } catch (error) {
    console.log(error);
  }
}

export async function signOut() {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error) {
    throw new Error(error);
  }
}

async function getFilePreview(fileId, type) {
  let fileUrl;

  try {
    if (type === "image") {
      fileUrl = await storage.getFileView(appWriteConfig.storageId, fileId);
    } else if (type === "video") {
      fileUrl = await storage.getFilePreview(
        appWriteConfig.storageId,
        fileId,
        2000,
        2000,
        "top",
        100
      );
    } else {
      throw new Error("Invalid type");
    }

    if (!fileUrl) throw new Error("No file");
    return fileUrl;
  } catch (error) {
    throw new Error(error);
  }
}
export async function uploadFile(file, type) {
  if (!file) return;

  const { mimeType, ...rest } = file;
  const asset = {
    name: file.name,
    size: file.fileSize,
    uri: file.uri,
    type: file.mimeType,
  };
  try {
    const uploadedFile = await storage.createFile(
      appWriteConfig.storageId,
      ID.unique(),
      asset
    );

    const fileUrl = await getFilePreview(uploadedFile.$id, type);
    return fileUrl;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createVideo(form) {
  try {
    const [thumbnailUrl, videoUrl] = await Promise.all([
      uploadFile(form.thumbnail, "image"),
      uploadFile(form.video, "video"),
    ]);

    const newPost = await databases.createDocument(
      appWriteConfig.databaseId,
      appWriteConfig.videosCollectionId,
      ID.unique(),
      {
        title: form.title,
        description: form.description,
        thumbnail: thumbnailUrl,
        video: videoUrl,
        creator: form.userId,
        prompt: form.prompt,
      }
    );

    return newPost;
  } catch (error) {
    throw new Error(error);
  }
}
