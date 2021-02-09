import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  httpHeaders: string;
  url: string;
  httpResponse: string;
  countdown: string;
  body: string;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  generateOTP() {
    this.httpClient
      .post(this.url, this.body, {
        headers: new HttpHeaders(JSON.parse(this.httpHeaders)),
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
