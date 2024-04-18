import { Client, Account, ID } from "react-native-appwrite";

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

export function createUser() {
  // Register User
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log("success", response);
    },
    function (error) {
      console.log("error", error);
    }
  );
}
