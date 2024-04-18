import { Client, Account, ID, Avatars, Databases } from "react-native-appwrite";

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
export async function createUser(email, password, username) {
  // console.log("params", password);
  try {
    const newAccount = await account.create(ID.unique(), {
      email: email,
      password: password,
      name: username,
    });
    if (!newAccount) throw new Error("Couldn't create account");
    const avatarUrl = avatars.getInitials(username);
    await signIn(email, password);
    const newUser = await databases.createDocument(
      appWriteConfig.databaseId,
      appWriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        password,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't create account", error?.message);
  }
}

export async function signIn(email, password) {
  try {
    const session = await account.createEmailSession(email, password);
    return session;
  } catch (error) {
    throw new Error("Couldn't sign in", error?.message);
  }
}
