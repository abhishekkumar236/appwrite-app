import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

class AuthService {
  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async signUp({ email, password, username }) {
    try {
      return await this.account.create(ID.unique(), email, password, username);
    } catch (error) {
      console.log("error in signup", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("error in login", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }

    return null;
  }

  async logout() {
    try {
      this.account.deleteSessions();
      return true;
    } catch (error) {
      console.log("error in logout", error);
      return false;
    }
  }
}

const authService = new AuthService();
export default authService;
