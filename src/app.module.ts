// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';

import databaseConfig from './config/database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatsService } from './services/stats.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    MongooseModule.forRootAsync({
      connectionName: 'sourceConnection',
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('database.source.uri'),
      }),
    }),
    MongooseModule.forRootAsync({
      connectionName: 'targetConnection',
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('database.target.uri'),
      }),
    }),
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, StatsService],
})
export class AppModule {}
