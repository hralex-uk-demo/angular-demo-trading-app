import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { NgModule } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpHeaders } from '@angular/common/http';


const uri = 'https://p54xjue5bfcj3fhhhzlbpqyn4i.appsync-api.eu-north-1.amazonaws.com/graphql'; 
const apiKey = 'da2-2nzixozykne4laba25cnhriay4';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {

  const headers = new HttpHeaders().set('x-api-key', apiKey);

  const http = httpLink.create({ uri, headers });

  return {
   link: http,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
