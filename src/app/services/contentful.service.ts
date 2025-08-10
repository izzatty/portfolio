import { Injectable } from '@angular/core';
import { createClient,Entry } from 'contentful'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken
  })

  getAllEntires(){
    const promise = this.client.getEntries()
    return from(promise);
      // .then(entries => console.log(entries));
  }
}

export const environment = {
    production: false,
    spaceId: '8mh4my9jgj9g',
    accessToken: 'SoynovuZrSN5lNcc6SyaHIJeTex0eR0tiR4vvxxt9so'
};
