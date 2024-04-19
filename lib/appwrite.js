import { Account, Avatars, Client, Databases, ID, Query } from "react-native-appwrite";

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

export async function getCurrentUser() {
  try {
    const currAcc = await account.get();
    if (!currAcc) throw Error;

    const currUser = await databases.listDocuments(
      appWriteConfig.databaseId,
      appWriteConfig.userCollectionId,
      [Query.equal("accountId", currAcc.id)]
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
