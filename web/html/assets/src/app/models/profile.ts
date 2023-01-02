import { IProfile } from "../contracts/profile";
import { ERoles } from "./roles";

export class Profile implements IProfile {
  private _email: string = '';
  private _id: number = 0;
  private _login: string = '';
  private _name: string = '';
  private _role: number = ERoles.GUEST;
  private _surname: string = '';
  private _token: string | undefined = undefined;

  public get email(): string {
    return this._email
  }

  private set email(email: string) {
    this._email = email
  }

  public getEMail(): string {
    return this.email
  }

  public get login(): string {
    return this._login
  }

  private set login(login: string) {
    this._login = login
  }

  public getLogin(): string {
    return this.login
  }

  public get id(): number {
    return this._id
  }

  private set id(id: number) {
    this._id = id
  }

  public getID(): number {
    return this.id
  }

  public get name(): string {
    return this._name
  }

  private set name(name: string) {
    this._name = name
  }

  public getName(): string {
    return this.name
  }

  public get surname(): string {
    return this._surname
  }

  private set surname(surname: string) {
    this._surname = surname
  }

  public getSurname(): string {
    return this.surname
  }

  public get token(): string | undefined {
    return this._token
  }

  private set token(token: string | undefined) {
    this._token = token
  }

  public getToken(): string | undefined {
    return this.token
  }

  public get role(): number {
    return this._role
  }

  private set role(role: number) {
    this._role = role
  }

  public getRole(): number {
    return this.role
  }
}
