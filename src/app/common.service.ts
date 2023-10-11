import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  readonly url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  private apiKey = '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';
  private apiUrl = 'https://api.chatgpt.com/v1/chat/completions';

  sendMessage(message: string) {
    const requestBody = {
      prompt: message,
      max_tokens: 50,
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    };

    return this.http.post<any>(this.apiUrl, requestBody, { headers });
  }

  AddUpdateUser(data: any): Observable<any> {
    debugger
    return this.http.post(this.url, data);
  }
}
