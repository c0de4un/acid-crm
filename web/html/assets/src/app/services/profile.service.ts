import { Injectable } from '@angular/core';
import { IProfile } from "../contracts/profile";
import { Profile } from "../models/profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private _profile: Profile = new Profile()

  constructor() {
  }

  public get profile(): IProfile {
    return this._profile
  }

  public getProfile(): IProfile {
    return this.profile
  }
}
