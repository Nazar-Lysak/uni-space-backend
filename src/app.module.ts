import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { MarketsModule } from './markets/markets.module';
import { AuthModule } from './auth/auth.module';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    MarketsModule, 
    AuthModule,
    RecipesModule
  ],
  controllers: [AppController],
  providers: [AppController],
})
export class AppModule {}
