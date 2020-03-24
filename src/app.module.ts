import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { SampleResolver } from './sample.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      path: 'graphql',
      autoSchemaFile: true
    })
  ],
  controllers: [AppController],
  providers: [AppService, SampleResolver],
})
export class AppModule {}
