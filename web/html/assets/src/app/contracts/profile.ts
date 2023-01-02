export interface IProfile {
  getID(): number;
  getName(): string;
  getSurname(): string;
  getLogin(): string;
  getEMail(): string;
  getRole(): number;
  getToken(): string | undefined;
}
