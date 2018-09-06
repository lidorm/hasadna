import {Injectable} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from './UserInterface'
import { ProfilesService } from './profiles-servie.service'
@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  public users = []
  constructor(private _ProfilesService: ProfilesService) {
  }
  
  ngOnInit() {
    this.users = this._ProfilesService.getProfiles()
  }

}
