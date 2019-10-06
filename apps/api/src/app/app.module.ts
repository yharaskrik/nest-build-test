import { HttpModule, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Lib1Module } from '@app/lib1/lib1.module';
import { Lib2Module } from '@app/lib2/lib2.module';
import { Lib3Module } from '@app/lib3/lib3.module';
import { Lib5Module } from '@app/lib5/lib5.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    Lib1Module,
    Lib2Module,
    Lib3Module,
    Lib5Module,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    HttpModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
