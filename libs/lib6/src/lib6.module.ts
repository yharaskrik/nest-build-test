import { Module } from '@nestjs/common';
import { Lib6Service } from './lib6.service';

@Module({
  providers: [Lib6Service],
  exports: [Lib6Service],
})
export class Lib6Module {}
